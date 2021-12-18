export const setDate = (payload: any) => {
  return {
    type: "SET_DATE",
    payload: payload,
  };
};

export const setIsOpen = (payload: any) => {
  return {
    type: "SET_IS_OPEN",
    payload: payload,
  };
};

export const setDarkmode = (payload: any) => {
  return {
    type: "SET_DARKMODE",
    payload: payload,
  };
};
