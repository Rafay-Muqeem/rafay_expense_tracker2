import { actionTypes } from '../Types/Types';
import { add, Action } from '../Types/Types'

export const initialState: add[] = []

export const transReducer = (state: add[] = initialState , action: Action):add[] => {
    switch(action.type){

        case actionTypes.ADD_TRANSACTION: {
            return(
                [action.payload, ...state]
            );
        }
        case actionTypes.DEL_TRANSACTION: {
            return(
                state.filter(trans => trans.id !== action.payload)
            );
        }
        default:{
            return state;
        }
    }
}

