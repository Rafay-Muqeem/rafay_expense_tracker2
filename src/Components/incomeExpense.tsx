import React from 'react'
import { inEx } from '../Types/Types'

export default function IncomeExpense(data: inEx) {
    return (
        <div className="inEx">
            <div>
                <h4>Income : {data.income}</h4>
            </div>
            <div>
                <h4>Expense : {data.expense}</h4>
            </div>
        </div>
    )
}
