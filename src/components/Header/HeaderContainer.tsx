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
export type HeaderComponentPropsType = MapStateToPropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    /*componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }*/

    render() {
        return <Header {...this.props} />
    }
}
let mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

type MapStateToPropsType = {
    isAuth: boolean,
    login: string,
}
type MapDispatchToPropsType = {
    getAuthUserDataThunkCreator: () => void,
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserDataThunkCreator})(HeaderContainer);