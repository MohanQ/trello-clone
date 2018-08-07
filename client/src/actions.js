import { CHANGE_MODAL_STATE } from "./constants";

export const changeModalState = isOpen => {
  console.log("changeModalState action is called! Parameter isOpen: ", isOpen);
  return {
    type: CHANGE_MODAL_STATE,
    payload: isOpen
  };
};
