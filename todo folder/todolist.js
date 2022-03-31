var put = document.getElementById("put");//(new-task)
var too = document.getElementsByTagName("button")[0];//(button)
var pleted = document.getElementById("pleted");//(incomplet-tasks)
var com = document.getElementById("com");//(completed-tasks)

var createNewTaskElement = function (taskstring) {
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    editButton.innerText = "Delete";
    editButton.className = "delete";

    label.innerText = "taskstring";

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;

}

var AddTask = function () {
    console.log("Add task....");

    var listItem = createNewTaskElement(put.value);
    pleted.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    put.value = "";
}

var editTask = function () {
    console.log("editTask................");
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]")
    var label = listItem.querySelector("label");
    var containsClass = listItem.classList.contains("editMode");

    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innertext;
    }
    listitem.classList .toggle("editMode");

}
var deleteTask = function () {
    console.log("deleteTask...")
    var listItem = this.parentNode;
    var ul = listItem.parentNode
    ul.removechild(listItem);
}

var taskCompleted = function () {
    console.log("taskcompleted....")
    var listItem = this.parentNode;
    com.appendChild(listItem);
    bindTaskEvents(listitem, taskcompleted);

}
var taskIncomplete = function () {
    console.log("taskIncomplete....")
    var listItem = this.parentNode;
    pleted.appendChild(listItem);
    bindTaskEvents(listitem, taskcompleted);

}
var bindTaskEvents = function (taskListItem,
    checkBoxEventHandler) {
    console.log("Bind list item events")

    var checkbox = ("input[type=checkbox]")
    var editbutton = taskListItem.querySelector("button.edit")
    var deletebutton = taskListItem.querySelector("button.delete")

    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkbox.onchange = checkBoxEventHandler;
}

too.addEventListener("click", function (AddTask) {
    // console.log(too);

    for (var i = 0; i < com.children.length; i++) {

        bindTaskEvents(com.children[i], com);
    }
}
)