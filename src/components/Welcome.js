import React from "react";

const Welcome = () => {
  return (
    <>
      <h3 className="text-primary-emphasis">OBS REACTJS TEST</h3>
      <div className="d-flex">
        <ul className="nav flex-column nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul>
        <div className=" flex-fill text-center">
          <h1 className="text-primary-emphasis m-5">
            Welcome {localStorage.getItem("userId")}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Welcome;
