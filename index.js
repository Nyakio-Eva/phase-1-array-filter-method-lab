
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
//function that returns matching list of drivers and takes 2 arguments names and a string
const findMatching = (drivers, name) => {
    //use .toLowercase() on both parameters for a case sensitive comparison
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

console.log(findMatching(drivers,'Bobby')); // Returns ['Bobby', 'Bobby']
console.log(findMatching(drivers,'bobby')); // Returns ['Bobby', 'Bobby']
console.log(findMatching(drivers,'Sammy')); // Returns ['Sammy']
console.log(findMatching(drivers,'John')); // Returns []

const fuzzyMatch = (drivers,name) => {
    return drivers.filter(driver => driver.toLowerCase().startsWith(name.toLowerCase()));
}
console.log(fuzzyMatch(drivers, 'Sa'));
//the .toLowerCase ensures that a case-sensitive check for whether each driver's name starts with the provided letters. 
//the .startWith method determines whether a string begins with a specified set of characters.

drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
const matchName = (drivers, name) => {
    
    return drivers.filter(driver => driver.name === name);
}
console.log(matchName(drivers,'Bobby')); //returns [{ name: 'Bobby', hometown: 'Pittsburgh' },{ name: 'Bobby', hometown: 'Tampa Bay' }]