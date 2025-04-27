<script lang="ts" setup>
import type { Animal } from '~/types'
import useCalculateMonthlyFood  from '@/utils/useCalculateMonthlyFood';

const props = defineProps<{
  animals: Animal[]
}>()

const animalsWithAge = computed(() =>
  props.animals.slice().map((animal) => ({
    ...animal,
    age: useCalculateAgeInYears(animal.birthdate),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
)

</script>

<template>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr class="bg-blue-100 text-blue-800">
          <th class="px-6 py-3 text-left">Name</th>
          <th class="px-6 py-3 text-left">Species</th>
          <th class="px-6 py-3 text-left">Monthly Food (kg)</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(animal, animalIndex) in animalsWithAge"
          :key="animalIndex"
          class="border-b hover:bg-gray-100"
        >
          <td class="px-6 py-4">{{ animal.name }}</td>
          <td class="px-6 py-4">{{ animal.species }}</td>
          <td class="px-6 py-4">{{ (useCalculateMonthlyFood(animal)).toFixed(2) }} kg</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>