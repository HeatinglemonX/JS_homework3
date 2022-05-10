let myTable = document.querySelector("#table");

let tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

table = document.getElementById("table");
for (let i = 0; i < tableInfo.length; i++) {
  let newRow = table.insertRow(table.length);
  for (let j = 0; j < tableInfo[i].length; j++) {
    let cell = newRow.insertCell(j);
    cell.innerHTML = tableInfo[i][j];
  }
}

var list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
var cont = document.getElementById("container");
var ul = document.createElement("ul");
ul.setAttribute("style", "padding: 0; margin: 0;");
ul.setAttribute("id", "theList");
for (i = 0; i <= list.length - 1; i++) {
  var li = document.createElement("li");
  li.innerHTML = list[i];
  li.setAttribute("style", "display: block;");
  ul.appendChild(li);
}

cont.appendChild(ul); // add list to the container.

var select = document.getElementById("arr");
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

function dropDown() {
  for (var i = 0; i < dropDownList.length; i++) {
    var optn = dropDownList[i];
    var el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    select.appendChild(el);
  }
}
