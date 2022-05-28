
let parentDiv = document.getElementById('parent-div');




function execute() {

  let data = document.getElementById('input').value;

  let firstDiv = document.createElement('div');
  let heading = document.createElement('h1');
  let cancelButton = document.createElement("button");
  let doneButton = document.createElement("button");
  //let secondDiv = document.createElement('div');
  //let deleteAllButton = document.createElement("button");





  //CREATE TEXT SECTION:-

  let headingText = document.createTextNode(data);
  let cancelButtonText = document.createTextNode('DELETE');
  let doneButtonText = document.createTextNode('DONE');
  //let deleteAllButtonText = document.createTextNode('DELETE ALL...');


  //WEAVING SECTION:-
  parentDiv.appendChild(firstDiv);
  //parentDiv.appendChild(secondDiv);
  firstDiv.appendChild(heading);
  heading.appendChild(headingText);
  heading.appendChild(cancelButton);
  cancelButton.appendChild(cancelButtonText);
  heading.appendChild(doneButton);
  doneButton.appendChild(doneButtonText);
  //secondDiv.appendChild(deleteAllButton);
  //deleteAllButton.appendChild(deleteAllButtonText);
  //



  cancelButton.addEventListener('click', () => {
    // parentDiv.removeChild(colDiv)
    firstDiv.style.display = 'none'
  })


  doneButton.addEventListener('click', () => {
    // parentDiv.removeChild(colDiv)

    //changes:-
    heading.style.backgroundColor = 'green';
  })


  /*deleteAllButton.addEventListener('click', () => {
    // parentDiv.removeChild(colDiv)
    firstDiv.style.display = 'none'
  })*/



  /*var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X")); */


  //STYLING SECTION:-
  heading.classList = 'heading';
  cancelButton.classList = 'button';
  doneButton.classList = 'button2';
  deleteAllButton.classList = 'button3';

}


function deleteAll() {

  let parentDiv = document.getElementById('parent-div');

  parentDiv.style.display = 'none'
}









/*

let parentDiv = document.getElementById('parent-div');




function execute() {

    let data= document.getElementById('input').value;

    let firstDiv = document.createElement('div');
    let heading = document.createElement('h1');
    let cancelButton= document.createElement("button");

    


    //CREATE TEXT SECTION:-
    
    let headingText= document.createTextNode(data);
    let cancelButtonText = document.createTextNode('X');
    

    //WEAVING SECTION:-
    parentDiv.appendChild(firstDiv);
    firstDiv.appendChild(heading);
    firstDiv.appendChild(headingText);
    firstDiv.appendChild(cancelButton);
    firstDiv.appendChild(cancelButtonText);
    

    //STYLING SECTION:-
    firstDiv.classList='heading';
}

var element = document.getElementById('id');
element.onclick = function() {
  element.style.backgroundColor= 'red';
}

*/










/*
.button {
    background-color: red;
    border-radius: 5px;
    position: absolute;
    left: 1080px;
    font-size: 20px;
    cursor: pointer;
    bottom: 394px;
}
.button2 {
    background-color: red;
    border-radius: 5px;
    position: absolute;
    left: 1081px;
    font-size: 20px;
    cursor: pointer;
    bottom: 358px;
}*/
