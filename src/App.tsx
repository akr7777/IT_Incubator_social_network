import React from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersAPIContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import { LoginContainer } from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
    Routes, Route, NavigateFunction, Params, Location
} from "react-router-dom";
import {inicializeApp} from './redux/app-reducer';
import { AppStateType } from './redux/redux-store';
import Preloader from './components/common/Preloader';
import { compose } from 'redux';



type AppPropsType = {
    inicialized: boolean,
    //myUserID: number,

    inicializeApp: () => void,
    router: any // { location: Location; navigate: NavigateFunction; params: Readonly<Params<string>>; },
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.inicializeApp();
    }
    render() {
        if (!this.props.inicialized) {
            return <Preloader />
        }
        return (
            <>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<UsersAPIContainer/>}/>

                        <Route path="profile" element={<ProfileContainer/>}/> {/*{<Navigate to={'/profile/'}/>} />*/}
                        <Route path="profile/:id" element={<ProfileContainer/>}/>
                        {/*<Route path="profile" element={<ProfileContainer />} >
                        <Route path=':id' element={<ProfileContainer />} />
                        </Route>*/}
                        <Route path="messages" element={<MessagesContainer/>}/>
                        <Route path="users" element={<UsersAPIContainer/>}/>
                        <Route path="login" element={<LoginContainer/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </>
        );
    }
}

function withRouter(Component: React.ComponentType) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

const mapStateToProps1 = (state: AppStateType) => {
    return {
        inicialized: state.app.inicialized,
        //myUserID: state.auth.id,
    };
}

type mapStateToPropsType = {
    inicialized: boolean,
    //myUserID: number,
}
type mapDispatchToPropsType = {
    inicializeApp: () => void,
}
export default compose<React.ComponentType>(
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps1, {inicializeApp})
)(App);
