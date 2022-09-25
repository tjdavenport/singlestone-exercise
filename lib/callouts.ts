import fixture from '../fixture.json'
export const apiUrl = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge'

export type Callout = {
  title: string;
  body: string;
  effectiveDate: string;
}

export type ApiCallout = {
  id: string;
  stepNumber: string;
  versionContent: Array<Callout>
}

export const uiCallouts = (callouts: Array<ApiCallout>): Array<Callout> => {
  const essentials = callouts
    .sort(({ stepNumber: a }, { stepNumber: b }) => parseInt(a) - parseInt(b))
    .map(callout => {
      const [ mostRecent ] = callout.versionContent
        .sort(({ effectiveDate: a }, { effectiveDate: b }) => {
          return Date.parse(b) - Date.parse(a)
        })
      return mostRecent
    })
    .filter(callout => callout)

  return essentials;
}
