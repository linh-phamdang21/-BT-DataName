let arrName = ["Pham Dang Linh", "Vu Quang Nguyen", "Nguyen Phuong Anh", "Luong Minh Thu", "Nguyen Thi Phuong Anh"];
showName();
function showName() {
    let html = "<tr>";
    for (let i = 0; i < arrName.length; i++) {
        html += "<td width='40'>" + (i + 1) + "</td>";
        html += "<td width='200' id= 'getname' >" + arrName[i] + "</td>";
        html += "</tr>";
    }
    document.getElementById("name").innerHTML = html;
}

function addName() {
    let name = document.getElementById("addname").value;
    arrName.unshift(name);
    showName();
}

function editName() {
    let position = prompt("Please Enter Student's Number:  ");
    let newName = prompt("Please Edit Student's Name: ");
    arrName[position - 1] = newName;
    showName();
}

function deleteName() {
    let position = prompt("Please Enter Student's Number:  ");
    arrName.splice(position,1);
    showDay();
    alert("Deleted");
}