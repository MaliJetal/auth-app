import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import PrivateRoute from "./pages/PrivateRoute";
// import UserDetails from "./page/UserDetails";

const GlobalStyle = createGlobalStyle`
  body{
   	padding: 0;
  	margin: 0;
    box-sizing: border-box;
    font-family: 'Kaushan Script';
  }
`;

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Router>
				<Routes>
					{/* <PrivateRoute>
						<Route exact path='/user-details' element={<UserDetails />} />
					</PrivateRoute> */}
					<Route exact path='/' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/signup' element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
