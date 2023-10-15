import React, { useState } from "react";
import TableData from "./TableData";

const MyCard: React.FC = () => {
  const [buttonText, setButtoonText] = useState<string>("Click me");
  const newDate = new Date().toLocaleTimeString();
  const handleClick = (e:any) => {
    e.preventDefault();
    setButtoonText("Clicked");
  };

  interface Address {
    street? : string;
    city : string;
    state : string;
    country : string;
  }

  interface Student {
    id : number;
    name : string;
    age : number;
    address : Address;
  }

  const studentDetails : Student[] = [
    {
      id : 1,
      name : "Pramod",
      age : 20 ,
      address : {
        city : "Isilin",
        state : "New Jersey",
        country : "USA",
      }
    },
    {
      id : 2,
      name : "Anil",
      age : 22 ,
      address : {
        city : "Alpharetta",
        state : "Georgia",
        country : "USA",
      }
    },
    {
      id : 3,
      name : "Muja",
      age : 21 ,
      address : {
        city : "Ras al khaima",
        state : "Dubai",
        country : "UAE",
      }
    },
    {
      id : 4,
      name : "Pothu",
      age : 21 ,
      address : {
        city : "Hyderabad",
        state : "Telangana",
        country : "India",
      }
    }
  ];



  const handleSubmit = () => {
    return (
      <div>
        <h1>{buttonText}</h1>
        <h2>{newDate}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          assumenda.
        </p>
        <button className="btn btn-success" type="submit">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </button>
        <div className="mt-3">
          <TableData 
          studentDetails = {studentDetails}
          heading = {"This is the Students data"}
          nOfRecords = {4}
          />
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="card card-body m-3 shadow-lg">{handleSubmit()}</div>
      <div className="card card-body m-3 shadow-lg">
        <h2>My card</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nulla
          laboriosam repellendus voluptates consectetur reprehenderit dolore
          quos assumenda asperiores magnam aperiam labore nesciunt eos dicta
          tenetur accusamus. Officiis, laborum? Odio, soluta! Dolore quidem
          nostrum accusantium excepturi est, maxime temporibus rem cum molestiae
          cumque fuga blanditiis earum quis? Nemo, saepe deleniti.
        </p>

        <button
          className="btn btn-success"
          onClick={handleClick}
          onSubmit={handleSubmit}
        >
          {buttonText}
        </button>
      </div>
      
    </>
  );
};


export default MyCard;