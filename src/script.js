let input = window.document.querySelector("#input");
let output = window.document.querySelector("#output");

let isLastChar = false;

const calcInput = () => {
	input.innerText = output.innerText;
};

const calcOutput = () => {
	output.innerText = eval(input.innerText);
};

const add = (value) => {
	if (input.innerText.length <= 10) {
		if (input.innerText === "0") {
			input.innerText = "";
		}
		input.innerText += value;
	}
};

const addNum = (num) => {
	add(num);
	isLastChar = false;
	calcOutput();
};

const addChar = (char) => {
	if (isLastChar == false) add(char);
	isLastChar = true;
};

const calcClear = () => {
	input.innerText = 0;
	output.innerText = 0;
};
