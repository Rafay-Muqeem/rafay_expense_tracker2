import React from 'react'
import { main } from '../Types/Types'

const TransList: React.FC<main> = (data) => {

    const handleDel = (id: number, amount: number, symbol: string) => {

        data.Deltrans(id);

        if(symbol === '+'){
            data.setIncome(data.income - amount)
        }
        else if(symbol === '-'){
            data.setExpense(data.expense - amount)
        }

    }

    const data1 = data.data;

    return (
        <div>
            {data1.map( (key) => {
                return(
                    <div key={key.id} >
                        <ul className="transList">
                            <li>{key.name}</li>
                            <li>{key.symbol}{key.amount}</li>
                            <button onClick={ () => handleDel(key.id, key.amount, key.symbol) }>X</button>
                        </ul>
                    </div>
                );
            })}
            
        </div>
    )
}

export default TransList;


