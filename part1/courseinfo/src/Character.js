import { useState } from "react";
import Button from "./Button";

const Character = ({player, setPlayer}) => {
    const [message, setMessage] = useState("");

    const [updated, setUpdated] = useState(message)

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleClick = () => {
        // "message" stores input field value
        setUpdated(message);
        setPlayer({...player, name: message});
    }

    
    return (
        <>
            <h2>{player.name}</h2>
            <h3>Points: {player.points}</h3>
            <div style={{display: "flex"}}><Button onClick={() => setPlayer({...player, hp: player.hp - 1})} text="-" /><p>HP: {player.hp}</p><Button onClick={() => setPlayer({...player, hp: player.hp + 1})}  text="+" /></div>
            <div style={{display: "flex"}}><Button onClick={() => setPlayer({...player, mp: player.mp - 1})} text="-" /><p>MP: {player.mp}</p><Button onClick={() => setPlayer({...player, mp: player.mp + 1})} text="+" /></div>
            <div style={{display: "flex"}}><Button onClick={() => setPlayer({...player, atk: player.atk - 1})} text="-" /><p>ATK: {player.atk}</p><Button onClick={() => setPlayer({...player, atk: player.atk + 1})} text="+" /></div>
            <div style={{display: "flex"}}><Button onClick={() => setPlayer({...player, def: player.def - 1})} text="-" /><p>DEF: {player.def}</p><Button onClick={() => setPlayer({...player, def: player.def + 1})} text="+" /></div>

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