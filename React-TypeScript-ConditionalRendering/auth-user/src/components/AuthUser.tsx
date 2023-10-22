import React, { useState } from "react";

const AuthUser: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    return setIsLoggedIn(true);
  };

  const logout = () => {
    return setIsLoggedIn(false);
  };

  const displayEnter = (name: string) => {
    return (
      <>
        <div className="col-sm-6">
          <div className="card bg-light">
            <div className="card-body">
              <h1 className="text-success">Hello {name}! Great to see you back. </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                assumenda incidunt, quae quaerat minus quia tenetur repudiandae
                enim eos quas!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const displayExit = () => {
    return (
      <>
        <div className="col-sm-6">
          <div className="card bg-light">
            <div className="card-body">
              <h1 className="text-danger">Bye for now. Will meet again!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                assumenda incidunt, quae quaerat minus quia tenetur repudiandae
                enim eos quas!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container mt-3">
        <div className="col-sm-3">
          {isLoggedIn ? (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-success" onClick={login}>
              Login
            </button>
          )}
        </div>
        <div className="row mt-3">
          {isLoggedIn ? displayEnter("Pramod") : displayExit()}
        </div>
      </div>
    </>
  );
};

export default AuthUser;
