import{ db }from "./firebase.js";

 const dbref =()=>{
   var userkey ='Megan-Xu1601683554030'
  
    return db.collection('users').doc(userkey)
}
export default dbref
