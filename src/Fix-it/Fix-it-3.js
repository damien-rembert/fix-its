//@ts-check
// two buttons, one to add 1 to num, another to minus 1 from num

import { useState } from "react";

const FixIt3 = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <Buttons num={num} setNum={setNum}/>
    </div>
  );
};

const Buttons = (props) => {
  return (
    <div>
      <button onClick={() => props.setNum(props.num + 1)}>add one</button>
      <button onClick={() => props.setNum(props.num - 1)}>minus one</button>
    </div>
  );
};
export default FixIt3;
