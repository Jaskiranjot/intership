// import React, { Component } from 'react'
import  { auth }  from './firebase';


export function signupAuth(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
  }

