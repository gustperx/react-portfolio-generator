export const portfolioReducer = (state = [], action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
};
