import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d0a4c406b3d42baa291302dfd717b86",
  },
});
