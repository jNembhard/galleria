export const setIncrease = (num) => {
  return {
    type: "SET_INCREASE",
    payload: num,
  };
};

export const setDecrease = (num) => {
  return {
    type: "SET_DECREASE",
    payload: num,
  };
};
