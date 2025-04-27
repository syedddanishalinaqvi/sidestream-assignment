<script setup lang="ts">
import TheAnimalTable from './components/TheAnimalTable.vue';
// import { onMounted } from 'vue';
const { animals } = useAnimals();

const activeTab = ref<'animals' | 'monthlyFood' | 'feedingPlanner'>('animals')

// We don't need this but this function will work if you need an alert
// onMounted(()=> {
//   alert('get wrecked cologne zoo!');
// }) 

</script>

<template>
  <div class="my-10 container mx-auto">
    <h1 class="text-4xl">Cologne Zoo</h1>
    <div class="my-2">
      <p>
        This is the overview board of the Cologne Zoo. It can be used by
        zookeepers to get an overview of the animals and their relevant health
        data.
      </p>
      <p>
        Please contact the zoo admin at "admin [at] zoo-cologne [dot] de" for
        support with the dashboard. Cyber-Attacks from the Duisburg Zoo have
        become more frequent on the past, so be on the lookout.
      </p>
    </div>
    <div class="mt-6 py-4 border-t border-gray-300">
      <h2 class="text-2xl">Our (lovely) Animals:</h2>
    </div>
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="flex justify-center mb-8">
        <button class="px-6 py-3 text-lg font-semibold border-b-2"
          :class="activeTab === 'animals' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="activeTab = 'animals'">
          Animal Details
        </button>
        <button class="px-6 py-3 text-lg font-semibold border-b-2"
          :class="activeTab === 'monthlyFood' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="activeTab = 'monthlyFood'">
          Monthly Food Requirement
        </button>
        <button class="px-6 py-3 text-lg font-semibold border-b-2"
          :class="activeTab === 'feedingPlanner' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="activeTab = 'feedingPlanner'">
          Feeding Planning
        </button>
      </div>

  <template v-if="activeTab === 'animals'">
    <TheAnimalTable v-if="activeTab === 'animals'" :animals="animals" />
  </template>
  <template v-else-if="activeTab === 'monthlyFood'">
    <TheMonthlyFoodPage :animals="animals" />
  </template>
  <template v-else-if="activeTab === 'feedingPlanner'">
    <FeedPlanning :animals="animals" />
  </template>
</div>
</div>
</template>
