import React from 'react';
import db from "./firebase.js";

export default function formatdate(){
    db.collection('megantestfolder')
    .get().then((Snapshot) => {
      Snapshot.forEach((doc) => {
       var datavalue =doc.data();   
       var takendatetime =datavalue.Datetime
       var month = takendatetime.slice(4,7)
       var convertmonth = {"Jan":"1","Feb":"2","Mar":"3","Apl":"4","May":"5","Jun":"6","Jul": "7","Aug":"8" ,"Sep": "9","Oct":"10","Nov":"11","Des":"12"}
       //Fri, October 2, 8:07am – 8:07am, Sun Sep 27 2020 13:51:36 GMT-0600 (Mountain Daylight Time)
       //2020-10-02T01:07:58-13:00
        var takenmonth = convertmonth[month]
        console.log(month)
       console.log(takenmonth)
       return takendatetime.slice(11,15)+'-'+takenmonth+'-'+takendatetime.slice(8,10)+'T'+takendatetime.slice(16,24)+'-6:00'  
})
})
}