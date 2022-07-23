import React, {Suspense} from 'react';
import './App.css';
import Profile from "./components/Profile/Profile";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";

//import MessagesContainer from "./components/Messages/MessagesContainer";
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));

//import UsersAPIContainer from "./components/Users/UsersContainer";
const UsersAPIContainer = React.lazy(() => import("./components/Users/UsersContainer"));

import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import {connect} from 'react-redux';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
    Routes, Route, NavigateFunction, Params, Location
} from "react-router-dom";
import {inicializeApp} from './redux/app-reducer';
import {AppStateType} from './redux/redux-store';
import Preloader from './components/common/Preloader';
import {compose} from 'redux';
import WithSuspense from './components/hoc/WithSuspense';
import SettingsContainer from './components/Settings/SettingsContainer';


type AppPropsType = {
    inicialized: boolean,
    //myUserID: number,

    inicializeApp: () => void,
    router: any // { location: Location; navigate: NavigateFunction; params: Readonly<Params<string>>; },
}

class App extends React.Component<AppPropsType> {
    catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert('Some error occured. promiseRejectionEvent='+promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.inicializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        //if (!this.props.inicialized) return <Preloader />
        return (
            <>
                {/* { !this.props.inicialized && <Preloader /> }*/}
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ProfileContainer/>}/>

                        <Route path="profile" element={<ProfileContainer/>}/> {/*{<Navigate to={'/profile/'}/>} />*/}
                        <Route path="profile/:id" element={<ProfileContainer/>}/>
                        {/*<Route path="profile" element={<ProfileContainer />} >
                        <Route path=':id' element={<ProfileContainer />} />
                        </Route>*/}
                        {/*<Route path="messages" element={<MessagesContainer/>}/>*/}
                        <Route path="messages" element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <MessagesContainer/>
                            </Suspense>
                        }/>
                        {/*<Route path="users" element={<UsersAPIContainer/>}/>*/}
                        <Route path="users" element={
                            WithSuspense(UsersAPIContainer)
                            /*<Suspense fallback={/!*<Preloader/>*!/<div>Loading...</div>}>
                                <UsersAPIContainer />
                            </Suspense>*/
                        }/>
                        <Route path="settings" element={
                            WithSuspense(SettingsContainer)
                        }/>
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
                router={{location, navigate, params}}
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
