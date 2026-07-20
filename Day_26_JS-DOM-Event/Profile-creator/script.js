let form = document.querySelector("form");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let users = document.querySelector(".users");
let userUrl = document.querySelector("#url");

let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    imageURL:
      "https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot",
    dob: "1998-05-14",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzPJpfpDLrmdksXc8DgohJ7kfg__yOMraxQ&s",
    dob: "2000-11-22",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    email: "rohan.gupta@example.com",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSJTX8fntT8CoqF1o9Ow_s0am3kXE8UlyovgZh--VKA&s",
    dob: "1997-08-09",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3JSbjqiZNDUfGsPkHleN1w3o_sTCZezQ2wYHxyV85w&s=10",
    dob: "2001-03-30",
  },
  {
    id: 5,
    name: "Kabir Singh",
    email: "kabir.singh@example.com",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFr2u80AyCClvdd6Z_1mFs5YHDWbqEIphFT03pDmM4Kw&s=10",
    dob: "1999-12-17",
  },
];
let ui = () => {
  users.innerHTML = "";
  usersData.forEach((elem, index) => {
    users.innerHTML += `<div class="user_card">
        <div class="img_box">
        <img
          src=${elem.imageURL}
          alt="image"
        />
        </div>
        <div class="text">
            <h4>Name - ${elem.name}</h4>
            <p>Email - ${elem.email}</p>
            <p>DOB - ${elem.dob}</p>
            <div class="edit_delete">
            <button class="edit">Edit</button>
            <button class="delete" onclick="deleteCard(${index})" >Delete</button>
        </div>  

        </div>
      </div>`;
  });
};
ui();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = userName.value;
  let email = userEmail.value;
  let imageURL = userUrl.value;
  usersData.push({
    name,
    email,
    imageURL,
  });
  ui();
  form.reset();
});

let deleteCard = (index) => {
  usersData.splice(index, 1);
  ui();
};
