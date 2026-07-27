import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const shellUrl = new URL('../components/PrototypeShell.tsx', import.meta.url)
const appUrl = new URL('../app/App.tsx', import.meta.url)
const cssUrl = new URL('../styles/global.css', import.meta.url)

test('the shared shell uses native dialog semantics and has no domain-controller dependency', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /dialog\.showModal\(\)/)
  assert.match(shell, /onCancel=/)
  assert.match(shell, /aria-haspopup="dialog"/)
  assert.match(shell, /returnFocusRef\.current\.focus\(\)/)
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

test('the session header suppresses an exact role repeated as a synthetic display name', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /replace\(\/\^synthetic\\s\+\/i, ''\)/)
  assert.match(shell, /const repeatedRole =/)
  assert.match(shell, /\{!repeatedRole && <span>\{representedSession\.role\}<\/span>\}/)
})

test('App changes the represented synthetic role and route together without a handoff popup', async () => {
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

test('wide operational screens use the available workspace without crowding the header disclaimer', async () => {
  const css = await readFile(cssUrl, 'utf8')
  assert.match(css, /\.task-workspace main \{ max-width: 96rem; \/\* wide-task-layout \*\//)
  assert.match(css, /\.prototype-disclaimer \{[^}]*white-space: nowrap;/)
})
