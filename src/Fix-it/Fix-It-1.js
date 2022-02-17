// REFACTOR THIS

const gif1 =
  "https://media.giphy.com/media/mCb7nMoWD4kALiHb6o/giphy.gif?cid=ecf05e47r4cevo1lgbhnerapatrqk7mplkkp6lldspt0f3al&rid=giphy.gif&ct=g";
const gif2 =
  "https://media.giphy.com/media/fzZzoftMBR8is/giphy.gif?cid=ecf05e47ar7vqiq9irmkda65mekwyrh4sct6ct814nn47yhw&rid=giphy.gif&ct=g";
const gif3 =
  "https://media.giphy.com/media/igFPpuVhit5j3cmJJI/giphy.gif?cid=ecf05e47iwntlb5cy3ro0gusozqlu4kfs5ucw9rg9ct51f2w&rid=giphy.gif&ct=g";

const FixIt1 = () => {
  return (
    <div>
      <Giffer gif={gif1} />
      <Giffer gif={gif2} />
      <Giffer gif={gif3} />
    </div>
  );
};

const Giffer = ({ gif }) => {
  return <img src={gif} />;
};


export default FixIt1;
