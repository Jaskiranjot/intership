import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyAuigC_Z7OtT7hUCJPoax_-30B01vx2570",
    authDomain: "send-it-on.firebaseapp.com",
    databaseURL: "https://send-it-on.firebaseio.com",
    projectId: "send-it-on",
    storageBucket: "send-it-on.appspot.com",
    messagingSenderId: "306099219422",
    appId: "1:306099219422:web:57c5c8a6ac525991898b4f"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;
