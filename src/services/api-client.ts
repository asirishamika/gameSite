import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"990cb7613a80401ea1d9d548b687303a"
    }
})