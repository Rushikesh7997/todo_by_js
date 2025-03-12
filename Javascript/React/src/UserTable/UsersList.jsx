import React from "react";

export const UsersList = ({ users }) => {

  // const userMap = users.map((item)=>{
  //     return (
  //         <tr>
  //             <td>{item.id}</td>
  //             <td>{item.name}</td>
  //             <td>{item.age}</td>
  //             <td>{item.email}</td>
  //         </tr>
  //     )
  // })
  return (
    <div className="box-right">
      <table className="userTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
