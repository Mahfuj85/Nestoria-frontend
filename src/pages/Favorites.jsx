import React, { useContext, useState } from "react";
import Searchbar from "../components/Searchbar";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import Item from "../components/Item";
import UserDetailContext from "../context/UserDetailContext";

const Favorites = () => {
  const [filter, setFilter] = useState("");
  const { data, isError, isLoading } = useProperties();
  //console.log(data);
  const {
    userDetails: { favorites = [] },
  } = useContext(UserDetailContext);

  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    );
  }
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
  return (
    <main className="my-24 bg-gradient-to-r from-costal via-[#ecf0f1] to-[#e1f5f5]">
      <div className="max-padd-container py-10">
        <div>
          <Searchbar filter={filter} setFilter={setFilter} />
          {/* CONTAINER  */}
          <div className="flex justify-center items-center">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10">
              {data
                .filter((property) => favorites.includes(property.id))
                .filter(
                  (property) =>
                    property.title
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    property.city
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    property.country
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((property) => (
                  <Item key={property.title} property={property} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Favorites;
