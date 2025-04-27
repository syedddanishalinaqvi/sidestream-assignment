<script lang="ts" setup>
import { computed } from 'vue'
import type { Animal } from '~/types'
import useCalculateAgeInYears from '@/utils/useCalculateAgeInYears'

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
  <div class="min-h-screen bg-gray-50 p-6 font-sans">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(animal, animalIndex) in animalsWithAge"
        :key="animalIndex"
        class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden"
      >
        <div class="bg-green-700 px-4 py-3">
          <h2 class="text-xl font-bold text-white">{{ animal.name }}</h2>
        </div>

        <div class="p-5">
          <div class="space-y-2 text-gray-700">
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span><span class="font-medium">Age:</span> {{ animal.age }} years</span>
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
              <span><span class="font-medium">Species:</span> {{ animal.species }}</span>
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span><span class="font-medium">Gender:</span> {{ animal.gender }}</span>
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
              </svg>
              <span><span class="font-medium">Weight:</span> {{ animal.weight }} kg</span>
            </p>
            <p class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
              </svg>
              <span><span class="font-medium">Height:</span> {{ animal.height }} cm</span>
            </p>
            <p class="flex items-center pt-2 border-t border-gray-100">
              <svg class="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span><span class="font-medium">Favorite Fruit:</span> {{ animal.favouriteFruit }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>