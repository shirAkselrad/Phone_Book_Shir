"use strict"
let contactsArr =
  [{
    image: "./images/man1.jpg",
    name: "Moshe Perez",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png"
  },
  {
    image: "./images/women1.jpg",
    name: "Roni Dalomi",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png"
  },
  {
    image: "./images/man2.jpg",
    name: "Aviv Gefen",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png"
  },
  {
    image: "./images/women2.jpg",
    name: "Zehava Ben",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png"
  }];



let ul = document.getElementById("contactsList");


contactsArr.forEach((person, index) => {
  let li = document.createElement("li");
  li.className = "Contact";

  let divLeft = document.createElement("div");
  let personImg = document.createElement("img");
  let spanName = document.createElement("span");

  personImg.src = person.image;
  spanName.textContent = person.name;

  divLeft.className = "leftGroup";
  personImg.className = "personsImg";
  spanName.className = "names";
  divLeft.append(personImg);
  divLeft.append(spanName);

  let divRight = document.createElement("div");
  let infoBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let trashBtn = document.createElement("button");

  let infoImgBtn = document.createElement("img");
  let editImgBtn = document.createElement("img");
  let trashImgBtn = document.createElement("img");

  infoImgBtn.src = person.infoImg;
  editImgBtn.src = person.editImg;
  trashImgBtn.src = person.trashImg;

  infoImgBtn.className = "ImgBtn";
  editImgBtn.className = "ImgBtn";
  trashImgBtn.className = "ImgBtn";


  divRight.className = "rightGroup";
  infoBtn.className = "btn";
  editBtn.className = "btn";
  trashBtn.className = "btn";

  infoBtn.type = "button";
  editBtn.type = "button";
  trashBtn.type = "button";


  infoBtn.appendChild(infoImgBtn);
  editBtn.appendChild(editImgBtn);
  trashBtn.appendChild(trashImgBtn);

  divRight.append(infoBtn);
  divRight.append(editBtn);
  divRight.append(trashBtn);

  li.append(divLeft);
  li.append(divRight);


  ul.append(li);
});

