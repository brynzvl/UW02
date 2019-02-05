let techCities = ['Seattle', 'Austin', 'San Francisco', 'Washington D.C.', 'New York'];
for (let city = 0; city < techCities.length; city++) {

	let rank = techCities.indexOf(techCities[city]);

	console.log(rank + ', ' + techCities[city]);
}
