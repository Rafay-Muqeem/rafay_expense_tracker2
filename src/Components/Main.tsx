import { useState } from "react";
import AddTransaction from "./AddTransaction";
import Balance from "./Balance";
import IncomeExpense from "./incomeExpense";
import TransList from "./TransList";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {actionCreators} from '../redux/export';
import { store } from '../redux/Store';



function Main(){
    

    const dispatch = useDispatch();
    const state = useSelector((state: store) => state)

    const {Addtransaction, Deltransaction} = bindActionCreators(actionCreators, dispatch);

    let [income, setIncome] = useState<number>(0);
    let [expense, setExpense] = useState<number>(0);

    // console.log(state);

    return(
        <div>
            <h1>Expense Tracker</h1>
            <Balance
                income={income}
                expense={expense}
            />
            <IncomeExpense
                income={income} 
                setIncome={setIncome}
                expense={expense} 
                setExpense={setExpense} 
            />
            <TransList 
                data={state} 
                Deltrans={Deltransaction} 
                income={income}
                setIncome={setIncome}
                expense={expense}
                setExpense={setExpense}
            />

            <AddTransaction 
                income={income} 
                setIncome={setIncome}
                expense={expense} 
                setExpense={setExpense}
                Addtrans={Addtransaction}
            /> 
        </div>
    );

}

export default Main;