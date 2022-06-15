import { Action, actionTypes, add } from '../Types/Types';
import { Dispatch } from 'redux';

export const Addtransaction = (transObj: add) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: actionTypes.ADD_TRANSACTION,
            payload: {
                id: transObj.id,
                name: transObj.name,
                amount: transObj.amount,
                symbol: transObj.symbol
            }
        })
    }
}

export const Deltransaction = (id: number) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: actionTypes.DEL_TRANSACTION,
            payload: id
        })
    }
}

