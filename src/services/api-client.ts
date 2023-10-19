import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"57acd7b097c6432abdff9ae5a602f673"
    }
})