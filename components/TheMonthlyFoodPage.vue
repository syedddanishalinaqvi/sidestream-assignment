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
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div class="bg-green-700 px-5 py-4">
      <h2 class="text-xl font-bold text-white">Monthly Food Requirements</h2>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                Name
              </div>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Species
              </div>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Monthly Food (kg)
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr 
            v-for="(animal, animalIndex) in animalsWithAge"
            :key="animalIndex"
            class="hover:bg-gray-50 transition-colors"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-green-800 font-medium">{{ animal.name.charAt(0) }}</span>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ animal.name }}</div>
                  <div class="text-sm text-gray-500">Age: {{ animal.age }} years</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ animal.species }}</div>
              <div class="text-sm text-gray-500">{{ animal.gender }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="w-24 bg-green-50 rounded-full h-2.5 mr-3">
                  <div 
                    class="bg-green-600 h-2.5 rounded-full" 
                    :style="{ width: `${Math.min(useCalculateMonthlyFood(animal) * 10, 100)}%` }"
                  ></div>
                </div>
                <span class="text-sm font-semibold text-green-700">
                  {{ useCalculateMonthlyFood(animal).toFixed(2) }} kg
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-gray-50 px-5 py-3 border-t border-gray-200">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-600">
          Showing {{ animals.length }} animals
        </p>
        <p class="text-sm font-medium text-green-700">
          Total monthly food: {{ animals.reduce((sum, animal) => sum + useCalculateMonthlyFood(animal), 0).toFixed(2) }} kg
        </p>
      </div>
    </div>
  </div>
</template>