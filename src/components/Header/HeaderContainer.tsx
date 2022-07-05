import React from "react";
import Header from './Header';
import axios from "axios";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { actionPropsType } from "../../redux/state";

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

class HeaderContainer extends React.Component<HeaderComponentPropsType> {

    componentDidMount() {
        /*this.props.toggleIsFetching(true);*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            /*this.props.toggleIsFetching(false);*/
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
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