
//creating and adding delete button to the list
let allList = document.getElementsByTagName("li");
for(i = 0; i < allList.length; i++){
    let but = document.createElement("button");
    let cha = document.createTextNode("Delete");
    but.className = "remove";
    but.appendChild(cha);
    allList[i].appendChild(but);

};

// deleting list 

let remove = document.getElementsByClassName("remove");
for(i = 0; i < remove.length; i++){
    remove[i].addEventListener("click",function(){
    let line = this.parentElement;
    line.style.display = "none";
    });
}

// striking through an item on the list

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);
 //adding from input

 function addItem (){
     let li = document.createElement("li");
     let inputValue = document.querySelector("input").value;
     let newItem = document.createTextNode(inputValue);
     li.appendChild(newItem);
     if(inputValue === ''){
         alert("Empty Input Field!");
     }else{
        document.getElementById("myList").appendChild(li);
     }
     document.querySelector("input").value = "";

  let butty = document.createElement("button");
  let userText = document.createTextNode("Delete");
  butty.className = "remove";
  butty.appendChild(userText);
  li.appendChild(butty);

  for(i = 0; i < remove.length; i++){
      remove[i].addEventListener("click", function(){
        let line = this.parentElement;
    line.style.display = "none";
      });
  }
 }
 

