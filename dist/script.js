var selectedRow = null;

//Show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Clear All Fields
function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}

/// Add Data Button
document.querySelector("#add-data-btn").addEventListener("click", () => {
    $('#add-data-modal').modal('show');
});

// Add Data Form Submit
document.querySelector("#student-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Get Form Values
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    //Validate
    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("Please fill in all fields", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            
            list.appendChild(row);
            selectedRow = null;
            showAlert("Student Added", "success");
        }
        else{
            selectedRow.children[0].textContent = firstName;
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollNo;
            selectedRow = null;
            showAlert("Student Info Edited", "info");
        }

        clearFields();
        $('#add-data-modal').modal('hide');
    }
});

document.querySelector("#student-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#editFirstName").value = selectedRow.children[0].textContent;
        document.querySelector("#editLastName").value = selectedRow.children[1].textContent;
        document.querySelector("#editRollNo").value = selectedRow.children[2].textContent;
        $('#edit-modal').modal('show'); // show the modal form
    }
});

document.querySelector("#edit-form").addEventListener("submit", (e) => {
    e.preventDefault();

    //Get Form Values
    const firstName = document.querySelector("#editFirstName").value;
    const lastName = document.querySelector("#editLastName").value;
    const rollNo = document.querySelector("#editRollNo").value;

    //Validate
    if (firstName == "" || lastName == "" || rollNo == "") {
        showAlert("Please fill in all fields", "danger");
    } else {
        selectedRow.children[0].textContent = firstName;
        selectedRow.children[1].textContent = lastName;
        selectedRow.children[2].textContent = rollNo;
        selectedRow = null;
        showAlert("Student Info Edited", "info");
        $('#edit-modal').modal('hide'); // hide the modal form
    }

    clearFields();
});


//Delete Data
document.querySelector("#student-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted", "danger");
    }
})