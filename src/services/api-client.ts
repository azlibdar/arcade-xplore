import axios from "axios";

const API_KEY = "ae31248497f240c98ffe873ab6faf53e";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});
