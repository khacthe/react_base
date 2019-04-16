export const selectDatas = state => {
  const { ...rest } = state.homeReducer;
  return {
    ...rest,
  };
};

export const selectContact = state => {
  const { ...rest } = state.contactReducer;
  return {
    ...rest,
  };
};

export const selectAbout = state => {
  const { ...rest } = state.aboutReducer;
  return {
    ...rest,
  };
};
