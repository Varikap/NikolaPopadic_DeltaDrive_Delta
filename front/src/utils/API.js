import axios from "axios";

export default {
  register(data) {
    return axios.post("/auth/signup", data);
  },
  login(data) {
    return axios.post("/auth/login", data);
  },
  loadUser(headers) {
    return axios.get("/auth/user", headers);
  },
  findRide(headers, data) {
    return axios.post("/vehicles/closest", data, { headers });
  },
  orderRide(headers, data) {
    return axios.post("/ride/order-ride", data, { headers });
  },
  completeRide(headers, id) {
    return axios.post(`/ride/complete-ride/${id}`, {}, { headers });
  },
  rateRide(headers, data) {
    return axios.post("/rating/rate", data, { headers });
  },
  getRates(headers) {
    return axios.get("/rating/get-ratings", { headers });
  },
  getCompletedRides(headers) {
    return axios.get("/ride/get-completed-rides", { headers });
  },
};
