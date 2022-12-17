import logo from './logo.svg';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";

import {getStatus, getUserProfile, updateStatus} from "./redux/profile-reducer";
// import withRouter from "./components/common/withRouter"
//
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        // let location = useLocation();
        // let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{   params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class App extends React.Component{

    componentDidMount() {
        this.props.initializeApp();

    }

    render() {
if(!this.props.initialized) {
    return <Preloader/>
}
        return (
            <BrowserRouter>

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile" element={<ProfileContainer/>}>

                                <Route path=":userId" element={<ProfileContainer/>}/>

                            </Route>
                            <Route path="/" element={<ProfileContainer/>}/>
                            <Route path="/Dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/Users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initializedSuccess
})
// export default App;
export default compose(connect(mapStateToProps, { initializeApp}),withRouter ,
    // withAuthRedirect,
)(App)
// export default compose(withRouter, connect(mapStateToProps, initializeApp)(App))
