import axios from "axios";
import React, { useState } from "react";

const Form = () => {
    const [name,setName]= useState("");
    const [message,setMessage] = useState("");
    
function submitCheck(){
    if(name.length < 3){
        alert ("Name should be greater then 3.");
        return;
    }
    else if(message.length < 10) {
        alert ("Message should be greater then 10 charaters.");
        return;
    }
    else{
        axios.post('https://aj-pager-1fc57-default-rtdb.asia-southeast1.firebasedatabase.app/message.json', {
            name: name,
            message: message
          })
    }
}



  return (
    <div className=" lg:w-1/3 w-1/2  flex flex-col gap-4 bg-gray-200 backdrop-blur-lg bg-opacity-30 p-8 mt-8 text-white rounded-md">
      <p className="text-center text-2xl playwrite">Send a message to Anshu</p>
      <div className="name flex gap-2 border-2 border-gray-200 rounded-md p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <input type="text" placeholder="Enter your name" className=" bg-transparent w-full h-full" onChange={(e)=>{
            setName(e.target.value);
        }}></input>
      </div>
      <div className="message flex gap-2  border-2 border-gray-200 rounded-md p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
          />
        </svg>

        <input type="text" placeholder="Enter your message" className="bg-transparent w-full h-full" onChange={(e)=>{
            setMessage(e.target.value);
        }}></input>
      </div>
      <div className="flex justify-center">
        <button className="w-full bg-blue-600 px-4 py-1 rounded-sm" onClick={submitCheck}>Submit</button>
      </div>
    </div>
  );
};



export default Form;
