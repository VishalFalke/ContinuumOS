import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const shellUrl = new URL('../components/PrototypeShell.tsx', import.meta.url)
const appUrl = new URL('../app/App.tsx', import.meta.url)
const cssUrl = new URL('../styles/global.css', import.meta.url)

test('the shared shell uses native dialog semantics and has no domain-controller dependency', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /export function ModalDialog/)
  assert.match(shell, /dialog\.showModal\(\)/)
  assert.match(shell, /onCancel=/)
  assert.match(shell, /aria-haspopup="dialog"/)
  assert.match(shell, /returnFocusRef\.current\.focus\(\)/)
  assert.match(shell, /dialog\.scrollTop = 0/)
  assert.match(shell, /requestAnimationFrame/)
  assert.match(shell, /cancelAnimationFrame/)
  assert.match(shell, /focus\(\{ preventScroll: true \}\)/)
  assert.doesNotMatch(shell, /from '\.\.\/domain\//)
})

test('the shell keeps direct-route context explicit outside the compact session header', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /directRouteNotice\(activeScreen, launchEstablished\)/)
  assert.match(shell, /className="direct-route-notice"/)
  assert.match(shell, /<strong>Demonstration context<\/strong>/)
  assert.doesNotMatch(shell, /\{directRoute && <span>\{directRoute\}<\/span>\}/)
  assert.match(shell, /roleMismatch/)
  assert.match(shell, /Access preview/)
  assert.doesNotMatch(shell, /className="preview-badge"/)
  assert.match(shell, /<details className="portfolio-navigation"/)
})

test('the session header presents the named fictional person, role and organisation when available', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /replace\(\/\^synthetic\\s\+\/i, ''\)/)
  assert.match(shell, /const repeatedRole =/)
  assert.match(shell, /personForScreen\(activeScreen\)/)
  assert.match(shell, /person\.role\} · \{person\.organization/)
  assert.match(shell, /className="user-avatar user-photo"/)
})

test('App changes the represented role and route together without a handoff popup', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /function requestNavigation\(screenId: ScreenId\)/)
  assert.match(app, /setSession\(sessionForScreen\(screenId\)\); navigateTo\(screenId\)/)
  assert.match(app, /onSelect=\{requestNavigation\}/)
  assert.match(app, /onReturn=\{requestNavigation\}/)
  assert.doesNotMatch(app, /setPendingHandoff/)
  assert.doesNotMatch(app, /<SimulatedRoleHandoffDialog/)
})

test('App places direct-route context in the workspace rather than the top bar', async () => {
  const app = await readFile(appUrl, 'utf8')
  const css = await readFile(cssUrl, 'utf8')
  assert.match(app, /<DirectRouteNotice activeScreen=\{activeScreen\} launchEstablished=\{launchEstablished\} \/>/)
  assert.match(css, /\.direct-route-notice \{[\s\S]*order: 4;/)
})

test('interviewer-facing screen eyebrows do not expose internal story or screen numbers', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.doesNotMatch(app, /<p className="eyebrow">SCR-/)
  assert.doesNotMatch(app, /<p className="eyebrow">COS-/)
})

test('portfolio journey is visually separate, responsive and does not use a modal', async () => {
  const css = await readFile(cssUrl, 'utf8')
  assert.match(css, /\.portfolio-navigation \{/)
  assert.match(css, /\.portfolio-navigation \.nav-group ol \{/)
  assert.match(css, /\.portfolio-navigation \{ width: calc\(100% - 2rem\); \}/)
})

test('the header keeps the named session at the far right and gives the boundary its own compact treatment', async () => {
  const app = await readFile(appUrl, 'utf8')
  const css = await readFile(cssUrl, 'utf8')
  assert.match(app, /<div className="topbar-context">[\s\S]*prototype-disclaimer[\s\S]*<SessionIdentity/)
  assert.match(css, /\.topbar-context \{[\s\S]*margin-left: auto;/)
  assert.match(css, /\.session-identity \{[\s\S]*margin-left: 0;/)
  assert.match(css, /\.task-workspace main \{ max-width: 96rem; \/\* wide-task-layout \*\//)
  assert.match(css, /\.prototype-disclaimer \{[^}]*white-space: nowrap;/)
})
