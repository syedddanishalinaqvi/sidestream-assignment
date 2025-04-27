import type { Animal } from '~/types'
import useCalculateAgeInYears  from './useCalculateAgeInYears';

export default function useCalculateMonthlyFood(animal: Animal) {
  if (animal.species === 'fish') {
    return 0;
  }

  let dailyFood = (animal.height + animal.weight) / 250;

  const age = useCalculateAgeInYears(animal.birthdate);

  if (age > 20) {
    dailyFood /= 2;
  } else if (age < 2) {
    dailyFood *= 2;
  }

  if (animal.favouriteFruit === 'cherry') {
    dailyFood += 28;
  }

  if (animal.gender === 'male') {
    dailyFood *= 1.2;
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const daysInNextMonth = new Date(year, month, 0).getDate(); 

  return dailyFood * daysInNextMonth;
}