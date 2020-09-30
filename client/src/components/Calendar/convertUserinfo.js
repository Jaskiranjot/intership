
//import React, { Component } from 'react';
class User {
    constructor (firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
    toString() {
        return this.name + ', ' + this.state + ', ' + this.country;
    }
}

// Firestore data converter
var convertUserinfo = {
    fromFirestore: function(snapshot, options){
        const data = snapshot.data(options);
        return new User(data.name, data.email)
    }
}
export default User