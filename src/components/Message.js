import React from 'react'

function Message(props) {
    const message = props.message

    let messageStyle = "message-text"

    console.log(message.parts[0].payload.content, props, props.user === message.senderId)
    if (props.user === message.senderId) {
        messageStyle = "message-text-self"
    }

    return (
        <>
        {message.parts.map((part,idx) => {
        if (part.partType === "inline") {
            return (
                <div key={idx} className="message">
                    <div className="message-username">{message.senderId}</div>
                    <div className={messageStyle}>{part.payload.content}</div>
                </div>
            )
        } else return null;
        })}
        </>
    )
}

export default Message