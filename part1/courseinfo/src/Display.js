const Display = ({ counter, allClicks }) => {


    return (
        <>         
            <h1>Display</h1>
            <p>Counter: {counter}</p>
            <p>{allClicks.join(" ")}</p>
        </>
    )

}

export default Display;