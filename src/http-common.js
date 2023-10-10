import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost/apiget/vuekut",
  baseURL: "http://localhost/vuekut/php",
  headers: {
    "Content-type": "application/json",
  }
});