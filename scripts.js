/**
 * An array containing different province names.
 * @type {string[]}
 */
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

/**
 * An array containing different individual names.
 * @type {string[]}
 */
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Uses forEach to log each name to the console.
names.forEach(name => {
  console.log(name);
});

// Uses forEach to log each name with a matching province.
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Uses map to convert all province names to uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Creats a new array using map that contains the number of characters in each name.
const charactersInNames = names.map(name => name.length);
console.log(charactersInNames);

// Uses  sort to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Uses filter to remove all provinces that have the word "Cape" in them.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length); // Number of provinces left

// Creates a boolean array using map and some to determine whether a name contains an 'S' character.
const hasS = names.map(name => name.includes('S'));
console.log(hasS);

/**
 * @type {Object.<string, string>} - Final result object indicating the province of each individual.
 */
const result = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(result);
