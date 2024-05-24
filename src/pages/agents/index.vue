<script setup lang="ts">
import { pb } from '@/backend';
import AgentCard from '@/components/AgentCard.vue';
const agentsListe = await pb.collection('agents').getFullList()
</script>

<template>
  <ul>
  <li v-for="unAgents of agentsListe" :v-key="unAgents.id">
    <RouterLink
      :to="{
        name: '/agents/[id]',
        params: {
          id: unAgents.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ unAgents.nom }}
    </RouterLink>
  </li>
</ul>
</template>
