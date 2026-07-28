import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const appUrl = new URL('../app/App.tsx', import.meta.url)
const shellUrl = new URL('../components/PrototypeShell.tsx', import.meta.url)
const stylesUrl = new URL('../styles/global.css', import.meta.url)

test('successful launch moves directly into the workspace without an interruption dialog', async () => {
  const shell = await readFile(shellUrl, 'utf8')
  assert.match(shell, /Access preview/)
  assert.doesNotMatch(shell, /className="preview-badge"/)
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /id="simulated-launch-trigger"/)
  assert.match(app, /setSession\(\{ displayName: 'Kavya Rao', role: 'Care Coordinator' \}\); navigateTo\('SCR-02'\)/)
  assert.doesNotMatch(app, /<SimulatedRoleHandoffDialog/)
})

test('episode overview separates read-only orientation from the next role and viewer navigation', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Episode summary/)
  assert.match(app, /item\.id === 'SYN-DR-6001' && item\.version === '2'/)
  assert.match(app, /Next owner/)
  assert.match(app, /Dr Neha Kapoor · Clinic physician · Meadowbrook Community Clinic/)
  assert.match(app, /Meridian Diagnostics supplied the updated report and ultrasound images/)
  assert.match(app, /Opens result review for this case\. No workflow action is recorded/)
  assert.match(app, /Open result review/)
  assert.match(app, /onViewNext=\{\(\) => requestNavigation\('SCR-03'\)\}/)
})

test('access and linkage failures keep protected context hidden and name accountable recovery', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /\['Authorisation denied', 'Integration Unavailable', 'Patient Match Failed'\]/)
  assert.match(app, /Protected patient and episode context remains hidden until accountable recovery and re-verification/)
  assert.match(app, /Accountable recovery owner: \{profile\.owner\}/)
  assert.match(app, /No patient, encounter or episode detail is shown on this recovery route/)
  assert.match(app, /protectedContextHidden \? <aside/)
  assert.match(app, /result\.kind === 'exception'\) \{ setAuthorised\(false\); setLaunchEstablished\(false\)/)
})

test('orientation screens stack navigation above content at the approved narrow viewport', async () => {
  const styles = await readFile(stylesUrl, 'utf8')
  assert.match(styles, /@media \(max-width: 700px\)/)
  assert.match(styles, /\.orientation-navigation \{ margin-bottom: 1\.5rem; \}/)
  assert.match(styles, /\.portfolio-navigation \{ width: calc\(100% - 2rem\); \}/)
})
