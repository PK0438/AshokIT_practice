import React, { useState } from "react";

const Counter2: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const incr = ():void => {
        setCount(count+1);
    };

    const decr = ():void => {
        setCount(count-1 > 0 ? count-1 : 0);
    };

    const incrBy = (value:number):void => {
        setCount(count+value)
    };

    const decrBy = (value:number):void => {
        setCount(count-value > 0 ? count-value : 0)
    };

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
                <button className="btn btn-warning me-2" onClick={incr}>Increment</button>
                <button className="btn btn-success" onClick={decr}>Decrement</button>
                <hr />
                <p>Function with a parameter</p>
                <button className="btn btn-warning me-2" onClick={() => incrBy(5)}>Increment by</button>
                <button className="btn btn-success" onClick={() => decrBy(5)}>Decrement by</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter2;
