import React from "react";
import Header from './Header';
import axios from "axios";
import {getAuthUserDataThunkCreator/*, setAuthUserDataAC*/ } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { actionPropsType } from "../../redux/state";
import {authAPI, userAPI} from './../../api/api';
import { AppStateType } from "../../redux/redux-store";

type dataPropsType = {
    id: number,
    email: string,
    login: string,
}
type HeaderComponentPropsType = {
        isAuth: boolean,
        login: string,
        /*data: dataPropsType,*/
        //setAuthUserDataAC: (id: number, email:string, login:string) => void,
        getAuthUserDataThunkCreator: () => void,
}

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        /*authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserDataAC(id, login, email);
            }
        });*/
        this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {/*setAuthUserDataAC*/getAuthUserDataThunkCreator})(HeaderContainer);