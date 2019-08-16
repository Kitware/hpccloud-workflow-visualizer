<template>
  <div>
    <hpc-job-monitoring
      :project="project"
      :simulation="simulation"
      :workflow="workflow"
      :taskflowId="simulation.steps.Visualization.metadata.taskflowId"
    />
    <v-layout>
      <hpc-next-step-button />
      <v-spacer />
    </v-layout>
  </div>
</template>

<script>
export default { props: ['project', 'simulation', 'workflow'] };
</script>
