import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../utils/api";
import { PuffLoader } from "react-spinners";
import { FaHeart, FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import Map from "../components/Map";
import useAuthCheck from "../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../components/BookingModal";
import UserDetailContext from "../context/UserDetailContext";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import HeartBtn from "../components/HeartBtn";

const Property = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { pathname } = useLocation();
  //console.log(pathname);
  const id = pathname.split("/").slice(-1)[0];
  //console.log(id);
  const { user } = useAuth0();
  const { data, isError, isLoading } = useQuery(["residency", id], () =>
    getProperty(id)
  );
  //console.log(data);

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <span>Error while fetching property details</span>
      </div>
    );
  }
  const facilities = data.residency?.facilities
    ? JSON.parse(data.residency.facilities)
    : { bedrooms: 0, bathrooms: 0, parkings: 0 };
  //console.log(facilities);
  return (
    <section className="max-padd-container my-[99px]">
      {/* IMAGE  */}
      <div className="pb-2 relative">
        <img
          src={data.residency?.image}
          alt={data.residency?.title}
          className="rounded-tr-3xl max-h-[27rem] w-full object-cover aspect-square"
        />
        {/* LIKE BUTTON  */}
        <div className="absolute top-8 right-8">
          <HeartBtn id={id} />
        </div>
      </div>
      {/* CONTAINER  */}
      <div className="xl:flexBetween gap-8">
        {/* LEFT SIDE  */}
        <div className="flex-1">
          <p className="flexStart gap-x-2">
            <AiFillLike />
            <div>
              {data.residency?.address}
              {", "}
              {data.residency?.city}
              {", "}
              {data.residency?.country}
            </div>
          </p>
          <div className="flexBetween pt-3">
            <h4 className="bold-20 line-clamp-1">{data.residency?.title}</h4>
            <div className="bold-20">${data.residency?.price}.00</div>
          </div>
          <div className="flexBetween py-1">
            <h5 className="bold-16 my-1 text-primary">
              {data.residency?.city}
            </h5>
            <div className="flex items-baseline gap-2 text-primary">
              <h5 className="bold-18 relative bottom-0.5 text-black">5.0</h5>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <div className="flex gap-x-4">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBed /> {facilities.bedrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineBathtub />
              {facilities.bathrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <MdOutlineGarage />
              {facilities.parkings}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
              <CgRuler /> 400
            </div>
          </div>
          <h4 className="h4 pt-3">Property Details</h4>
          <p className="mb-4">{data.residency?.description}</p>
          <div className="flexBetween pt-2">
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  onClick={() => cancelBooking()}
                  variant="outline"
                  w={"100%"}
                  color="red"
                  disabled={cancelling}
                >
                  Cancel Booking
                </Button>
                <p className="text-red-500 medium-15 ml-3">
                  You've already Booked visit for{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </p>
              </>
            ) : (
              <button
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
                className="relative btn-dark w-1/2 !rounded-tl-none !rounded-bl-none !rounded-lg overflow-hidden px-6 py-3 text-white font-medium transition duration-300 before:absolute before:inset-0 before:bg-primary before:translate-x-[-100%] before:translate-y-[100%] before:transition-transform before:duration-300 before:ease-in-out hover:before:translate-x-0 hover:before:translate-y-0"
              >
                <span className="relative z-10">Book Visit</span>
              </button>
            )}
            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />
          </div>
        </div>
        {/* RIGHT SIDE  */}
        <div className="flex-1">
          <Map
            address={data?.residency?.address}
            city={data?.residency?.city}
            country={data?.residency?.country}
          />
        </div>
      </div>
    </section>
  );
};

export default Property;
