import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '000d0d9a-fef3-4b7a-b24e-af21295219e6'
    }
});

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
}

export const userAPI = {
    getUsers(currentPage: number, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    /*authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },*/

    follow (userID: number) {
        return instance.post(`follow/${userID}`).then(response => {
            return response.data;
        })
    },
    unfollow (userID: number) {
        return instance.delete(`follow/${userID}`).then(response => {
            return response.data;
        })
    },
    getProfile (userID: number) {
        return instance.get(`profile/${userID}`)
    }

}


