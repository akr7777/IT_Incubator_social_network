import React from "react";
import Header from './Header';
import axios from "axios";
import { setAuthUserDataAC } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { actionPropsType } from "../../redux/state";

/* type dataPropsType = {
    id: number,
    email: string,
    login: string,
}
 type HeaderComponentPropsType = {
    isAuth: boolean,
    login: string,
    data: dataPropsType,
    setAuthUserData: (type: string, data: dataPropsType) => void,
}*/

class HeaderContainer extends React.Component</*HeaderComponentPropsType*/any> {

    componentDidMount() {
        /*this.props.toggleIsFetching(true);*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            /*this.props.toggleIsFetching(false);*/
            debugger;
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUserData( {id, email, login} );
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