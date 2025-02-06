// Convert Kilometers to Miles
const kmTOMiles = (km) => {
  const factor = 0.621371;
  return km * factor;
};
const km = prompt("Enter the distance in kilometers: ");
const miles = kmTOMiles(km);
console.log(`${km} km is equal to ${miles} miles.`);
