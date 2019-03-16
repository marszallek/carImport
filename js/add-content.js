function payLowTax() {
	var score = document.getElementById("score").value;
	var rate = document.getElementById("rate").value;
	document.getElementById("tax").textContent = Math.round(score * 0.031 / rate);
}

function payHighTax() {
	var score = document.getElementById("score").value;
	var rate = document.getElementById("rate").value;
	document.getElementById("tax").textContent = Math.round(score * 0.186 / rate);

}

function newyork() {
	var stan = document.getElementById("stan").value;
	document.getElementById("york").textContent = stan;
	if (stan == "NOT") {
		alert('Zwariowałeś??? Transport z Alaski do Nowego Yorku? :):) Ja się tego nie podejmę!!!');
	} else if (stan == "NO") {
		alert('Na Hawaje to sobie można pojechać a nie samochody przywozić ;)');
	}
}

function calculate() {
	var price = document.getElementById("auction").value;
	var fee = price * 0.1;
	document.getElementById("profit").textContent = fee;
	var york = document.getElementById("york").textContent;
	document.getElementById("clop").textContent = Math.round((+york + 800 + +price + +fee) * 0.1);
	document.getElementById("clon").textContent = Math.round((+york + 700 + +price + +fee) * 0.1);
	var clop = document.getElementById("clop").textContent;
	var clon = document.getElementById("clon").textContent;
	document.getElementById("vatniemcy").textContent = Math.round(+clon * 10 * 0.19);
	document.getElementById("vatpolska").textContent = Math.round(+clop * 10 * 0.23);
	var vatp = document.getElementById("vatpolska").textContent;
	var vatn = document.getElementById("vatniemcy").textContent;
	var tax = document.getElementById("tax").textContent;
	var rate = document.getElementById("rate").value;
	var suma = (+clop * 10 + +vatp + +tax) * rate + 1500;
	var sumb = (+clon * 10 + +vatn + +tax - 100) * rate + 2500 + 1200;
	document.getElementById("suma").textContent = Math.round(suma);
	document.getElementById("sumb").textContent = Math.round(sumb);
};
