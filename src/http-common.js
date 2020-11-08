import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
  // baseURL: "http://localhost:8081/",
  baseURL: "https://grades-api-igti-pp.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
