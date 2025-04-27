<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { Animal } from '~/types'
import useCalculateAgeInYears from '@/utils/useCalculateAgeInYears'

// Import your new component
import TheMonthlyFoodPage from '@/components/TheMonthlyFoodPage.vue'

const props = defineProps<{
  animals: Animal[]
}>()

const activeTab = ref<'animals' | 'monthlyFood'>('animals')

const animalsWithAge = computed(() =>
  props.animals.slice().map((animal) => ({
    ...animal,
    age: useCalculateAgeInYears(animal.birthdate),
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
)
</script>

<template>
  

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(animal, animalIndex) in animalsWithAge"
        :key="animalIndex"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <h2 class="text-2xl font-bold mb-2 text-gray-800">{{ animal.name }}</h2>
        <p class="text-gray-600 mb-1">Species: {{ animal.species }}</p>
        <p class="text-gray-600 mb-1">Gender: {{ animal.gender }}</p>
        <p class="text-gray-600 mb-1">Age: {{ animal.age }} years</p>
        <p class="text-gray-600 mb-1">Weight: {{ animal.weight }} kg</p>
        <p class="text-gray-600 mb-1">Height: {{ animal.height }} cm</p>
        <p class="text-gray-600">Favourite Fruit: {{ animal.favouriteFruit }}</p>
      </div>
    </div>

</template>
