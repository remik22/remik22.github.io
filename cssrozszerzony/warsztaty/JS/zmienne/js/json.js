'use strict';

var jsonOsoby = {
	"osoby": [
		{
			imie: "Krystian",
			nazwisko: "Dziopa",
			wzrost: 180,
			zainteresowania: [
				{
					nazwa: "podróże"
				},
				{
					nazwa: "gotowanie"
				},

			]
		},
		{
			imie: "Jan",
			nazwisko: "Nowak",
			wzrost: 180,
			zainteresowania: [
				{
					nazwa: "podróże"
				},
				{
					nazwa: "gotowanie"
				},

			]
		},
		{
			imie: "Marek",
			nazwisko: "Franc",
			wzrost: 180,
			zainteresowania: [
				{
					nazwa: "podróże"
				},
				{
					nazwa: "gotowanie"
				},

			]
		},
	]
}
console.log(jsonOsoby);
jsonOsoby.osoby[2].zainteresowania.forEach(function (e, i) {
	console.log(e.nazwa);
});
jsonOsoby.osoby.forEach(function (e, i) //e, i to element i  index
	{
		console.log(e.nazwisko); //wywołujemy tylko nazwisko
	});
