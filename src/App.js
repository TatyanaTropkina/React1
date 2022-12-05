import logo from './logo.svg';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App(props) {
    return (
		<BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
					<Routes>
                        <Route path="/profile" element={<ProfileContainer />}>

                            <Route path=":userId" element={<ProfileContainer />} />

                        </Route>
						<Route path="/Dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/Users" element={<UsersContainer />}/>

                    </Routes>
                </div>
            </div>
		</BrowserRouter>

    );
}

export default App;
