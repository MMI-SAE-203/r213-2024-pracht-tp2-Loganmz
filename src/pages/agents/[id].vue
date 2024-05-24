<script setup lang="ts">
  import AgentCard from '@/components/AgentCard.vue'
import { pb } from '@/backend'
  import { useRoute } from 'vue-router/auto'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const unAgents = await pb.collection('agents').getOne(route.params.id)
</script>
<template>
  <div>
    <h1 class="text-xl">un agent</h1>
    <AgentCard v-bind="unAgents" />
  </div>
</template>