/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
	{ id: '1', name: 'John Smith', age: 20 },
	{ id: '2', name: 'Ann Smith', age: 24 },
	{ id: '3', name: 'Tom Jones', age: 31 },
	{ id: '4', name: 'Rose Peterson', age: 17 },
	{ id: '5', name: 'Alex John', age: 25 },
	{ id: '6', name: 'Ronald Jones', age: 63 },
	{ id: '7', name: 'Elton Smith', age: 16 },
	{ id: '8', name: 'Simon Peterson', age: 30 },
	{ id: '9', name: 'Daniel Cane', age: 51 },
];

// const getUserAverageAge = (array) => {
// 	const ageArray = array.map((element) => element.age);
// 	return ageArray.reduce((a, b) => a + b, 0) / ageArray.length;
// };

//taip geriau
const getUserAverageAge = (array) => {
	return array.reduce((a, b) => a + b, 0) / array.length;
};

const getUsersNames = (array) => {
	return array.map((element) => element.name);
};

console.log('Users average age:', getUserAverageAge(users));
console.log('Users names:', getUsersNames(users));
