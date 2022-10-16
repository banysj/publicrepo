/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const calcForm = document.querySelector('form');
const input = document.getElementById('search');

calcForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = parseInt(input.value);
	if (inputValue) {
		const resultLb = (inputValue * 2.2046).toFixed(2);
		const resultG = (inputValue * 1000).toFixed(2);
		const resultOz = (inputValue * 35.274).toFixed(2);

		const resultDisplay = document.createElement('div');
		resultDisplay.setAttribute('class', 'result-display');

		const resultDisplayLb = document.createElement('h4');
		resultDisplayLb.textContent = `Mass in pounds: ${resultLb} lb`;

		const resultDisplayG = document.createElement('h4');
		resultDisplayG.textContent = `Mass in grams: ${resultG} g`;

		const resultDisplayOz = document.createElement('h4');
		resultDisplayOz.textContent = `Mass in ounces: ${resultOz} oz`;

		document.getElementById('output').append(resultDisplay);
		resultDisplay.append(resultDisplayLb);
		resultDisplay.append(resultDisplayG);
		resultDisplay.append(resultDisplayOz);
	} else {
		alert('Please insert a Number');
	}
});
