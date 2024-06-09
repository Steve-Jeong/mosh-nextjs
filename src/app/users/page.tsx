import Link from "next/link";
import React, { Suspense } from "react";
import UserTable from "./UserTable";

type PropType = {
  searchParams : {
    sortOrder : string
  }
}
const Users = ({searchParams:{sortOrder}}: PropType) => {
  if(!sortOrder) sortOrder = 'name'

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>
      <p>sortOrder : {sortOrder}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <Link href="/" className="btn btn-primary">
        Home
      </Link>
    </>
  );
};

export default Users;

