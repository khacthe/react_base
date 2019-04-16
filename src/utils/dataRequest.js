export const getDataRequest = (payload) => {
  const dataRquest = {};
  /* eslint prefer-destructuring: [0, {AssignmentExpression: {array: true}}] */
  if (payload.page) {
    dataRquest.page = payload.page;
  }
  return dataRquest;
};
