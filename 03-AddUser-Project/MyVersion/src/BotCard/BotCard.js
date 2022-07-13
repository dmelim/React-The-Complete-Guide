import React from "react";

import "./BotCard.css";

const BotCard = props => {
    return <ul className="botCard">
        {props.items.map(data =>
            <div className="botCard">
                <li>{`${data.username} is ${data.age}`}</li> 
            </div>
                
        )}
    </ul>
}

export default BotCard;