import React, { useRef } from 'react';
import db from "./firebase.js";

export default function getuserinfo(){
    db.collection('users')
    .get().then((Snapshot) => {
      Snapshot.forEach((doc) => {
       var user =doc.data();   
       var userEmail =user.email;
       var userName =user.firstname +' '+ lastname;
})
})
}