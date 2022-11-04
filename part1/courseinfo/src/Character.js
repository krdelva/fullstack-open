import { useState } from "react";

const Character = ({player, handlePlayer}) => {
    const [message, setMessage] = useState("");

    const [updated, setUpdated] = useState(message)

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleClick = () => {
        // "message" stores input field value
        setUpdated(message);
        console.log(message);
        handlePlayer(message);
    }
    
    return (
        <>
            <h2>{player.name}</h2>
            <p>HP: {player.hp}</p>
            <p>MP: {player.mp}</p>
            <p>ATK: {player.atk}</p>
            <p>DEF: {player.def}</p>

            <label>Hello:</label>
            <input 
                type="text"
                value={message}
                onChange={handleChange}    
            />

            <button onClick={handleClick}>Update</button>
        </>
    )
}

export default Character;