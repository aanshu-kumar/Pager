import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Message = () => {
    const [data,setData]=useState([]);
    
    function fetchData()
    {
        let messages = [];
        axios.get("https://aj-pager-1fc57-default-rtdb.asia-southeast1.firebasedatabase.app/message.json")
        .then((response)=>{
        for(let msgId in response.data)
        {
            messages.push(response.data[msgId])
        }
        messages = messages.reverse();
        setData(messages);
        })
    }
    useEffect(fetchData,[])
  return (
        <div className='lg:w-1/3 w-1/2 flex flex-col gap-4 m-8'>
            {data.map((item,idx)=>{
                return <div key={idx} className='bg-gray-50 bg-opacity-30 backdrop-blur-md p-3 rounded-md'>
                    <p className='text-white text-lg font-semibold'>{item.name} :</p>
                    <p className='text-gray-200'>{item.message}</p>
                    </div>
            })}
        </div>
  )
}

export default Message
