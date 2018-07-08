function test() {
	var divobj = document.getElementById("criteriadiv");
	if(divobj == null){
		 divobj = insertDiv();

	}
	var data = makeData();
	var table = makeTable(data);
	var button = makeButton();
    divobj.innerHTML = table.outerHTML;
    divobj.insertBefore(button, table.nextSibling);
}

function insertDiv(){
		newdiv = document.createElement("div");
		newdiv.setAttribute("id", "criteriadiv");
		document.body.appendChild(newdiv);

		return newdiv;
}

function makeButton() {
    button = document.createElement("button");
    text = document.createTextNode("next");
    button.appendChild(text);

    return button;

}

function makeRange() {
    var range = document.createElement("input");
    range.setAttribute("type", "range");
    range.setAttribute("max", "10");
    range.setAttribute("value", "5");

    return range;
}

function makeTable(data) {

    var table = document.createElement("table");

    for (i = 0; i < data.length; i++) {
        row = table.insertRow(-1);
        for (j = 0; j < data[0].length; j++) {
            td = row.insertCell(-1);
            td.appendChild(data[i][j]);
        }
    }
    return table;
}

function makeData() {

    var x = document.getElementById("criteria1").value;
    var y = document.getElementById("criteria2").value;
    var z = document.getElementById("criteria3").value;

    var range1 = makeRange();
    var range2 = makeRange();
    var range3 = makeRange();

    var data =
        [[document.createTextNode(x), range1, document.createTextNode(y)],
        [document.createTextNode(y), range2, document.createTextNode(z)],
        [document.createTextNode(z), range3, document.createTextNode(x)]];

    return data;
}
