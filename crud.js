var selectedRow = null;

function onformsubmit() {
  if (validate()) {
    var formdata = readform();
    if (selectedRow == null) {
      insertnewrecord(formdata);
    } else {
      updaterecord(formdata);
    }
    resetform();
  }
}

function readform() {
  var formdata = {};
  formdata["Name"] = document.getElementById("Name").value;
  formdata["age"] = document.getElementById("age").value;
  formdata["Email"] = document.getElementById("Email").value;
  formdata["Salary"] = document.getElementById("Salary").value;
  return formdata;
}
function insertnewrecord(data) {
  var table = document
    .getElementById("Employee-list")
    .getElementsByTagName("tbody")[0];

  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.Name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.age;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.Email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.Salary;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<Button onClick="onEdit(this)">Edit</Button>
                       <Button onClick="onDelete(this)">Delete</Button>`;
}
function resetform() {
  document.getElementById("Name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Salary").value = "";
  selectedrow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("age").value = selectedRow.cells[1].innerHTML;
  document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("Salary").value = selectedRow.cells[3].innerHTML;
}
function updaterecord(formdata) {
  selectedRow.cells[0].innerHTML = formdata.Name;
  selectedRow.cells[1].innerHTML = formdata.age;
  selectedRow.cells[2].innerHTML = formdata.Email;
  selectedRow.cells[3].innerHTML = formdata.Salary;
}
function onDelete(td) {
  if (confirm("are u sure?")) {
    row = td.parentElement.parentElement;
    // document.getElementById("Employee-list").deleteRow(row.index);
    row.innerHTML = "";
    resetform();
  }
}
function printError(elemId, errMsg) {
  document.getElementById(elemId).innerHTML = errMsg;
}

function validate() {
  var name = document.contactForm.Name.value;
  var email = document.contactForm.Email.value;
  var age = document.contactForm.age.value;
  var Salary = document.contactForm.Salary.value;
  var nameErr = (emailErr = ageErr = salaryErr = true);
  var isValid = true;
  //for name
  if (name == "") {
    printError("nameErr", "*Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printError("nameErr", "*Please enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }
  // Validate email address
  if (email == "") {
    printError("emailErr", "*Please enter your email address");
  } else {
    // Regular expression for basic email validation
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "*Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }
  if (age == "") {
    printError("ageErr", "*Please enter your age");
  } else {
    var regex = /^[0-9][0-9]$/;
    if (regex.test(age) === false) {
      printError("ageErr", "*Please enter a valid age");
    } else {
      printError("ageErr", "");
      ageErr = false;
    }
  }
  if (Salary == "") {
    printError("salaryErr", "*Please enter your Salary");
  } else {
    var regex = /^[0-9]+$/;
    if (regex.test(Salary) === false) {
      printError("salaryErr", "*Please enter a valid Salary");
    } else {
      printError("salaryErr", "");
      salaryErr = false;
    }
  }
  if (
    nameErr == false &&
    ageErr == false &&
    emailErr == false &&
    salaryErr == false
  ) {
    isValid = true;
  } else {
    isValid = false;
  }
  console.log(isValid);
  return isValid;
}
