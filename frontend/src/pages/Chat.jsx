import React from 'react'
import { Socket } from 'socket.io-client'
const Chat = () => {
  return (
    <div>
        {
          Socket.on("connect", () => {
            console.log(Socket.id);
          })
        }
    </div>
  )
}

export default Chat
