"use strict"




document.body.style.backgroundImage = "url('../images/blue-brush-stroke-textured-background.jpg')";

//this function is changing the background
let ChangeBackGroundBtn = document.getElementById("ChangeBackGroundBtn");
ChangeBackGroundBtn.addEventListener("click", function (e) {
  if (document.body.style.backgroundImage.includes("../images/blue-brush-stroke-textured-background.jpg"))
    document.body.style.backgroundImage = "url('../images/flowers.jpg')";
  else
    document.body.style.backgroundImage = "url('../images/blue-brush-stroke-textured-background.jpg')";

});


//this function is for the section contacts 
let section = document.getElementById("sectionField");

section.addEventListener("input", function(e)
{
  e.preventDefault(); 
  let allContacts = ul.querySelectorAll("li.Contact");
  let sectionValue = section.value; 


  for (let i = 0; i < contactsArr.length; i++) 
    if (sectionValue.toLowerCase() === "all" || contactsArr[i].section.toLowerCase() === sectionValue.toLowerCase())
      allContacts[i + 1].style.display = "flex";
   else 
      allContacts[i + 1].style.display = "none";
   

});

let now = new Date(); 
let contactsArr =
  [{
    image: "./images/man1.jpg",
    name: "Moshe Perez",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    heartImg: "./icons/heart.png",
    isFav: false,
    age: "33",
    phoneNum: "050-456789",
    address: "Nesher",
    email: "MoshePerze@gmail.com",
    section: "Friends",
    update: now.toLocaleString()
  },
  {
    image: "./images/women1.jpg",
    name: "Roni Dalomi",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    heartImg: "./icons/heart.png",
    isFav: false,
    age: "40",
    phoneNum: "054-678123",
    address: "Haifa",
    email: "RoniDalomi@gmail.com",
    section: "Family",
    update: now.toLocaleString()

  },
  {
    image: "./images/man2.jpg",
    name: "Aviv Gefen",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    heartImg: "./icons/heart.png",
    isFav: false,
    age: "25",
    phoneNum: "052-687219",
    address: "Tel-Aviv",
    email: "AvivGefen@gmail.com",
    section: "Family",
    update: now.toLocaleString()
  },
  {
    image: "./images/women2.jpg",
    name: "Zehava Ben",
    infoImg: "./icons/info.png",
    editImg: "./icons/edit.png",
    trashImg: "./icons/trash.png",
    heartImg: "./icons/heart.png",
    isFav: false,
    age: "38",
    phoneNum: "057-198430",
    address: "Bat-Yam",
    email: "ZehavaBen@gmail.com",
    section: "Work",
    update: now.toLocaleString()
  }];



let ul = document.getElementById("contactsList");
let InfoModal = document.getElementById("InfoModal");
let editPopUp = document.getElementById("editPopUp");


let saveFlag = false; //false=editSaveBtn, true= addNewContact
let fixedArray = (contactsArr) => {

  //this function is changing the contacts array to an ABC name list 

  //sorting all the contacts name by ABC
  contactsArr.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  //now all all the favorite contacts are in the top list and all the others are after them 
  contactsArr.sort(function (a, b) {
    return b.isFav - a.isFav;
  });


  return contactsArr;


}


const fillList = function (dataArr) {

  contactsArr.forEach((person, index) => {



    let li = document.createElement("li");
    li.className = "Contact";

    let divLeft = document.createElement("div");
    let personImg = document.createElement("img");
    let spanName = document.createElement("span");
    let personPhoneNum = document.createElement("span");

    personImg.src = person.image;
    spanName.textContent = person.name;
    personPhoneNum.textContent = person.phoneNum;

    divLeft.className = "leftGroup";
    personImg.className = "personsImg";
    spanName.className = "names";
    personPhoneNum.className = "phoneNum"
    divLeft.append(personImg);
    divLeft.append(spanName);
    divLeft.append(personPhoneNum);

    let divRight = document.createElement("div");
    let infoBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let trashBtn = document.createElement("button");
    let heartBtn = document.createElement("button");

    let infoImgBtn = document.createElement("img");
    let editImgBtn = document.createElement("img");
    let trashImgBtn = document.createElement("img");
    let heartImgBtn = document.createElement("img");

    infoImgBtn.src = person.infoImg;
    editImgBtn.src = person.editImg;
    trashImgBtn.src = person.trashImg;
    heartImgBtn.src = person.heartImg;

    infoImgBtn.className = "ImgBtn";
    editImgBtn.className = "ImgBtn";
    trashImgBtn.className = "ImgBtn";
    heartImgBtn.className = "imgBtn";


    divRight.className = "rightGroup";
    infoBtn.className = "btn";
    editBtn.className = "btn";
    trashBtn.className = "btn";
    heartBtn.className = "btn";

    infoBtn.type = "button";
    editBtn.type = "button";
    trashBtn.type = "button";
    heartBtn.type = "button";

    infoBtn.setAttribute("data-id", index);
    editBtn.setAttribute("data-id", index);
    trashBtn.setAttribute("data-id", index);
    heartBtn.setAttribute("data-id", index);


    infoBtn.setAttribute("data-type", "info");
    editBtn.setAttribute("data-type", "edit");
    trashBtn.setAttribute("data-type", "trash");
    heartBtn.setAttribute("data-type", "heart");


    infoBtn.appendChild(infoImgBtn);
    editBtn.appendChild(editImgBtn);
    trashBtn.appendChild(trashImgBtn);
    heartBtn.appendChild(heartImgBtn);

    divRight.append(infoBtn);
    divRight.append(editBtn);
    divRight.append(trashBtn);
    divRight.append(heartBtn);

    li.append(divLeft);
    li.append(divRight);


    ul.append(li);


  });
}


