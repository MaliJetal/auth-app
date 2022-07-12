import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "./useUser";

const PrivateRoute = () => {
	const [user] = useUser();
	if (!user) {
		<Navigate to='/login' />;
	}
	<Navigate to='/user-details' />;
};

export default PrivateRoute;
