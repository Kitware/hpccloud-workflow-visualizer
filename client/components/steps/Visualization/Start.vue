<script>
import { clusterFilter, getPayload, getMetadata } from './helper';

export default {
  name: 'VisualizerStartSimulation',
  methods: {
    clusterFilter,
    getPayload,
    getMetadata,
  },
};
</script>

<template>
  <div>
    <hpc-job-scheduling
      :clusterFilter="clusterFilter"
      :getPayload="getPayload"
      :getMetadata="getMetadata"
    />
  </div>
</template>
