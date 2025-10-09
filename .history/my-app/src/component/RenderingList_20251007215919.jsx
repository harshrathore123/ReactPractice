export default function RenderingList() {
  const users = [
    { id: 1, name: "Harsh" },
    { id: 2, name: "Anil" },
    { id: 3, name: "Riya" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id===1}>{user.name}</li> 
      ))}
    </ul>
  );
}
