"use client"
import {useState} from 'react'
import React from 'react'

const ExpsenseForm = ({onAddExpense}: any) => {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        if(description.length > 0 && amount){
            onAddExpense({
                id: Date.now(),
                description: description,
                amount: parseFloat (amount)
            });
            setDescription('')
            setAmount('')
    }}
  return (
    <div className='mb-6'>
        <form onSubmit={handleSubmit}
        className='space-y-5'>
            <div className='input-dev'>
                <input type="number" 
                placeholder='Amount'
                value={amount}
                onChange={(e:any) => setAmount(e.target.value)}
                className='cursor-text w-full px-4 h-12 rounded-lg text-gray-500 '
                />

            </div>
            <div>

            <input type="text" 
                placeholder='description'
                value={description}
                onChange={(e:any) => setDescription(e.target.value)}
                className='cursor-text w-full px-4 h-12 rounded-lg text-gray-500 '
                />

            </div>
            <div className='flex justify-end'>
                <button
                type='submit'
                className='cursor-pointer px-4 py-2 bg-gray-200 text-gray-500 shadow-lg rounded-lg font-bold'>
                    Add Expense
                 </button>
            </div>
        </form>
    </div>
  )
}

export default ExpsenseForm