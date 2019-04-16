export const selectHome = state => {
  const { data, ...rest } = state.homeReducer;
  return {
    users: data,
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
