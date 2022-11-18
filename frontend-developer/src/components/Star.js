import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="27px" />
          ) : (
            <AiOutlineStar fontSize="27px" />
          )}
        </span>
      ))}
    </>
  );
};

export default Star;