contactsArr = fixedArray(contactsArr);
fillList(contactsArr);


const fillInfoPopUp = (index) => {
  //fill in all the information in the info popup
  console.log(contactsArr[index]);
  document.getElementById("namePop").textContent = contactsArr[index].name;

  document.getElementById("agePop").textContent = contactsArr[index].age;

  document.getElementById("TelPop").textContent = contactsArr[index].phoneNum;

  document.getElementById("AddressPop").textContent = contactsArr[index].address;

  document.getElementById("EmailPop").textContent = contactsArr[index].email;

  document.getElementById("sectionPop").textContent = contactsArr[index].section;

  document.getElementById("upDatePop").textContent = contactsArr[index].update; 

}


const fillEditPopUp = (index) => {
  //this function fill in all the inputs in the edit popup 
  console.log(contactsArr[index]);


  let now = new Date(); 
  document.getElementById("nameEdit").value = contactsArr[index].name;

  document.getElementById("phoneNumEdit").value = contactsArr[index].phoneNum;

  document.getElementById("addressEdit").value = contactsArr[index].address;

  document.getElementById("emailEdit").value = contactsArr[index].email;

  document.getElementById("ageEdit").value = contactsArr[index].age;

  document.getElementById("ProfileImageEdit").value = contactsArr[index].image;

  document.getElementById("sectionEdit").value = contactsArr[index].section; 

  contactsArr[index].update= now.toLocaleString(); 
}



const removeAllContacts = () => {
  //this function deletes all the contacts from the list 
  let allContacts = ul.querySelectorAll("li.Contact");
  for (let i = 1; i < allContacts.length; i++)
    allContacts[i].remove();
}






const editSaveBtnFunction = () => {

  //this function update the contactsArr ,save the details and rebuild the array 
  let index = document.getElementById("edit-save-btn").getAttribute("data-id");

  let result = confirm("Are you sure you want to save? ");
  if (result) {
    let name = document.getElementById("nameEdit").value.trim();

    let phoneNum = document.getElementById("phoneNumEdit").value.trim();

    let address = document.getElementById("addressEdit").value.trim();

    let email = document.getElementById("emailEdit").value.trim();

    let age = document.getElementById("ageEdit").value.trim();

    let profileImage = document.getElementById("ProfileImageEdit").value;

    let section = document.getElementById("sectionEdit").value.trim(); 


    //checking that this name doesn't exist in the list 
    for (let i = 0; i < contactsArr.length; i++)
      if (i != index && contactsArr[i].name == name) {
        alert("The name " + name + " is already exists in the list, choose another name");
        return;
      }

      let now = new Date(); 
    contactsArr[index].name = name;
    contactsArr[index].phoneNum = phoneNum;
    contactsArr[index].address = address;
    contactsArr[index].age = age;
    contactsArr[index].email = email;
    contactsArr[index].image = profileImage;
    contactsArr[index].section=section; 
    contactsArr[index].update=now.toLocaleString(); 

    removeAllContacts();
    contactsArr = fixedArray(contactsArr);
    fillList(contactsArr);
  }
}

const cleanForm = () => {
  //this function clear the fields in the edit popup after the user clicked save 
  document.getElementById("nameEdit").value = "";

  document.getElementById("phoneNumEdit").value = "";

  document.getElementById("addressEdit").value = "";

  document.getElementById("ageEdit").value = "";

  document.getElementById("ProfileImageEdit").value = "";

  document.getElementById("emailEdit").value = "";

  document.getElementById("sectionEdit").value=""; 
}

