import { useEffect, useState } from "react";

const Board = () => {
    
    const [dimension, setDimension] = useState(0);
    const [chess, setChess] = useState([]);

    const black = {
        width: "100px",
        height: "100px",
        backgroundColor: "black"
    }
    const white = {
        width: "100px",
        height: "100px",
        backgroundColor: "white"
    }

    const chessBox = {
        width: 100 * dimension,
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        boxShadow: "0px 10px 10px rgba(0,0,0,0.1)"
    }

    const makeChessBoard = () => {
        let arr = [];

        for (let i=0; i<dimension; i++) {
            let temp = [];
            for (let j=0; j<dimension; j++) {
                if ((i+j) % 2)
                    temp.push(<div key={i+j} style={black}></div>)
                else
                    temp.push(<div key={i+j} style={white}></div>)
            }
            arr.push(temp)
        }

        setChess(arr);
    }

    const inputChange = (e) => {
        console.log(e.target.value);
        setDimension(e.target.value);
    }


    useEffect(() => {
        makeChessBoard();
    }, [dimension])

    return (
        <div className="chess">
            <div>
                <h2>
                    <span> N x N</span>
                    ChessBoard
                </h2>
                <input type="number" placeholder="Enter the Dimension" onChange={(e) => inputChange(e)} />
            </div>

            <section style={chessBox}>
                {chess}
            </section>
        </div>
    )
}

export default Board;