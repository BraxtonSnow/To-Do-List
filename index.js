const modalBodyContainer = document.querySelector(".modal-body-content");

const h1Tag = document.getElementById("title-modal");

const titleContent = document.querySelector(".title-content");

const nameOfTask = document.querySelector(".name-of-task");

const infoOfTask = document.querySelector(".description-of-task");

const createTaskModal = document.querySelector(".create-task-modal");

const buttonDiv = document.createElement("div");
buttonDiv.className = "add-item-button";

let infoArray = [];
let actualInfoArray = [
  ["asdf", "fdsa", 3, 4, 5, 6],
  [9, 8, 7, 6, 5, 4, 3],
  [7, 2, 3, 4, 5, 6],
  [0, 0, 0, 9, 9, 9, 8],
  [1, 2, 3, 1, 2, 3],
];
let titleNameArray = [
  "Kitchen",
  "Dinning Room",
  "Living Room",
  "Bathroom",
  "Bedroom",
];
let boolean = false;

function kitchenList(titleName, index) {
  const modalContainer = document.querySelector(".modal-container");
  modalContainer.style.display = "block";
  h1Tag.textContent = `${titleName}`;
  buttonDiv.appendChild(button);
  titleContent.appendChild(buttonDiv);
  console.log("good");
  let number = 0;
  if (index === 0) {
    if (boolean === false) {
      number = actualInfoArray[index].length;
      for (let i = 0; i < actualInfoArray[index].length; i++) {
        generateExistingTasks(actualInfoArray[index][i], number, i);
      }
      return (boolean = true);
    } else {
      generateExistingTasks(actualInfoArray[index][0], number, 0);
    }
    console.log(`1 ${boolean}`);
  } else if (index === 1) {
    if (boolean === false) {
      number = actualInfoArray[index].length;
      for (let i = 0; i < actualInfoArray[index].length; i++) {
        generateExistingTasks(actualInfoArray[index][i], number, i);
      }
      return (boolean = true);
    } else {
      generateExistingTasks(actualInfoArray[index][0], number, 0);
    }
    console.log(`2 ${boolean}`);
  } else if (index === 2) {
    if (boolean === false) {
      number = actualInfoArray[index].length;
      for (let i = 0; i < actualInfoArray[index].length; i++) {
        generateExistingTasks(actualInfoArray[index][i], number, i);
      }
      return (boolean = true);
    } else {
      generateExistingTasks(actualInfoArray[index][0], number, 0);
    }
    console.log(`3 ${boolean}`);
  } else if (index === 3) {
    if (boolean === false) {
      number = actualInfoArray[index].length;
      for (let i = 0; i < actualInfoArray[index].length; i++) {
        generateExistingTasks(actualInfoArray[index][i], number, i);
      }
      return (boolean = true);
    } else {
      generateExistingTasks(actualInfoArray[index][0], number, 0);
    }
    console.log(`4 ${boolean}`);
  } else if (index === 4) {
    if (boolean === false) {
      number = actualInfoArray[index].length;
      for (let i = 0; i < actualInfoArray[index].length; i++) {
        generateExistingTasks(actualInfoArray[index][i], number, i);
      }
      return (boolean = true);
    } else {
      generateExistingTasks(actualInfoArray[index][0], number, 0);
    }
    console.log(`5 ${boolean}`);
  }
}

let num = 0;
function generateExistingTasks(generateName, number, i) {
  if (boolean === true) {
    console.log(number);
    console.log(i);
    for (let i = 0; i < number; i++) {
      console.log("delete");
      const newTask = document.querySelector(`.class-name-${num}`);
      taskHolderContainer.removeChild(newTask);
      num += 1;
      console.log(`if ${boolean}`);
    }
    boolean = false;
    // kitchenList(generateName, number);
  } else {
    console.log("create");
    const newTask = document.createElement("button");
    newTask.className = `class-name-${i}`;
    newTask.textContent = `${generateName}`;
    taskHolderContainer.appendChild(newTask);
    // boolean = true;
  }
}

function addItemToModal() {
  createItem.style.display = "block";
}

