import test from 'node:test'
import assert from 'node:assert'
import fixture from '../fixture.json'
import { ApiCallout, Callout, uiCallouts } from '../lib/callouts'

test('creates uiCallouts from ApiCallouts', () => {
  const callouts = uiCallouts(fixture)

  //assert(callouts.length === 4)
  //assert(callouts[0].effectiveDate === fixture[3].versionContent[0].effectiveDate)
  assert(callouts[1].effectiveDate === fixture[0].versionContent[0].effectiveDate)
});

