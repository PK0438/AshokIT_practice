import React, { useState } from "react";

const Counter:React.FC<any> = () => {

    let [count, setCount] = useState<number>(0);

    const incrCount = () => {
      setCount(count + 1)
    }

    const decrCount = () => {
      setCount(count - 1)
    }

    const incrCountBy = (val : number) => {
      setCount(count + val)
    }

    const decrCountBy = (val : number) => {
      setCount(count - val)
    }
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h1>Counter</h1>
                <p>This is the counter component</p>
                <p className="display-3">{count}</p>
                <button className="btn btn-warning me-2" onClick={incrCount}>Increment</button>
                <button className="btn btn-success" onClick={decrCount}>Decrement</button>
                <hr />
                <p>Function with a parameter</p>
                <button className="btn btn-warning me-2" onClick={() => {incrCountBy(5)}}>Increment by</button>
                <button className="btn btn-success" onClick={() => {decrCountBy(5)}}>Decrement by </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