function submitItemToModal() {
  if (nameOfTask.value !== "" && infoOfTask.value !== "") {
    let taskName = nameOfTask.value;
    let taskInfo = infoOfTask.value;
    infoArray.push(taskInfo);
    console.log(infoArray[0]);

    createItem.style.display = "none";
    const newTask = document.createElement("button");
    newTask.textContent = `${taskName}`;
    // kitchen[`${nameOfTask.value}`] = `${nameOfTask.value}`;
    // kitchen[`${nameOfTask.value}`] = `${infoOfTask.value}`;
    taskNameDictionary.kitchen[`${nameOfTask.value}`] = `${nameOfTask.value}`;
    taskInfoDictionary.kitchen[`${nameOfTask.value}`] = `${infoOfTask.value}`;
    actualInfoArray[0].push(`${nameOfTask.value}`);
    nameOfTask.value = "";
    infoOfTask.value = "";

    console.log(actualInfoArray[0]);
    console.log(taskNameDictionary["kitchen"]);
    console.log(taskInfoDictionary["kitchen"]);
    selectTaskButton.style.display = "block";
    // newTask.className = `class-name-${}`;
    taskHolderContainer.appendChild(newTask);
  } else {
    nameOfTask.value = "";
    infoOfTask.value = "";
    createItem.style.display = "none";
  }
}

function seeTaskModal() {
  const newcreateTaskModal = document.querySelector(".created-task-modal");
  newcreateTaskModal.style.display = "block";
}

function searchForTask() {
  mainInfoConatiner.style.display = "none";

  taskNameTitle.textContent =
    taskNameDictionary.kitchen[selectTaskNameInput.value];

  actualInfoRetrieved.textContent =
    taskInfoDictionary.kitchen[selectTaskNameInput.value];

  selectNewTaskButtonContainer.style.display = "block";
}

function selectOtherTask() {
  taskNameTitle.textContent = "Name";
  actualInfoRetrieved.textContent = "";
  mainInfoConatiner.style.display = "block";
  selectNewTaskButtonContainer.style.display = "none";
  selectTaskNameInput.value = "";
}

//
const taskNameTitle = document.querySelector(".task-name");
const actualInfoRetrieved = document.querySelector(".retrieved-info-container");
const mainInfoConatiner = document.querySelector(".main-info-container");
const selectNewTaskButtonContainer = document.querySelector(
  ".select-new-task-button-container"
);

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchForTask);
const selectTaskNameInput = document.querySelector(".select-task-name-input");

// let indexNum = 0;
let taskNameDictionary = {
  kitchen: { asdf: "asdf", fdsa: "fdsa" },
  dinningroom: {},
  livingroom: {},
  bathroom: {},
  bedroom: {},
};
let taskInfoDictionary = {
  kitchen: { asdf: "asdf", fdsa: "fdsa" },
  dinningroom: {},
  livingroom: {},
  bathroom: {},
  bedroom: {},
};

const selectNewTaskButton = document.getElementById("selectNewTaskButton");
selectNewTaskButton.addEventListener("click", selectOtherTask);

const selectTaskButton = document.getElementById("selectTaskButton");
selectTaskButton.addEventListener("click", seeTaskModal);

const createItem = document.querySelector(".add-name-info-container");

const taskHolderContainer = document.querySelector(".task-holder-container");

const submitTaskButton = document.getElementById("submit-task");
submitTaskButton.addEventListener("click", submitItemToModal);

const kitchenButton = document.getElementById("kitchen");
kitchenButton.addEventListener("click", function () {
  kitchenList(titleNameArray[0], 0);
});

const dinningRoomButton = document.getElementById("dinning-room");
dinningRoomButton.addEventListener("click", function () {
  kitchenList(titleNameArray[1], 1);
});

const livingRoomButton = document.getElementById("living-room");
livingRoomButton.addEventListener("click", function () {
  kitchenList(titleNameArray[2], 2);
});

const bathroomButton = document.getElementById("bathroom");
bathroomButton.addEventListener("click", function () {
  kitchenList(titleNameArray[3], 3);
});

const bedroomButton = document.getElementById("bedroom");
bedroomButton.addEventListener("click", function () {
  kitchenList(titleNameArray[4], 4);
});

// const addItemButton = document.getElementById("addItem");
const button = document.createElement("button");
button.textContent = "Add Task";
button.setAttribute("id", "addItem");
button.addEventListener("click", addItemToModal);
