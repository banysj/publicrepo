/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const showButton = document.getElementById('btn');
showButton.addEventListener('click', () => {
	document.getElementById('message').style.visibility = 'collapse';
	document.getElementById('message').style.marginTop = '-19px';

	fetch(ENDPOINT)
		.then((res) => res.json())
		.then((data) => {
			data.map((element) => {
				const userCard = document.createElement('div');
				userCard.setAttribute('class', 'user-card');

				const userAvatar = document.createElement('img');
				userAvatar.src = element.avatar_url;

				const userLogin = document.createElement('h2');
				userLogin.textContent = element.login;

				document.getElementById('output').append(userCard);
				userCard.append(userAvatar);
				userCard.append(userLogin);
			});
		});
});
