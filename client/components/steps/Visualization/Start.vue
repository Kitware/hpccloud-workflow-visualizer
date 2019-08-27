<script>
import { clusterFilter, getPayload } from './helper';

export default {
  name: 'VisualizerStartSimulation',
  methods: {
    clusterFilter,
    getPayload,
  },
};
</script>

<template>
  <div>
    <hpc-job-scheduling
      :clusterFilter="clusterFilter"
      :getPayload="getPayload"
    />
  </div>
</template>
