const initialState = {
  isLoad: true,
  homepageData: {},
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ISLOAD":
      return {
        ...state,
        isLoad: false,
      };

    default:
      return {
        ...state,
      };
  }
};
