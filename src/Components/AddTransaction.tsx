import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Addtrans, add } from '../Types/Types';

const AddTransaction: React.FC<Addtrans> = (results) => {

    let [name, setName] = useState<string>('');
    let [amount, setAmount] = useState<number>(0);
    let [symbol, setSymbol ] = useState<string>('');

    let id:number = Math.floor(Math.random() * 100);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const AddObj: add = {
            id: id,
            name: name,
            amount: amount,
            symbol: symbol
        }


        if(name === ""){
            alert("Enter the name")
        }
        else{
            results.Addtrans(AddObj);
        }

        if(symbol === '+'){
            results.setIncome(results.income+amount)
        }

        if(symbol === '-'){
            results.setExpense(results.expense+amount);
        }


        setName('');
        setAmount(0);
        setSymbol('');
    }
    if(symbol === ''){
        return(
            <div className="inExToggle">
                <Button className="btn-success" onClick={ () => setSymbol('+') } >Income</Button>
                <Button className="btn-danger" onClick={ () => setSymbol('-') } >Expense</Button>
            </div>
        );
    }

    return (
        <div className="Add">
            <h4>Add Transaction</h4>
            <div className="input-group mb-3 col-4">
                <span className="input-group-text" id="basic-addon1">name</span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" value={name} onChange={ (e) => setName(e.target.value) } />
            </div>
            <div className="input-group mb-3 col-4">
                <span className="input-group-text" id="basic-addon1">amount</span>
                <input type="number" className="form-control" placeholder="Amount" aria-label="Username" aria-describedby="basic-addon1" value={amount} onChange={ (e) => setAmount( parseInt(e.target.value) ) } />
            </div>
            {/* <div className="inExToggle">
                <button onClick={ () => setSymbol('+') } >Income</button>
                <button onClick={ () => setSymbol('-') } >Expense</button>
            </div> */}
            <Button onClick={handleSubmit} type="submit" >Add Transaction</Button>
        </div>
    )
}

export default AddTransaction;