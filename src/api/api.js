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
    auth() {
        return instance.get("auth/me")
    },

    getProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI")

        return (
            profileAPI.getProfile(userId)
        )
    }

}
export const profileAPI = {
    getProfile(userId) {

        return (
            instance.get(`profile/${userId}`)
        )
    },
    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)
        )
    },
    updateStatus(status) {
        return instance.put("profile/status/", {status: status})
    },
    getId(userId) {
        return (
            instance.get(`profile/${userId}`)
        )
    }

}
export const authAPI = {
    me() {
        return instance.get("auth/me")
    },
    login(email, password, rememberMe = true) {
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("auth/login")
    }

}

// export const getUserProfile = (userId) => {
//      return instance.get(`profile/${userId}`)

         // .then(response => response.data)
// }


