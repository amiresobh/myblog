var isOpen = false;

export const setConnectPopoverState = (nextState: boolean) => {
  isOpen = nextState;
  console.log("setted:", isOpen);
};
export const toggleConnectPopoverState = () => {
  isOpen = !isOpen;
  console.log("toggled:", isOpen);
};

export const getConnectPopoverState = () => {
  console.log("getted!");
  return isOpen;
};
