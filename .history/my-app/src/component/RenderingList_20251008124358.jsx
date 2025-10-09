export default function RenderingList() {
  const users = [
    { id:1, name: "Harsh", class:"MCA", batch:"ANP_D_1365" },
    { id:2, name: "Anil" },
    { id:3, name: "Riya" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`Username: ${user.name}, Class: ${user.class} 
        and Batch: ${user.batch}`}</li> 
      ))}
    </ul>
  );
}
