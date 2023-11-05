"use client"

import ExpenseList from "@/components/ExpenseList";
import ExpsenseForm from "@/components/ExpsenseForm";
import {useState} from "react"
export type Expense = {
   id:number;
   description:string;
   amount:number;
   

  
}

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const addExpense = (expense: Expense) =>{
    setExpenses((prevExpenses)=> [...prevExpenses, expense])
  }
  const deleteExpense = (id:number) => {
    setExpenses((prevExpenses) => 
    prevExpenses.filter((expense: Expense) =>
    expense.id !== id))

  }
  return (
   <div>
    <h1 className="text-2xl font-bold text-center mb-4 text-gray-500">Expense Tracker</h1>
      <ExpsenseForm onAddExpense= {addExpense}/>
      {expenses.length ? (
        <ExpenseList  expenses={expenses} onDeleteExpense={deleteExpense}/>

      ):null}
   </div>
  )
}
