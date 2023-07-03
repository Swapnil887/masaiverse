let main = document.getElementById("main");
let allData = [];
let token = sessionStorage.getItem("token");

async function getAllUser() {
  let res = await fetch(`https://json-server-mfga.onrender.com/users`);
  let data = await res.json();
  allData = data;
  rendor(data);
}

getAllUser();

function rendor(array) {
  main.innerHTML = null;
  array.forEach((elem) => {
    console.log(elem);
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let image = document.createElement("img");
    image.setAttribute("src", `https://fastly.picsum.photos/id/256/200/300.jpg?hmac=6-SQmUqIECHQ4QadM7mAYY3sHPH5r_8e2pCBs7V67Sc`);

    let name = document.createElement("p");
    name.textContent = `Name : ${elem.name}`;

    let age = document.createElement("p");
    age.textContent = `Age : ${elem.age}`;

    let place = document.createElement("p");
    place.textContent = `Place : ${elem.place}`;

    let batch_name = document.createElement("p");
    batch_name.textContent = `Batch : ${elem.batch_name}`;

    let profession = document.createElement("p");
    profession.textContent = `Profession : ${elem.profession}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteUser(elem.id);
    });

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    card.append(
      image,
      name,
      age,
      place,
      batch_name,
      profession,
      deleteBtn,
      editBtn
    );
    main.append(card);
  });
}

async function deleteUser(id) {
  let res = await fetch(`https://json-server-mfga.onrender.com/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  let data = await res.json();
  alert("Data Deleted");
  window.location.reload();
}

let sortByAge = document.getElementById("sortByAge");
sortByAge.addEventListener("change", () => {
  if (sortByAge.value == "") {
    rendor(allData);
  } else if (sortByAge.value == "asc") {
    let data = allData.sort((a, b) => {
      return +a.age - +b.age;
    });
    rendor(data);
  } else if (sortByAge.value == "desc") {
    let data = allData.sort((a, b) => {
      return +b.age - +a.age;
    });
    rendor(data);
  }
});

let filterByProfession = document.getElementById("filterByProfession");
filterByProfession.addEventListener("change", () => {
  if (filterByProfession.value == "") {
    rendor(allData);
  } else {
    let filterData = allData.filter((elem) => {
      if (filterByProfession.value == elem.profession) {
        return elem;
      }
    });

    rendor(filterData);
  }
});

let search = document.getElementById("searchButton");
search.addEventListener("click", () => {
  let searchThings = document
    .getElementById("search")
    .value.toLocaleLowerCase();
  if (searchThings == "") {
    rendor(allData);
  } else {
    let filterData = allData.filter((elem) => {
      if (searchThings == elem.name.toLocaleLowerCase()) {
        return elem;
      }
    });
    rendor(filterData);
  }
});