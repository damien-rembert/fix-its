const FixIt3 = () => {
  const allUsers = [
    { name: "luke", age: 22 },
    { name: "daisy", age: 29 },
    { name: "layla", age: 21 },
    { name: "ryan", age: 33 },
  ];

  return (
    <div>
      {allUsers.map((user) => {
        return <UserCards  />;
      })}
    </div>
  );
};

const UserCards = ({ user }, {age}) => {
  
    <div style={{ border: "dotted red 2px" }}>
      <p>name: {user}</p>
      <p>age: {age}</p>
    </div>

};
export default FixIt3;
