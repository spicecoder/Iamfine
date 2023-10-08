import UseFirebaseMessaging  from './UseFirebaseMessaging.js';

function OnlyToken() {
    const token = UseFirebaseMessaging();

    return (
        <div>
            Firebase FCM Token: {token}
        </div>
    );
}
export default OnlyToken;