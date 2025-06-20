"use strict"
let contactsArr =
  [{
    image: "./images/man1.jpg",
    name: "Moshe Perez",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "33",
    phoneNum: "123456789",
    Address: "Nesher"
  },
  {
    image: "./images/women1.jpg",
    name: "Roni Dalomi",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "40",
    phoneNum: "345678123",
    Address: "Haifa"
  },
  {
    image: "./images/man2.jpg",
    name: "Aviv Gefen",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "25",
    phoneNum: "432687219",
    Address: "Tel-Aviv"
  },
  {
    image: "./images/women2.jpg",
    name: "Zehava Ben",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "38",
    phoneNum: "873198430",
    Address: "Bat-Yam"
  }];



let ul = document.getElementById("contactsList");
let InfoModal = document.getElementById("InfoModal");

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

  infoBtn.setAttribute("data-id", index);


  infoBtn.setAttribute("data-type", "info");
  editBtn.setAttribute("data-type", "edit");
  trashBtn.setAttribute("data-type", "trash");


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


const fillInfoPopUp = (index) => {
  console.log(contactsArr[index]);
  document.getElementById("namePop").textContent = contactsArr[index].name;

  document.getElementById("agePop").textContent = contactsArr[index].age;

  document.getElementById("TelPop").textContent = contactsArr[index].phoneNum;

  document.getElementById("AddressPop").textContent = contactsArr[index].Address;

}


ul.addEventListener("click", function (e) {
  let infoBtn = e.target.closest("button");
  if (infoBtn && ul.contains(infoBtn) && infoBtn.getAttribute("data-type") === "info") {
    InfoModal.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(infoBtn);
    fillInfoPopUp(infoBtn.getAttribute("data-id"));
  }
});



document.getElementById("closeModal").addEventListener("click", function () {
  InfoModal.style.display = "none";
  document.body.style.overflow = "auto";
});