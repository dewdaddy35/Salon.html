//objects lieral creating and object
//let student1={
//    name:"Eric",
//    age:28,
//    country:"usa"
//    address:{
//           street:"palm",
//           number:"22"
//           zip:"92027"
//          }
//music["Rolling Stones", "Beatles", "Queen"]
//}
//let student2={
//    name:"Jack",
//    age:"29",
//    country:"USA"
//}
//console.log(student1.name);
//console.log(student1.address.zip);
//console.log(student1.music[1]); display beatles

let salon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm",
        zip:"92027"
        },
    hours:{
    open:"9:00 am",
    close:"8:00 pm"
    }
}
// create the function
function displayInfo(){
document.getElementById("salon").innerHTML=`Welcome to ${salon.name}.....close at ${salon.hours.close}`;
}
//call/run/execute the function

displayInfo();
let pet1= {
        name:"Scooby",
        age:"12",
        gender:"Male",
        service: "Shampoo and Cut",
        breed: "German Sheperd" 
}
    
let pet2 =  {
    name:"Scappy",
    age:"8",
    gender:"Female",
    service:"Nail Clipping",
    breed:"French Bull Dog",
    }
let pet3 = { 
    name:"Happy",
    age:"17",
    gender:"Male",
    service: "Shampoo, Nail Clipper and Cut",
    breed: "Pit Bull"
}
const pets= [pet1,pet2,pet3];




function displayPetInfo(pet){
document.getElementById("pet1").innerHTML+=`<p>${pet.name}</p>`;
}

displayPetInfo(pet1);
displayPetInfo(pet2);
displayPetInfo(pet3);





