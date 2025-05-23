import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://nestoria-backend.vercel.app/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/all-residencies", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data.reverse();
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    await api.post(
      "/user/register",
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log(token);
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/remove-bookings/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong. Please try again later");
    throw error;
  }
};

export const toFavorite = async (id, email, token) => {
  try {
    await api.post(
      `/user/to-favorite/${id}`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong. Please try again later");
    throw error;
  }
};

export const getAllFavorites = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/all-favorites`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log("res", res);
    return res.data["favResidenciesID"];
  } catch (error) {
    toast.error("Something went wrong while fetching your favorite list");
    throw error;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/all-bookings`,
      { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log("res", res);
    return res.data["bookVisits"];
  } catch (error) {
    toast.error("Something went wrong while fetching your booking list");
    throw error;
  }
};

export const createResidency = async (data, token, userEmail) => {
  const requestData = { ...data, userEmail };
  console.log(requestData);

  try {
    const res = await api.post("/residency/create", requestData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    toast.error("Something went wrong while creating residency");
    throw error;
  }
};
