import React from "react";
import Student from "./MyCard";

interface Student {
  id: number;
  name: string;
  age: number;
  address: Address;
}

interface Address {
  street?: string;
  city: string;
  state: string;
  country: string;
}

interface TableDataProps {
  studentDetails: Student[];
  heading : string;
  nOfRecords : number;
}

const TableData: React.FC<TableDataProps> = (props) => {
  console.log("props =>", props);
  return (
    <>
      <h3>{props.heading}</h3>
      <p>This table contains {props.nOfRecords} records</p>
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {props.studentDetails.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address.city}</td>
              <td>{student.address.state}</td>
              <td>{student.address.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
