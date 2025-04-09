import React from "react";
import "../css/item.style.css";
import { IoIosHeart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { TiEye } from "react-icons/ti";
import { CgRuler } from "react-icons/cg";
import {
  MdOutlineBed,
  MdOutlineBathtub,
  MdOutlineGarage,
} from "react-icons/md";
import HeartBtn from "./HeartBtn";

const Item = ({ property }) => {
  const facilities = JSON.parse(property.facilities);
  //console.log(facilities.bedrooms);
  const navigate = useNavigate();

  return (
    <section className="">
      <div className="card">
        {/* IMAGE  */}
        <div className="basicInfo">
          <div className="images">
            <div className="img">
              <div className="item">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[13rem] w-full aspect-square object-cover"
                />
                <div className="absolute top-4 right-4">
                  <HeartBtn id={property.id} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="wish">
              <TiEye
                onClick={() => navigate(`../listing/${property.id}`)}
                className="icon"
              />
              {/* <IoIosHeart className="icon" /> */}
            </div>
          </div>
        </div>
        {/* INFORMATION  */}
        <div className="info">
          <div className="flexBetween">
            <h5 className="bold-16 my-1 text-green-500">{property.city}</h5>
            <h4 className="h4">$ {property.price}</h4>
          </div>
          <h4 className="line-clamp-1">{property.title}</h4>
          <div className="flex gap-x-2 pb-2">
            <div className="flexCenter gap-x-2 border-r border-slate-300/70 pr-4 font-[500]">
              <MdOutlineBed /> {facilities.bedrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-300/70 pr-4 font-[500]">
              <MdOutlineBathtub /> {facilities.bathrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-300/70 pr-4 font-[500]">
              <MdOutlineGarage /> {facilities.parkings}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-300/70 pr-4 font-[500]">
              <CgRuler /> 400
            </div>
          </div>
          <p className="pt-1 mb-0 line-clamp-2 text-white">
            {property.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Item;
