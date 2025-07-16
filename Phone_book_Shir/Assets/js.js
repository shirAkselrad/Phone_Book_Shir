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
    address: "Nesher",
    email: "MoshePerze@gmail.com"
  },
  {
    image: "./images/women1.jpg",
    name: "Roni Dalomi",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "40",
    phoneNum: "345678123",
    address: "Haifa",
    email: "RoniDalomi@gmail.com"

  },
  {
    image: "./images/man2.jpg",
    name: "Aviv Gefen",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "25",
    phoneNum: "432687219",
    address: "Tel-Aviv",
    email: "AvivGefen@gmail.com"
  },
  {
    image: "./images/women2.jpg",
    name: "Zehava Ben",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    age: "38",
    phoneNum: "873198430",
    address: "Bat-Yam",
    email: "ZehavaBen@gmail.com"
  }];



let ul = document.getElementById("contactsList");
let InfoModal = document.getElementById("InfoModal");
let editPopUp = document.getElementById("editPopUp");

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
  editBtn.setAttribute("data-id", index);


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
  //fill in all the information in the info popup
  console.log(contactsArr[index]);
  document.getElementById("namePop").textContent = contactsArr[index].name;

  document.getElementById("agePop").textContent = contactsArr[index].age;

  document.getElementById("TelPop").textContent = contactsArr[index].phoneNum;

  document.getElementById("AddressPop").textContent = contactsArr[index].address;

  document.getElementById("EmailPop").textContent = contactsArr[index].email;

}


const fillEditPopUp = (index) => {
  //this function fill in all the inputs in the edit popup 
  console.log(contactsArr[index]);
  document.getElementById("nameEdit").value = contactsArr[index].name;

  document.getElementById("phoneNumEdit").value = contactsArr[index].phoneNum;

  document.getElementById("addressEdit").value = contactsArr[index].address;

  document.getElementById("ageEdit").value = contactsArr[index].age;

  document.getElementById("ProfileImageEdit").value = contactsArr[index].image;
}











ul.addEventListener("click", function (e) {
  let ClickedBtn = e.target.closest("button");
  let pContacts = document.getElementById("noContacts");

  //info for each contact 
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "info") {

    InfoModal.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(ClickedBtn);
    fillInfoPopUp(ClickedBtn.getAttribute("data-id"));
  }


  //edit button for each contact
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "edit") {

    editPopUp.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(ClickedBtn);
    //this function is placing all the details in the inputs as default
    fillEditPopUp(ClickedBtn.getAttribute("data-id"));

  }



  let li = e.target.closest("li");
  //trash button for each contact 
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "trash") {
    li.remove();
    let allContacts = ul.querySelectorAll("li.Contact");
    if (allContacts.length == 1)
      pContacts.style.display = "block";
  }


  //the main trash btn which deletes all the contacts, also, leave a msg
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "trashMainBtn") {
    let allContacts = ul.querySelectorAll("li.Contact");
    for (let i = 1; i < allContacts.length; i++)
      allContacts[i].remove();
    pContacts.style.display = "block";
  }

});



//getting the list of all the closing popup buttons we have 
document.querySelectorAll(".closeModal").forEach(btn => {
  //getting the location of each popup and closing it, if it is already closed it will close it anyway
  btn.addEventListener("click", function () {

    document.getElementById("editPopUp").style.display = "none";
    document.getElementById("InfoModal").style.display = "none";
    document.body.style.overflow = "auto";
  });
});



//this function is for the cancel button in the edit popup 
const closePopupEdit = () => {
  editPopUp.style.display = 'none';
  document.body.style.overflow = 'auto';
};

document.getElementById('closePopupBtn').addEventListener('click', closePopupEdit);





