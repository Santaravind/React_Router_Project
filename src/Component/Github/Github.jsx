import React, { useEffect, useState } from 'react'

function Github() {
 const[data,setData]=useState([])
  useEffect(()=>{
       fetch('https://api.github.com/users/hiteshchoudhary')
       .then((responce)=>responce.json())
       .then((data)=>{
        console.log(data)
        setData(data)
       })
      
  },[])
  return (
    <div className='flex flex-col gap-2'>
    <div className='text-3xl font-semibold bg-gray-600 p-2 justify-center items-center text-purple-600' >
        
       Github Followers:{data.followers }
      <div>      <img src={data.avatar_url} alt="Git pichure" width={300}
       />
       </div>
 
    </div>
    </div>
  )
}

export default Github
