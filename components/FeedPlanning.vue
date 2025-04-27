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
  <div class="min-h-screen bg-gray-50 p-6 font-sans space-y-6">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="bg-green-700 px-5 py-4">
        <h2 class="text-xl font-bold text-white">Plan a Feeding</h2>
      </div>
      
      <div class="p-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Animal</label>
            <select 
              v-model="selectedAnimal" 
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option :value="null" disabled>Select animal...</option>
              <option 
                v-for="animal in animals" 
                :key="animal.name" 
                :value="animal"
                class="text-gray-700"
              >
                {{ animal.name }}
              </option>
            </select>
          </div>
        
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Fruit</label>
            <select 
              v-model="selectedFruit" 
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option disabled value="">Select fruit...</option>
              <option value="Apples">Apples</option>
              <option value="Bananas">Bananas</option>
              <option value="Cherries">Cherries</option>
              <option value="Grapes">Grapes</option>
              <option value="Mangoes">Mangoes</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input 
              type="date" 
              v-model="selectedDate" 
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>
        
        <button 
          @click="addFeedingTask" 
          :disabled="!selectedAnimal || !selectedFruit || !selectedDate"
          class="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Add Feeding Task
        </button>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="bg-green-700 px-5 py-4">
        <h2 class="text-xl font-bold text-white">Upcoming Feedings</h2>
      </div>
      
      <div class="p-5">
        <div v-if="Object.keys(feedingsGroupedByDate).length" class="space-y-6">
          <div v-for="(tasks, date) in feedingsGroupedByDate" :key="date">
            <h3 class="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">
              <svg class="w-5 h-5 inline-block mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ date }}
            </h3>
            
            <ul class="space-y-3">
              <li 
                v-for="({ animal, fruit }, index) in tasks" 
                :key="index" 
                class="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100"
              >
                <div class="flex items-center space-x-3">
                  <div class="bg-green-100 p-2 rounded-full">
                    <svg class="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-medium text-gray-800">{{ animal.name }}</p>
                    <p class="text-sm text-gray-600">{{ fruit }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Quantity</p>
                  <p class="font-semibold text-green-700">
                    {{ useCalculateMonthlyFood(animal).toFixed(2) }} kg
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div v-else class="text-center py-8 text-gray-500">
          <svg class="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="mt-2">No feedings scheduled yet</p>
        </div>
      </div>
    </div>
  </div>
</template>