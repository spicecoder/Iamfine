import { sweet,UseFirebaseMessaging } from './UseFirebaseMessaging.js';

function OnlyToken() {
    const token = UseFirebaseMessaging();

    return (
        <div>
            Firebase FCM Token: {token} ,{sweet}
        </div>
    );
}
export default OnlyToken;