import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import useAuthCheck from "../hooks/useAuthCheck";
import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { checkFavorites, updateFavorites } from "../utils/common";
import { toFavorite } from "../utils/api";
import { useAuth0 } from "@auth0/auth0-react";

const HeartBtn = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, favorites },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationFn: () => toFavorite(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favorites: updateFavorites(id, prev.favorites),
      }));
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "#ffa801" ? "white" : "#ffa801"));
    }
  };

  useEffect(() => {
    setHeartColor(() => checkFavorites(id, favorites));
  }, [favorites]);

  return (
    <div className="bg-[#0fbcf9] w-10 h-10 rounded-full flexCenter">
      <FaHeart
        onClick={(e) => {
          e.stopPropagation();
          handleLike();
        }}
        color={heartColor}
        size={23}
        className="cursor-pointer drop-shadow-sm"
      />
    </div>
  );
};

export default HeartBtn;

//7:34
