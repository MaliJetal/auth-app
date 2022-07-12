import { useState, useEffect } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
	const [token] = useToken();

	const getPayloadfromToken = (payload) => {
		const encodedPayload = payload.split(".")[1];
		return JSON.parse(encodedPayload);
	};

	const [user, setUser] = useState(() => {
		if (!token) {
			return null;
		}
		return getPayloadfromToken(token);
	});

	useEffect(() => {
		if (!token) {
			setUser(null);
		}
		setUser(getPayloadfromToken(token));
	}, [token]);

	return user;
};
