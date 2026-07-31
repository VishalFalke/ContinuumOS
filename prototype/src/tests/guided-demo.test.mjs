import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const app = await readFile(new URL('../app/App.tsx', import.meta.url), 'utf8')
const config = await readFile(new URL('../guided-demo/guided-demo-steps.ts', import.meta.url), 'utf8')
const demo = await readFile(new URL('../guided-demo/GuidedDemo.tsx', import.meta.url), 'utf8')
const css = await readFile(new URL('../styles/global.css', import.meta.url), 'utf8')

test('Guided Demo is optional, header-launched and resets the synthetic scenario for replay', () => {
  assert.match(app, /<GuidedDemo activeScreen=\{activeScreen\}/)
  assert.match(demo, />Take Guided Tour<\/button>/)
  assert.match(demo, /continuumos-guided-demo-invitation/)
  assert.match(demo, />Take guided tour<\/button>/)
  assert.match(demo, />Explore myself<\/button>/)
  assert.match(demo, /function startStory\(\)[\s\S]*onReset\(GUIDED_DEMO_STEPS\[0\]\.route\)/)
  assert.match(app, /function resetGuidedDemo\(screenId: ScreenId\)[\s\S]*setGuidedDemoRun/)
  assert.match(app, /key=\{guidedDemoRun\}/)
})

test('the main story has 15 single-sentence steps with stable target keys', () => {
  const mainStory = config.slice(config.indexOf('GUIDED_DEMO_STEPS'), config.indexOf('FAILURE_DEMO_STEPS'))
  const stepIds = [...mainStory.matchAll(/\{ id: '/g)]
  assert.equal(stepIds.length, 15)
  assert.doesNotMatch(mainStory, /headline|teaching point|takeaway/i)
  assert.match(demo, /data-demo-target/)
  assert.match(demo, /DEMO_TARGET_SELECTORS/)
})

test('consequential demo moments wait for real human-owned controls', () => {
  for (const action of ['report-acknowledged', 'direction-recorded', 'referral-routed', 'receiving-response-recorded', 'scoped-closure-recorded']) {
    assert.match(config, new RegExp(`requiredAction: '${action}'`))
  }
  assert.match(app, /selectedDirection === 'day-care referral'/)
  assert.match(app, /setRequiredFieldsComplete\(true\)/)
  assert.match(app, /setClinicalApprovalId\('SYN-CP-1001'\)/)
  assert.match(app, /setResponse\('accept'\)/)
  assert.match(app, /setConfirmed\(true\)/)
  assert.match(config, /Synthetic package evidence is prepared for this tour; click Route referral package/)
  assert.match(config, /Synthetic acceptance evidence is prepared for this tour; click Record receiving response/)
  assert.match(app, /outcome\.stateAfter === 'Referral Accepted'/)
  assert.match(app, /announceGuidedDemoAction\('scoped-closure-recorded'\)/)
})

test('story wording preserves the human and AI safety boundaries', () => {
  assert.match(config, /abdominal ultrasound is complete/)
  assert.match(config, /For this guided story, click Day-care referral/)
  assert.match(config, /AI summary helps with reading, but the report remains the source/)
  assert.match(config, /referral is sent, but Asha still has no confirmed next step/)
  assert.match(config, /next step will still need confirmation/)
  assert.match(config, /treatment is not complete/)
})

test('the tour frames cross-system complexity before the story and summarizes the orchestration outcome', () => {
  assert.match(demo, /Meridian RIS/)
  assert.match(demo, /Philips PACS/)
  assert.match(demo, /Clinic EHR/)
  assert.match(demo, /Referral portal and communication/)
  assert.match(demo, /Different systems\. Different organisations\./)
  assert.match(demo, /links the evidence, shows the accountable human and keeps the handoff open until it is confirmed/)
  assert.equal([...config.matchAll(/context: '/g)].length, 4)
  assert.match(demo, /What changed for Asha/)
  assert.match(demo, /Source-linked evidence in one workflow/)
  assert.match(demo, /ContinuumOS does not replace clinical systems or human decisions/)
})

test('the layer supports movement, dragging, Back, Exit, Escape, missing targets and reduced motion', () => {
  assert.match(demo, />Back<\/button>/)
  assert.match(demo, />Exit<\/button>/)
  assert.match(demo, /event\.key === 'Escape'/)
  assert.match(demo, /found \?\? null/)
  assert.match(demo, /prefers-reduced-motion: reduce/)
  assert.match(demo, /stepIndex % 2 === 1/)
  assert.match(demo, /onPointerDown=\{beginDrag\}/)
  assert.match(demo, /DEMO_SCENE_LABELS/)
  assert.match(demo, /Clinic physician view/)
  assert.match(demo, /requestAnimationFrame\(\(\) => \{[\s\S]*requestAnimationFrame/)
  assert.match(demo, /'result-status': '\.workspace-header'/)
  assert.match(config, /scroll: 'screen-top'/)
  assert.match(demo, /window\.scrollTo/)
  assert.match(demo, /acknowledge-report': '\.acknowledgement-panel \.primary-action'/)
  assert.match(config, /Click the highlighted Acknowledge action/)
  assert.match(demo, /Click Day-care referral/)
  assert.match(demo, /Click Save/)
  assert.match(demo, /overlapsTooltip/)
  assert.match(demo, /guided-demo-action-cue/)
  assert.match(demo, /Click highlighted control/)
  assert.match(demo, /\[activeScreen, step\]/)
  assert.match(demo, /const tooltipHeight = document\.querySelector<HTMLElement>\('\.guided-demo-tooltip'\)\?\.offsetHeight/)
  assert.match(demo, /const maximumTop = Math\.max\(16, window\.innerHeight - tooltipHeight - 16\)/)
  assert.match(demo, /if \(mode === 'intro'\) exitDemo\(\)/)
  assert.match(css, /\.guided-demo-dimmer/)
  assert.match(css, /\.guided-demo-active-target/)
  assert.match(css, /\.guided-demo-tooltip/)
})

test('the external action cue never falls back to a placement that overlaps the guide card', () => {
  assert.match(demo, /const selected = candidates\.find\(\(candidate\) => inViewport\(candidate\) && !overlapsTooltip\(candidate\)\)/)
  assert.match(demo, /setCueVisible\(Boolean\(selected\)\)/)
  assert.doesNotMatch(demo, /\?\? candidates\.find\(inViewport\)/)
})

test('routing and scoped-closure steps explicitly align their guide cards to the right', () => {
  assert.match(config, /id: 'human-routing'[\s\S]*?cardAlign: 'right'/)
  assert.match(config, /id: 'safe-closure'[\s\S]*?cardAlign: 'right'/)
  assert.match(demo, /step\.cardAlign === 'right'/)
})

test('the optional unclear-data branch returns to the existing exception route', () => {
  assert.match(config, /FAILURE_DEMO_STEPS/)
  assert.match(config, /route: 'SCR-07'/)
  assert.match(demo, /See what happens when data is unclear/)
  assert.match(app, /condition: 'Patient Match Failed'/)
})

test('guided cards explain required clicks and the last optional step finishes explicitly', () => {
  assert.match(demo, /Click the highlighted button to move next\./)
  assert.match(demo, /stepIndex === steps\.length - 1 \? 'Finish' : 'Next'/)
})
