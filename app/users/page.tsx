import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}
const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    // {cache : 'no-store'}
    // cache: 'no-store' - to not store data on the cache
    // { next: { revalidate: 10 } }
  );
  const users: User[] = await res.json();

  return (
    <>
      <h2 className="text-slate-800 bg-gray-400 text-xl ">Users</h2>

      <br />
      <p>{new Date().toLocaleDateString()}</p>
      <p>{new Date().toLocaleTimeString()}</p>
      <p>{new Date().toLocaleString()}</p>
      <br />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
