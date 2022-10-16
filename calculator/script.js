class Calculator {
	constructor(previousOperandTextElement, currentOperandTextElelment) {
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElelment = currentOperandTextElelment;
		this.clear(); //issaukiama funkcija kiekviena karta kai paleidziamas kalkuliatorius kad isvalyti pries tai buvusias reiksmes
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined; //undefined tam kad nebutu likusi sena operation funkcija
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1); //funkcija netrina nieko. slice'na stringa ir palieka kas liko. .slice(0, -1) reiskia, kad paliekmas stingas nuo 0 iki (paskutinio -1).
	}

	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return; //sitas, tam kad stringe nebutu dvieju ar daugiau '.' ifas grazins funkcija nieko neatlikus, jei bus paspaustas '.' mygtukas ir currentOperand savyje tures '.'/
		this.currentOperand = this.currentOperand.toString() + number.toString(); //viskas verciama i stringus, kad butu galima po viena skaitmeni prideti pris stringo galo.
	}

	chooseOpearation(operation) {
		if (this.currentOperand === '') return; //tikrinama ar yra kokia nors currentOperand reiksme. jei nera, tai funkcija return ir toliau neatliekama, kad nebutu daromi matematiniai veiksmai niekam. privalo buti currentOperand kazkokia reiksme
		if (this.currentOperand !== '') {
			//jei currentOperand nera tuscias, iskvieciam funkcija
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand; //ivestas skaicius, currentOperand, persikelia i virsu iskvietus chooseOperation funkcija
		this.currentOperand = ''; //po perkelimno reikia, kad currentOperand vel butu tuscias
	}

	compute() {
		// sukuriami kintamieji, matematiniams veiksmams atlikti ir rezultatui gauti funkcijos viduje
		let computation;
		//konvertujama is string i skaicius. isbandyti su +
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return; //funkcija grizta, nieko neatlieka, jei nors vienas kintamasis yra ne skaicius arba yra tuscias
		switch (this.operation) {
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case 'x':
				computation = prev * current;
				break;
			case '÷':
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentOperand = computation; //atsakymas priskiriamas i currentOperand
		this.operation = undefined; // istrinama sena reiksme
		this.previousOperand = ''; //istrinama sena reiksme
	}

	getDisplayNumber(number) {
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split('.')[0]);
		const decimalDigits = stringNumber.split('.')[1];
		let integerDisplay;
		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {
				maximumFractionDigits: 0,
			});
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	}

	updateDisplay() {
		this.currentOperandTextElelment.innerText = this.getDisplayNumber(
			this.currentOperand
		); //currentOperand tekstas modifikuiojamas su funkcija
		if (this.operation != null) {
			this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
				this.previousOperand
			)} ${this.operation}`;
		} else {
			this.previousOperandTextElement.innerText = '';
		}
	}
}

const numberButtons = document.querySelectorAll('[data-number]'); //visi number mygtukai gaunasi, kaip vienas 'array'
const operationButtons = document.querySelectorAll('[data-operation'); //visi operation mygtukai gaunasi kaip vienas 'array'
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
	'[data-previous-operand]'
);
const currentOperandTextElelment = document.querySelector(
	'[data-current-operand]'
);

const calculator = new Calculator(
	previousOperandTextElement,
	currentOperandTextElelment
);

numberButtons.forEach((button) => {
	//kiekvienam number mygtukui priskiriama eventListener
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText); //saukiama funkcija ir i ja eina paspausto mygtuko innerText. appendNumber funkcijoje button.innerText bus kaip number.
		calculator.updateDisplay();
	});
});

operationButtons.forEach((button) => {
	//kiekvienam operation mygtukui priskiriama eventListener
	button.addEventListener('click', () => {
		calculator.chooseOpearation(button.innerText); //i calculator siuncima paspausto mygtuko innerText. su switch bus parinktas matematinis veiksmas. chooseOperation funkcijoje button.innerText bus kaip
		calculator.updateDisplay();
	});
});

//button funkcijos kintamasis istrintas is visu 3 funkciju apacioje
equalsButton.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
	calculator.clear();
	calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
	calculator.delete();
	calculator.updateDisplay();
});
