<script lang="ts" setup>
import { ref, computed } from 'vue'
import useCalculateMonthlyFood from '@/utils/useCalculateMonthlyFood'
import type { Animal } from '~/types'

const props = defineProps<{
  animals: Animal[]
}>()

const feedings = ref<{ animal: Animal; fruit: string; date: string }[]>([])

const selectedAnimal = ref<Animal | null>(null)
const selectedFruit = ref('')
const selectedDate = ref('')

// Handle feeding task
const addFeedingTask = () => {
  if (selectedAnimal.value && selectedFruit.value && selectedDate.value) {
    feedings.value.push({
      animal: selectedAnimal.value,
      fruit: selectedFruit.value,
      date: selectedDate.value,
    })
    selectedAnimal.value = null
    selectedFruit.value = ''
    selectedDate.value = ''
  }
}

// Group feedings by date
const feedingsGroupedByDate = computed(() => {
  const grouped: Record<string, { animal: Animal; fruit: string }[]> = {}
  feedings.value.forEach(task => {
    if (!grouped[task.date]) {
      grouped[task.date] = []
    }
    grouped[task.date].push({ animal: task.animal, fruit: task.fruit })
  })
  return grouped
})
</script>

<template>
  <div class="p-6 space-y-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Plan a Feeding</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-gray-700 mb-2">Select Animal</label>
          <select v-model="selectedAnimal" class="w-full border rounded p-2">
            <option :value="null" disabled>Select...</option>
            <option v-for="animal in animals" :key="animal.name" :value="animal">
              {{ animal.name }}
            </option>
          </select>
        </div>
        <div>
          <label class="block text-gray-700 mb-2">Select Fruit</label>
          <select v-model="selectedFruit" class="w-full border rounded p-2">
            <option disabled value="">Select...</option>
            <option value="Apples">Apples</option>
            <option value="Bananas">Bananas</option>
            <option value="Cherries">Cherries</option>
            <option value="Grapes">Grapes</option>
            <option value="Mangoes">Mangoes</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 mb-2">Select Date</label>
          <input type="date" v-model="selectedDate" class="w-full border rounded p-2" />
        </div>
      </div>

      <div class="mt-6">
        <button @click="addFeedingTask" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded">
          Add Feeding
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-800">Upcoming Feedings</h2>

      <div v-if="Object.keys(feedingsGroupedByDate).length">
        <div v-for="(tasks, date) in feedingsGroupedByDate" :key="date" class="mb-8">
          <h3 class="text-lg font-bold text-gray-700 mb-2">{{ date }}</h3>
          <ul class="space-y-2">
            <li v-for="({ animal, fruit }, index) in tasks" :key="index" class="flex items-center justify-between bg-gray-100 p-4 rounded">
              <div>
                <p class="text-gray-800 font-medium">{{ animal.name }}</p>
                <p class="text-gray-600 text-sm">{{ fruit }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray-800 font-semibold">{{ useCalculateMonthlyFood(animal).toFixed(2) }} kg</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="text-gray-500">No feedings planned yet.</div>
    </div>

  </div>
</template>