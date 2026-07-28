import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import fixture from '../fixtures/synthetic-tracer.json' with { type: 'json' }

const context = readFileSync(new URL('../components/CareNetworkContext.tsx', import.meta.url), 'utf8')
const shell = readFileSync(new URL('../components/PrototypeShell.tsx', import.meta.url), 'utf8')
const workflow = readFileSync(new URL('../components/WorkflowContext.tsx', import.meta.url), 'utf8')
const app = readFileSync(new URL('../app/App.tsx', import.meta.url), 'utf8')
const styles = readFileSync(new URL('../styles/global.css', import.meta.url), 'utf8')

test('the fictional care network names people, facilities and synthetic system boundaries', () => {
  assert.equal(fixture.careNetwork.classification, 'fictional demonstration network')
  for (const person of Object.values(fixture.careNetwork.people)) {
    assert.ok(person.display)
    assert.ok(person.role)
    assert.ok(person.organization)
    assert.match(person.photo, /^\/assets\/people\/.+\.png$/)
    assert.equal(existsSync(new URL(`../../public${person.photo}`, import.meta.url)), true)
  }
  for (const system of Object.values(fixture.careNetwork.systems)) {
    assert.ok(system.display)
    assert.match(system.qualifier, /Simulated|simulated|Illustrative|Prototype/)
  }
})

test('the journey rail exposes a compact evidence path relevant to each workflow phase', () => {
  for (const phase of ['Diagnostic progress', 'Clinical review', 'Human direction', 'Handoff preparation', 'Receiving response', 'Optional assistance', 'Evidence verification']) {
    assert.match(context, new RegExp(`'${phase}':`))
  }
  assert.match(context, /Meadowbrook EHR/)
  assert.match(context, /Meridian RIS/)
  assert.match(context, /Philips PACS/)
  assert.match(context, /Willow Portal/)
  assert.match(context, /AI draft/)
  assert.match(workflow, /<ContextualEvidenceRoute phase=\{phase\} \/>/)
  assert.equal(fixture.careNetwork.systems.imagingPacs.display, 'Philips Enterprise Imaging / PACS')
  assert.match(fixture.careNetwork.systems.imagingPacs.qualifier, /Illustrative simulated image source; no live connection/)
})

test('named people use consistent portraits while the one global header carries the prototype boundary', () => {
  assert.match(context, /alt=\{person\.display\}/)
  assert.match(shell, /personForScreen\(activeScreen\)/)
  assert.match(workflow, /alt="Asha Mehta"/)
  assert.match(app, /<p className="prototype-disclaimer"><strong>Portfolio prototype<\/strong><span>Synthetic data · No live connections<\/span><\/p>/)
  assert.equal((app.match(/Portfolio prototype/g) ?? []).length, 1)
  assert.doesNotMatch(app, /<SystemExchangeStrip/)
})

test('verified-patient workflow screens provide concise source-backed patient context without inventing clinical history', () => {
  assert.equal(fixture.patient.age, 48)
  assert.match(workflow, /View patient context/)
  assert.match(workflow, /aria-haspopup="dialog"/)
  assert.match(workflow, /<ModalDialog initialFocusId=\{titleId\}/)
  assert.match(workflow, /id=\{titleId\} tabIndex=\{-1\}/)
  for (const label of ['Patient', 'Linkage', 'Episode', 'Encounter', 'Diagnostic request', 'Current report', 'Current workflow', 'Next action']) {
    assert.match(workflow, new RegExp(`<dt>${label}</dt>`))
  }
  assert.match(workflow, /The order reason, allergies, medicines and medical history are not supplied in this prototype record/)
  assert.match(workflow, /Do not infer them/)
  assert.match(styles, /\.patient-context-grid \{[\s\S]*grid-template-columns: repeat\(2/)
  assert.match(styles, /@media \(max-width: 700px\)[\s\S]*\.patient-context-grid \{ grid-template-columns: 1fr; \}/)
})
