import React from 'react'

import './Message.css'

function Message(props) {
    const message = props.message

    let borderOnSelf = ""

    console.log(message.parts[0].payload.content, props, props.user === message.senderId)
    if (props.user === message.senderId && message.senderId !== "anonymous") {
        borderOnSelf = "border"
    }

    return (
        <>
        {message.parts.map((part,idx) => {
        if (part.partType === "inline") {
            return (
                <div key={idx} className="message">
                    <div className="message-username">{message.senderId}</div>

                    <div className={"talk-bubble tri-right round left-top " + borderOnSelf}>
                        <div className="talktext">
                            <p>{part.payload.content}</p>
                        </div>
                    </div>
                </div>
            )
        } else return null;
        })}
        </>
    )
}

export default Message