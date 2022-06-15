
export type inEx = {
    income: number ,
    setIncome: (p:number) => void,
    expense: number ,
    setExpense: (p:number) => void
}

export type balance = {
    income: number,
    expense: number
}

export type add = {
    id: number,
    name: string,
    amount: number,
    symbol: string
}

export enum actionTypes {
    ADD_TRANSACTION= "ADD_TRANSACTION",
    DEL_TRANSACTION= "DEL_TRANSACTION"
}

export interface Add {
    type: actionTypes.ADD_TRANSACTION;
    payload: add
}

export interface Del {
    type: actionTypes.DEL_TRANSACTION;
    payload: number
}

export type Action = Add | Del

export type Addtrans = {
    income: number,
    setIncome: (p:number) => void,
    expense: number,
    setExpense: (p:number) => void,
    Addtrans: (transObj: add) => void,
}; 

export type main = { 
    data: add[],
    Deltrans: (id: number) => void,
    income: number,
    setIncome: (p:number) => void,
    expense: number,
    setExpense: (p: number) => void
}