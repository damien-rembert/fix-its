import { useState } from "react";

const FixIt1 = () => {
  const [num, setNum] = useState(0);

  return <h1>{num}</h1>;
};
export default FixIt1;
