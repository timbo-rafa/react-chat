import React from 'react'

function Message(props) {
    const message = props.message

    return (
        <>
        {message.parts.map((part,idx) => {
        if (part.partType === "inline") {
            return (
                <div key={idx} className="message">
                    <div className="message-username">{message.senderId}</div>
                    <div className="message-text">{part.payload.content}</div>
                </div>
            )
        } else return null;
        })}
        </>
    )
}

export default Message