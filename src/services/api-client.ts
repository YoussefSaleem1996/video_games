import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a6fdd4de793e4780be320956654c1f51"
    }
})