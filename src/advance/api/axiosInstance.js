// HTTP #1 kita bisa melakukan HTTP request seperti Rest Client di Java dengan axios kalau js, node js
// alternative lain ada original API nya yaitu browser api, fetch api. Atau library seperti react-query, apollo client,
// RTK Query (Redux Toolkit Query yg terintegrasi dgn redux)
// instal dgn npm i axios
// dan import seperti dibawah
import axios from "axios";

// HTTP #2 kita bisa buat axios instance dengan cara axios.create
// tujuannya supaya tidak perlu menulis baseURL atau url secara full  terus menerus, dan axiosInstance bisa kita pakai dimana2
// disini bisa kita config seperti maximal timeoutnya
const axiosInstanceinstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: { "X-Custom-Header": "jsonPlaceholderTest" },
});

export default axiosInstanceinstance;
