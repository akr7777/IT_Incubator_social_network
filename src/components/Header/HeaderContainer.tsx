import React from "react";
import Header from './Header';
import axios from "axios";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { actionPropsType } from "../../redux/state";
import {userAPI} from './../../api/api';

 type dataPropsType = {
    id: number,
    email: string,
    login: string,
}
 type HeaderComponentPropsType = {
        isAuth: boolean,
        login: string,
        /*data: dataPropsType,*/
        setAuthUserDataAC: (id: number, email:string, login:string) => void,
}

/*
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '000d0d9a-fef3-4b7a-b24e-af21295219e6'
    }
})*/

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        userAPI.authMe().then(data => {
            /*this.props.toggleIsFetching(false);*/
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserDataAC(id, login, email);
            }

            //this.props.setCurrentPage(23);
        });
    }

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);