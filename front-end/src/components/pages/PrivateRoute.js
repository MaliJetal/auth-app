import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ user }) => {
	if (!user) {
		<Navigate to='/login' />;
	}
	<Navigate to='/user-details' />;
};

export default PrivateRoute;
