const tbody = document.querySelector("tbody");
const totalGuest = document.getElementById("totalGuest");
const nos = document.getElementById("numberOfStudent");
const workingProf = document.getElementById("workingProfessional") 
const avgAge = document.getElementById("averageAge")

let allData = [];

let token = sessionStorage.getItem("token");

async function getAllUser() {
  let res = await fetch(`https://json-server-l9by.onrender.com/users`);
  let data = await res.json();
  allData.push(data);
  renderOnDom(data);
  details(data)
}

getAllUser();

function renderOnDom(array) {
  // mainBox.innerHTML = null;
  array.forEach((elem) => {
    // console.log(elem);
    let row = document.createElement("tr");

    //   let image = document.createElement("img");
    //   image.setAttribute(
    //     "src",
    //     `https://robohash.org/${elem.id}?set=set10&size=180x180`
    //   );

    let name = document.createElement("td");
    name.textContent = `${elem.name}`;

    let age = document.createElement("td");
    age.textContent = `${elem.age}`;

    let place = document.createElement("td");
    place.textContent = `${elem.place}`;

    let batch_name = document.createElement("td");
    batch_name.textContent = `${elem.batch_name}`;

    let profession = document.createElement("td");
    profession.textContent = `${elem.profession}`;

    row.append(
      // image,
      name,
      age,
      place,
      batch_name,
      profession
    );
    tbody.append(row);
  });
}


function details(data){
let guest = 0;
let wf = 0;
let std = 0;
let guestAge = 0;

for(let i = 0 ;i<data.length ; i++){
    if(data[i].profession == "student"){
        std++;
    }
    if(data[i].profession == "FSD" || data[i].profession == "frontend" || data[i].profession == "backend"){
        wf++;
    }

    if(data[i].profession == "guest"){
        guest++;
        guestAge += +data[i].age
    }
    // console.log(data[i])
}
let avg = Math.round(guestAge/guest)
avgAge.textContent = avg;
totalGuest.textContent = guest;
workingProf.textContent = wf;
nos.textContent = std
}
