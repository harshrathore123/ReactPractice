export default function RenderingList() {
  const users = [
    { id: 1, name: "Harsh" },
    { id: 2, name: "Anil" },
    { id: 3, name: "Riya" },
  ];

  return (
    <ul>
      {users.map((user,index) => (
        <li key={index}>{user.name}</li> 
      ))}
    </ul>
  );
}
