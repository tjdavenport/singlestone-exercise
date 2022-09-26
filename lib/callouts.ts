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
  const essentials = [ ...callouts ] // prevent mutation
    .sort(({ stepNumber: a }, { stepNumber: b }) => parseInt(a) > parseInt(b) ? 1 : -1)
    .map(callout => {
      const [ mostRecent ] = [ ...callout.versionContent ]
        .sort(({ effectiveDate: a }, { effectiveDate: b }) => {
          return Date.parse(a) < Date.parse(b) ? 1 : -1
        })
      return mostRecent
    })
    .filter(callout => callout)

  return essentials;
}
