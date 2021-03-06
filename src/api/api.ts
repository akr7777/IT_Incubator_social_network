import axios from 'axios';
import { ProfileSettingsValuesType } from '../components/Settings/Settings';
import { ProfileType } from '../redux/profile-reducer';

type LoginDataType = {
    email: string
    password: string,
    rememberMe?: boolean,
    captcha?: string,
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '000d0d9a-fef3-4b7a-b24e-af21295219e6'
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeForCaptcha {
    CaptchaNeeded = 10
}
type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string,
    }
    resultCode: ResultCodesEnum,
    messages: Array<string>,
}
type LoginResponseType = {
    data: {
        userId: number,
    }
    resultCode: ResultCodesEnum & ResultCodeForCaptcha,
    messages: Array<string>,
}
type LoginDeleteResponseType = {
    resultCode: ResultCodesEnum,
    messages: Array<string>,
    data: any,
}

export const authAPI = {
    authMe() {
        return instance.get<MeResponseType>(`auth/me`).then(response => {
            return response.data;
        });
    },
    login(data:LoginDataType) {
        return instance.post<LoginResponseType>(`auth/login`, {...data}).then(response => {
            return response.data;
        });
    },
    logout() {
        return instance.delete<LoginDeleteResponseType>(`auth/login`).then(response => {
            return response.data;
        });
    }
    /*getCapcha () {
        return instance.get(`security/get-captcha-url`).then(response => {
            return response.data;
        })
    }*/
}

export const userAPI = {
    getUsers(currentPage: number, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

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
    /*getProfile (userID: number) {
        console.warn('obsolite method. use profileAPI.getProfile')
        return profileAPI.getProfile(userID) //instance.get(`profile/${userID}`)
    }*/

}

export const profileAPI = {
    getProfile (userID: number) {
        return instance.get(`profile/${userID}`)
    },

    getStatus (userID: number) {
        return instance.get(`profile/status/${userID}`).then(response => {
            return response.data;
        })
    },

    updateStatus (status: string) {
        return instance.put(`profile/status`, { status: status} );
    },

    saveMainPhoto (photoFile:any) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },

    saveProfile (values:ProfileSettingsValuesType) {
        return instance.put(`profile`, values);
    }
}

export const Security = {
    getCapcha () {
        debugger
        return instance.get(`security/get-captcha-url`).then(response => {
            return response.data;
        })
    }
}

