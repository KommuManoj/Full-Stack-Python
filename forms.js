let M = document.getElementById("M");
let V = document.createElement("div");
V.id = "form-box";
M.appendChild(V);

let title = document.createElement("h1");
title.innerText = "Student Form";
V.appendChild(title);

let form = document.createElement("form");
V.appendChild(form);

function data(labelText, id, type = "text") {
  let label = document.createElement("label");
  label.innerText = labelText;
  label.htmlFor = id;
  let input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
}

data("Name", "name");
data("Rollno", "rollno");
data("Email", "email", "email");
data("Phone", "phone", "tel");
data("Date of Birth", "dob", "date");

document.getElementById("phone").addEventListener("input", function () {
  this.value = this.value.slice(0, 10);
});

let genderLabel = document.createElement("label");
genderLabel.innerText = "Gender";
genderLabel.htmlFor = "gender";

let genderSelect = document.createElement("select");
genderSelect.id = "gender";
genderSelect.name = "gender";

["", "Male", "Female", "Other"].forEach(g => {
  let opt = document.createElement("option");
  opt.value = g;
  opt.innerText = g === "" ? "Select Gender" : g;
  genderSelect.appendChild(opt);
});

form.appendChild(genderLabel);
form.appendChild(genderSelect);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

let stateLabel = document.createElement("label");
stateLabel.innerText = "State";
stateLabel.htmlFor = "state";

let stateSelect = document.createElement("select");
stateSelect.id = "state";
stateSelect.name = "state";

["", "TELANGANA", "ANDHRAPRADESH", "TAMILNADU", "KARNATAKA", "MAHARASTRA", "RAJASTHAN"].forEach(
  s => {
    let opt = document.createElement("option");
    opt.value = s;
    opt.innerText = s === "" ? "Select State" : s;
    stateSelect.appendChild(opt);
  }
);

form.appendChild(stateLabel);
form.appendChild(stateSelect);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

let submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.innerText = "Submit";

form.appendChild(submitBtn);