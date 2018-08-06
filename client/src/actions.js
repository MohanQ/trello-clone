import CHANGE_MODAL_STATE from './constants';

export const changeModalState = (isOpen) => {
    return {
        type: CHANGE_MODAL_STATE,
        payload: isOpen
    }
}