import React, { useEffect, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router";

export const Cards = ({ name, detailUrl }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    const isLike = localStorage.getItem(name);
    setLike(isLike === "true");
  }, [name]);

  const handleLike = () => {
    const newLike = !like;
    setLike(newLike);
    localStorage.setItem(name, newLike);
  };

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-around md:justify-between rounded-lg shadow-lg">
      <button
        className="bg-amber-500 font-bold w-full"
        onClick={() => navigate(`/pokemon/${name}`)}
      >
        {name}
      </button>
      {like ? (
        <AiFillLike onClick={handleLike} />
      ) : (
        <AiOutlineLike onClick={handleLike} />
      )}
    </div>
  );
};
