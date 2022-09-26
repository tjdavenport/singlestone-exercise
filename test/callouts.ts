import test from 'node:test'
import assert from 'node:assert'
import fixture from '../fixture.json'
import { uiCallouts } from '../lib/callouts'

test('creates uiCallouts from ApiCallouts', () => {
  const callouts = uiCallouts(fixture)
  assert(callouts.length === 4)
  assert(callouts[2].title === fixture[2].versionContent[2].title)
});

