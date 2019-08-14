<script>
import { clusterFilter, getPayload } from './helper';

export default {
  name: 'VisualizerViewSimulation',
  methods: {
    clusterFilter,
    getPayload,
  },
};
</script>

<template>
  <div>
    (view)
    <hpc-job-scheduling
      :clusterFilter="clusterFilter"
      :getPayload="getPayload"
    />
    <v-layout>
      <hpc-next-step-button />
      <v-spacer />
    </v-layout>
  </div>
</template>
