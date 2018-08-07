import { CHANGE_MODAL_STATE } from "./constants";

export const changeModalState = (isOpen, ids) => {
    return {
        type: CHANGE_MODAL_STATE,
        payload: { isOpen: isOpen, ids: ids }
    };
};
