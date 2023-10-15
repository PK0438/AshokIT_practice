import React, { useState } from "react";

const UserName: React.FC = () => {
  const [formData, setFormData] = useState<any>({
    userName: "",
    password: "",
  });

//   console.log("Form Data => ", ...formData);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

//   console.log("Form Data => 2", ...formData);

  const handleClearForm = (e:any): void => {
    e.preventDefault();
    setFormData({
      userName: "",
      password: "",
    });
  };

  return (
    <>
    <pre>{JSON.stringify({formData})}</pre>
      <div className="container m-3">
        <div className="row">
          <div className="col-sm-6">
            <div className="card bg-light">
              <div className="card-body">
                <form>
                  <div className="mb-2">
                    <input
                      placeholder="User name"
                      id="userName"
                      name="userName"
                      type="text"
                      value={formData.userName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      placeholder="Password"
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button className="btn btn-success" onClick={handleClearForm}>
                    Clear
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserName;
