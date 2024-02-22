 // Query for the submit button and input task fields once in the beginning
 let submit = document.querySelector('#submit');
 let newTasks = document.querySelector('#newTasks');

 // Disable the submit button by default
 submit.disabled = true;

 // Listen for input to be typed into the input field
 newTasks.addEventListener('input', function() {
     submit.disabled = !newTasks.value;
 });

 // Listen for submission of form
 document.querySelector('#taskForm').addEventListener('submit', function(event) {
     // Prevent the default submission of the form
     event.preventDefault();

     // Find the task the user just submitted
     let task = newTasks.value;

     // Create a list item for the new task and add the task to it
     let listItem = document.createElement('li');
     listItem.textContent = task;

     // Add a new element to our unordered list
     document.querySelector('#taskList').append(listItem);

     // Clear the input field and disable the submit button
     newTasks.value = '';
     submit.disabled = true;

     return false;
 });