/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
	constructor(title, director, budget) {
		this.title = title;
		this.diretor = director;
		this.budget = budget;
	}
	wasExpensive() {
		return this.budget > 100000000;
	}
}

const myMovie = new Movie('movie anme', 'movie dorector', 100000001);
console.log('Movie:', myMovie);
console.log('Was expensive?', myMovie.wasExpensive());
