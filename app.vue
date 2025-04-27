<script setup lang="ts">
import TheAnimalTable from './components/TheAnimalTable.vue';
import useAnimals  from './composables/useAnimals';
import type {TabType} from '~/types'
// import { onMounted } from 'vue';
const { animals } = useAnimals();

const activeTab = ref<TabType>('animals')
const tabs:TabType[]=['animals', 'monthlyFood', 'feedingPlanner'];

// We don't need this but this function will work if you need an alert
// onMounted(()=> {
//   alert('get wrecked cologne zoo!');
// }) 

</script>

<template>
  <div class="my-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-green-800 mb-2">Cologne Zoo Management</h1>
      <div class="text-lg text-gray-600 space-y-2 max-w-3xl mx-auto">
        <p>
          Wildlife care dashboard for zookeepers to manage animal health and feeding schedules.
        </p>
        <p class="text-sm text-gray-500">
          Support contact: 
          <a href="mailto:admin@zoo-cologne.de" class="text-green-600 hover:text-green-700 font-medium">
            admin@zoo-cologne.de
          </a>
          <span class="block mt-1 text-yellow-600 text-xs">
            ⚠️ Security alert: Increased cyber-attacks detected from neighboring regions
          </span>
        </p>
      </div>
    </div>
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div class="border-b border-gray-200">
        <nav class="flex flex-col sm:flex-row justify-center -mb-px">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            class="px-6 py-4 text-sm font-medium whitespace-nowrap flex items-center justify-center transition-colors"
            :class="activeTab === tab 
              ? 'text-green-700 border-green-700 bg-green-50'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-transparent'"
          >
            <svg v-if="tab === 'animals'" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-if="tab === 'monthlyFood'" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-if="tab === 'feedingPlanner'" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            {{ tab === 'animals' ? 'Animal Details' : tab === 'monthlyFood' ? 'Food Requirements' : 'Feeding Planner' }}
          </button>
        </nav>
      </div>
      <div class="p-6 bg-gray-50">
        <template v-if="activeTab === 'animals'">
          <TheAnimalTable :animals="animals" />
        </template>
        <template v-else-if="activeTab === 'monthlyFood'">
          <TheMonthlyFoodPage :animals="animals" />
        </template>
        <template v-else-if="activeTab === 'feedingPlanner'">
          <FeedPlanning :animals="animals" />
        </template>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
</style>