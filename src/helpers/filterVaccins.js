import { vaccins } from '../data/data';

// Filter the approved vaccines:
export const approvedVaccins = vaccins.filter((vaccin) => vaccin.approuve === 'oui');

// Function to sort an array of vaccins by 'prix' into a new array in descending order
function descVaccins() {
  const vaccinsCopy = vaccins.slice();
  const sortvaccins = vaccinsCopy.sort((a, b) => b.prix - a.prix);
  return sortvaccins;
}
export const descendingVaccins = descVaccins();
// Function to sort an array of vaccins by 'prix' into a new array in ascending order
function ascVaccins() {
  const vaccinsCopy = vaccins.slice();
  const sortvaccins = vaccinsCopy.sort((a, b) => a.prix - b.prix);
  return sortvaccins;
}
export const ascendingVaccins = ascVaccins();
