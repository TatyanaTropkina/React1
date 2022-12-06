import axios from "axios";

 const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY":"4356f2de-2f73-4b08-b680-2d10647fbac8"
    }

})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },

}

// export const getUserProfile = (userId) => {
//      return instance.get(`profile/${userId}`)

         // .then(response => response.data)
// }


