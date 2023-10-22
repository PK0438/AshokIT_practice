import React, { useState } from "react";

interface IUser {
  username: string;
  email: string;
  password: string;
  designation: string;
  gender: string;
  bio: string;
  terms: boolean;
}

const RegForm = () => {
  const [user, setUser] = useState<IUser>({
    username: "",
    email: "",
    password: "",
    designation: "",
    gender: "",
    bio: "",
    terms: false,
  });

  const updateUser = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    key: string
  ) => {
    setUser({
      ...user,
      [key]: e.target.value,
    });
  };

  const updateCheck = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUser({
      ...user,
      [key]: e.target.checked,
    });
  };

  const checkEmptyFields = () => {
    for (let value of Object.values(user)) {
      if (value === "") {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User =>", user);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(user)}</pre> */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <p className="h3 text-muted">Register here!</p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="mb-2">
                    <input
                      value={user.username}
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      onChange={(e) => updateUser(e, "username")}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={user.email}
                      type="email"
                      className="form-control"
                      placeholder="email"
                      onChange={(e) => updateUser(e, "email")}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      value={user.password}
                      type="password"
                      className="form-control"
                      placeholder="password"
                      onChange={(e) => updateUser(e, "password")}
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      value={user.designation}
                      name=""
                      className="form-select"
                      onChange={(e) => updateUser(e, "designation")}
                    >
                      <option value="">Select Designation</option>
                      <option value="Software Intern">Software Intern</option>
                      <option value="Software Developer">
                        Software Developer
                      </option>
                      <option value="Sr. Software Developer">
                        Sr. Software Developer
                      </option>
                      <option value="Tech lead">Tech lead</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="" className="form-check-label">
                      Gender &nbsp;{" "}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      value={"Male"}
                      name="gender"
                      onChange={(e) => updateUser(e, "gender")}
                    />
                    <label htmlFor="" className="form-check-label">
                      Male &nbsp;
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      value={"Female"}
                      name="gender"
                      onChange={(e) => updateUser(e, "gender")}
                    />
                    <label htmlFor="" className="form-check-label">
                      Female
                    </label>
                  </div>
                  <div className="mb-2">
                    <textarea
                      value={user.bio}
                      className="form-control"
                      rows={5}
                      placeholder="Give us a brief intro about you..."
                      onChange={(e) => updateUser(e, "bio")}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      // value={user.terms.toString()} // Convert boolean to string
                      onChange={(e) => updateCheck(e, "terms")}
                    />
                    <label htmlFor="" className="form-check-label">
                      {" "}
                      &nbsp; Agree to our terms & conditions.
                    </label>
                  </div>
                  <div className="mb-2 mt-2">
                    <button
                      type="submit"
                      value={"register"}
                      className="btn btn-warning"
                      disabled={!user.terms || checkEmptyFields()}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegForm;
