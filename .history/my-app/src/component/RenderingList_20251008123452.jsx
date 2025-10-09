export default function RenderingList() {
  const users = [
    { name: "Harsh", class:"MCA", batch:"ANP_D_1365" },
    { name: "Anil" },
    { name: "Riya" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li>{`Username: ${user.name}, Class: ${user.class} and Batch: ${user.batch}`}</li> 
      ))}
    </ul>
  );
}