const addNewContactFunction = () => {


  let result = confirm("Are you sure you want to save? ");
  if (result) {
    let name = document.getElementById("nameEdit").value.trim();

    let phoneNum = document.getElementById("phoneNumEdit").value.trim();

    let address = document.getElementById("addressEdit").value.trim();

    let age = document.getElementById("ageEdit").value.trim();

    let profileImage = document.getElementById("ProfileImageEdit").value.trim();

    let email = document.getElementById("emailEdit").value.trim();

    let section = document.getElementById("sectionEdit").value.trim(); 


    //checking that this name doesn't exist in the list 
    for (let i = 0; i < contactsArr.length; i++)
      if (contactsArr[i].name == name) {
        alert("The name " + name + " is already exists in the list, choose another name");
        cleanForm();
        return;
      }


    //creating the newContact 
    let now = new Date(); // this is for the date and time update 
    const newContact =
    {
      image: profileImage,
      name: name,
      infoImg: "./icons/info.png",
      editImg: "./icons/edit.png",
      trashImg: "./icons/trash.png",
      heartImg: "./icons/heart.png",
      isFav: false,
      age: age,
      phoneNum: phoneNum,
      address: address,
      email: email,
      section: section,
      update: now.toLocaleString()
    }

    removeAllContacts();
    contactsArr.push(newContact); //adding the new contact to the contactArr 



    fillList(fixedArray(contactsArr));
    //using the fixedArray to add the new contact to the right place by the ABC  to the contactArr 

    cleanForm();
  }
}



//this is the searchInput code 
let searchInput = document.getElementById("search_box");
searchInput.addEventListener("input", function () {
  let inputText = document.getElementById("search_box").value;
  let allContacts = ul.querySelectorAll("li.Contact");
  for (let i = 0; i < contactsArr.length; i++)
    if (!(contactsArr[i].name.toLocaleLowerCase().startsWith(inputText.toLocaleLowerCase())))
      allContacts[i + 1].style.display = "none";
    else
      allContacts[i + 1].style.display = "flex";
});






ul.addEventListener("mouseover", function (e) {
  //this function change the color of the contacts while the mouse go over it, as long as it's is not the main line 
  let li = e.target.closest("li");
  if (li && li.tagName === "LI" && !li.classList.contains("headerRow"))
    li.style.background = "#cadbe3";
});



ul.addEventListener("mouseout", function (e) {
  //this function change the color of the contacts back to white while the mouse go out from the contact , as long as it's is not the main line 
  if (e.target && e.target.tagName === "LI")
    e.target.style.background = "white";
});


ul.addEventListener("click", function (e) {
  //this function gets the information of the clicked button location 
  e.preventDefault();
  let ClickedBtn = e.target.closest("button");
  let pContacts = document.getElementById("noContacts");


  // //heart for each contact 
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "heart") {

    let btnHeartImage = ClickedBtn.querySelector("img");

    if (!btnHeartImage.src.includes("heartAfterClick.png")) {
      contactsArr[ClickedBtn.getAttribute("data-id")].heartImg = "./icons/heartAfterClick.png";
      contactsArr[ClickedBtn.getAttribute("data-id")].isFav = true;

    }
    else {
      contactsArr[ClickedBtn.getAttribute("data-id")].heartImg = "./icons/heart.png";
      contactsArr[ClickedBtn.getAttribute("data-id")].isFav = false;
    }
    removeAllContacts();
    contactsArr = fixedArray(contactsArr);
    fillList(contactsArr);

  }








  //info for each contact 
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "info") {

    InfoModal.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(ClickedBtn);
    fillInfoPopUp(ClickedBtn.getAttribute("data-id"));

  }


  //edit button for each contact
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "edit") {
    e.preventDefault();
    saveFlag = false;
    editPopUp.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log(ClickedBtn);
    //this function is placing all the details in the inputs as default
    fillEditPopUp(ClickedBtn.getAttribute("data-id"));
    editSaveBtn.setAttribute("data-id", ClickedBtn.getAttribute("data-id"));


  }


  let li = e.target.closest("li");
  //trash button for each contact 
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "trash") {
    console.log();
    let result = confirm("Are you sure want to delete " + contactsArr[ClickedBtn.getAttribute("data-id")].name);
    if (result) {
      li.remove();
      let allContacts = ul.querySelectorAll("li.Contact");
      if (allContacts.length == 1)
        pContacts.style.display = "block";
    }

  }



  //the main trash btn which deletes all the contacts, also, leave a msg
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "trashMainBtn") {
    let result = confirm("Are you sure you want to delete all contacts? ");
    if (result) {
      removeAllContacts();
      pContacts.style.display = "block";
    }

  }




  //add new contact, in case the new contact's name already exists it won't be added to the cotactsArr
  if (ClickedBtn && ul.contains(ClickedBtn) && ClickedBtn.getAttribute("data-type") === "addMainBtn") {
    e.preventDefault();
    cleanForm(); 
    editPopUp.style.display = "block";
    document.body.style.overflow = "hidden";
    saveFlag = true;
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



//this code listening to the editPopupSaveBtn for both add new cotact and edit contact 
let editSaveBtn = document.getElementById("edit-save-btn");
editSaveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (saveFlag)
    addNewContactFunction();
  else
    editSaveBtnFunction();
  closePopupEdit();

});

document.getElementById('closePopupBtn').addEventListener('click', closePopupEdit);





