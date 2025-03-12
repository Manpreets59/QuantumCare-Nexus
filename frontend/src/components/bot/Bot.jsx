import React, { useState } from 'react'
import QuantumCareBot from './QuantumCare'
import chatIcon from '/chat-bot.jpg'

 function Bot() {

  const [chatbotOpen,setChatbotOpen] = useState(false)
  const handleChatClick = () =>{
    setChatbotOpen(!chatbotOpen)
  }

  return (
    <div >
     <div className=' w-12 h-12 rounded-full fixed bottom-10 left-0 shadow-md shadow-emerald-400 z-40 bg-white cursor-pointer m-2' onClick={handleChatClick}>
            <img src={chatIcon} alt=""  className='w-full h-full rounded-full'/>
    </div>
    {chatbotOpen ? <QuantumCareBot/> : ""}
    </div>
  )
}
export default Bot
