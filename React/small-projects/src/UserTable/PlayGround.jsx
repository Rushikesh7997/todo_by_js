import React, { use, useState } from 'react'
import { AddUser } from './AddUser'
import { UsersList } from './UsersList'

export const PlayGround = () => {
    
  const [users,setUsers] = useState([])

  return (
    <div className='playground'>
        <AddUser setUsers={setUsers} users={users}/>
        <UsersList users={users}/>
    </div>
  )
}
