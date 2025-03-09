import React, { useState } from 'react'
import { FormField } from './FormField'

export const AddUser = ({setUsers, users}) => {
    
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const addUser =()=>{
        const newUser ={
            id:Date.now().toString(),
            name: name,
            age:age,
            email:email,
        }
        setUsers([...users,newUser]);

        setName("")
        setAge("")
        setEmail("")
    }

  return (
    <div className='box-left'>
        <FormField fieldName="Name" fieldValue ={name} fieldChange={setName}/>
        <FormField fieldName="Age" fieldValue ={age} fieldChange={setAge}/>
        <FormField fieldName="Email" fieldValue ={email} fieldChange={setEmail}/>
        <button onClick={addUser}>Add User</button>
    </div>
  )
}
