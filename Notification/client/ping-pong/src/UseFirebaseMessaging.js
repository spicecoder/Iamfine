import { useState, useEffect } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';

const UseFirebaseMessaging = function() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const messaging = getMessaging();
            const currentToken = await getToken(messaging);
            setToken(currentToken);
        };

        fetchToken();
    }, []);

    return token;
}
export default UseFirebaseMessaging