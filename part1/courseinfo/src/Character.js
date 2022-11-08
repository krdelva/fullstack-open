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
        setPlayer({...player, name: message, points: player.points + 1});
    }

    const subtract = (comp ,att) => {
        if (comp > 1) {
            setPlayer(att)
        } else {
            console.log("Can't subtract")
        }
    }

    const add = (att) => {
        if (player.points > 0) {
            setPlayer(att);
        } else {
            console.log("No points!");
        }
    }

    
    return (
        <>
            <h2>{player.name}</h2>
            <h3>Points: {player.points}</h3>
            <div style={{display: "flex"}}>
                <Button onClick={() => subtract(player.hp, {...player, hp: player.hp - 1, points: player.points + 1})} text="-" />
                <p>HP: {player.hp}</p>
                <Button onClick={() => add({...player, hp: player.hp + 1, points: player.points - 1})}  text="+" />
            </div>
            <div style={{display: "flex"}}>
                <Button onClick={() => subtract(player.mp, {...player, mp: player.mp - 1, points: player.points + 1})} text="-" />
                <p>MP: {player.mp}</p>
                <Button onClick={() => add({...player, mp: player.mp + 1, points: player.points - 1})} text="+" />
            </div>
            <div style={{display: "flex"}}>
                <Button onClick={() => subtract(player.atk, {...player, atk: player.atk - 1, points: player.points + 1})} text="-" />
                <p>ATK: {player.atk}</p>
                <Button onClick={() => add({...player, atk: player.atk + 1, points: player.points - 1})} text="+" />
            </div>
            <div style={{display: "flex"}}>
                <Button onClick={() => subtract(player.def, {...player, def: player.def - 1, points: player.points + 1})} text="-" />
                <p>DEF: {player.def}</p>
                <Button onClick={() => add({...player, def: player.def + 1, points: player.points - 1})} text="+" />
            </div>

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