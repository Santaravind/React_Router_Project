import React from 'react'
import { useParams } from 'react-router-dom';
function User() {
    const {userid}=useParams();
  return (
    <div className='text-white bg-purple-400 text-2xl font-semibold p-4'>
      User:{userid}
    </div>
  )
}

export default User
