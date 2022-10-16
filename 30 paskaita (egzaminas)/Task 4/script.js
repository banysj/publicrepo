/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
	.then((res) => res.json())
	.then((data) => {
		data.map((element) => {
			const carBrandCard = document.createElement('div');
			carBrandCard.setAttribute('class', 'car-brand-card');

			const carBrandHeading = document.createElement('h2');
			const carBrandName = element.brand;
			carBrandHeading.textContent = carBrandName;

			const brandModelsList = document.createElement('ul');
			const allBrandModels = element.models;

			allBrandModels.map((el) => {
				const modelName = document.createElement('li');
				modelName.textContent = el;
				brandModelsList.append(modelName);
			});

			document.getElementById('output').append(carBrandCard);
			carBrandCard.append(carBrandHeading);
			carBrandCard.append(brandModelsList);
		});
	});
