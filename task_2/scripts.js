const toDoInput = document.querySelector(".to-do__input");
const toDoInputButton = document.querySelector(".to-do__input-button");
const toDoList = document.querySelector(".to-do__list");
const toDoListItemTemplate = document.querySelector(
  ".to-do__list-item-template"
);

const deleteTaskButton = document.querySelector(
  ".to-do__list-item-delete-button"
);
console.log(deleteTaskButton);

let listItemCounter = 0;

toDoInputButton.addEventListener("click", () => {
  let newTask = document
    .querySelector(".to-do__list-item-template")
    .content.cloneNode(true);

  newTask.querySelector(".to-do__list-item").id = listItemCounter;
  newTask.querySelector(".to-do__list-item-input").value = toDoInput.value;
  newTask.querySelector(".to-do__list-item-input").id = listItemCounter;
  newTask.querySelector(".to-do__list-item-label").textContent =
    toDoInput.value;
  newTask
    .querySelector(".to-do__list-item-label")
    .setAttribute("for", listItemCounter);

  newTask
    .querySelector(".to-do__list-item-delete-button")
    .addEventListener("click", (e) => {
      console.log(e.target.closest(".to-do__list-item"), 2);
      e.target.closest(".to-do__list-item").remove()

    });

  listItemCounter += 1;
  toDoInput.value = "";
  toDoList.prepend(newTask);
});

deleteTaskButton.addEventListener("click", (e) => {
  console.log("te");

  console.log(e.target.id);
});
