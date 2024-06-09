import React from "react";
import {sort} from "fast-sort"
import Link from "next/link";

type Users = {
  id: number;
  name: string;
  email: string;
};

type sortType = {
  sortOrder : string
}

const UserTable = async ({sortOrder} : sortType) => {
  let sortedUsers : Users[] = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // const res = await fetch("http://localhost:9999/users", {
      cache: "no-store",
    });
    const users: Users[] = await res.json();
    sortedUsers = sort(users).asc(sortOrder==='name'?user=>user.name:user=>user.email)
    console.log('sorted Users :', sortedUsers)
  } catch(error) {
    console.log('fetch error : ', error)
  }

  return (
    <>
      <table className="table table-xs table-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers ? sortedUsers.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )): null}
        </tbody>
      </table>
      
    </>
  );
};

export default UserTable;
