import React from 'react';

let appID = <T extends object>(obj : T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id};
}

const userDetails = appID({
    name: "Rubel",
    age: 35,
    Location: "Bangladesh"
});



console.log(userDetails);

 export default function gen() {
     return <>
     <h1> Welcome to Generic page</h1>
     <div id="genshow"></div>
     
     
     </>
 }