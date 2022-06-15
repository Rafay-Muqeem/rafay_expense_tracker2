import React from 'react'
import { balance } from '../Types/Types'

const Balance: React.FC<balance> = (results) => {
    return (
        <div className="balance">
            <h3>Balance : {results.income - results.expense} PKR</h3>
        </div>
    )
}

export default Balance;
