import { useState } from "react";

function CounterButton(){

    const [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count + 1);
    }

    function decreaseCount(){
        setCount(count - 1);
    }

    return(
        <div>
            <h1>
                React Counter
            </h1>

            <p>Count:{count}</p>
            <button className="clickup" onClick={increaseCount}>Increase</button>
            <button className="clickdown" onClick={decreaseCount}>Decrease</button>
        </div>

    );
}

export default CounterButton;