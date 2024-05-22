function addTodo() {
    const count = document.getElementById("counter");
    var c = parseInt(count.innerHTML); // Parse the innerHTML to an integer
    var todoInput = document.getElementById("todoInput").value;
    var todoList = document.getElementById("todoList");
    
    // Create a new list item
    var listItem = document.createElement("li");
    listItem.textContent = todoInput;
    
    // Create a remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      todoList.removeChild(listItem); // Remove the list item when remove button is clicked
      c--; // Decrement the counter
      count.innerHTML = c; // Update the counter in the HTML
    
    };
    
    // Append the remove button to the list item
    listItem.appendChild(removeButton);
    var todoInput = document.getElementById("todoInput")
    todoInput.value = "";
    // Append the new list item to the todo list
    todoList.appendChild(listItem);
    
    c++;
    count.innerHTML = c;
    console.log(count.innerHTML);

  }
  