import { CHANGE_MODAL_STATE } from "./constants";

const initialModalState = {
    isOpen: false
};

export const modalStateChangeReducer = (
    state = initialModalState,
    action = {}
) => {
    switch (action.type) {
        case CHANGE_MODAL_STATE:
            return Object.assign({}, state, { isOpen: action.payload });
        default:
            return state;
    }
};
