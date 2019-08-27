<template>
  <hpc-job-monitoring
    :project="project"
    :simulation="simulation"
    :workflow="workflow"
    :taskflowId="simulation.steps.Visualization.metadata.taskflowId"

    :actions="actions"
    :actionToLabel="actionToLabel"
    @taskflowChange="onTaskflowChange"
    @allCompleteChange="onAllCompleteChange"

    @rerun="onReRun"
    @visualize="onVisualize"
  />
</template>

<script>
const LABELS = {
  rerun: 'ReRun',
  visualize: 'Visualization',
};

export default {
  props: [
    'project', 'simulation', 'workflow'
  ],
  data() {
    return {
      allComplete: false,
      actions: [],
    };
  },
  methods: {
    actionToLabel(action) {
      return LABELS[action] || action;
    },
    onAllCompleteChange(v) {
      this.allComplete = v;
    },
    onTaskflowChange(taskflow) {
      if (!taskflow || !taskflow.jobMapById) {
        console.log('invalid taskflow');
        console.log(JSON.stringify(taskflow, null, 2));
        return;
      }

      const actions = [];
      const jobs = Object.keys(taskflow.jobMapById).map(
        (id) => taskflow.jobMapById[id]
      );

      // name is paraview and status is running -> visualize
      if (
        jobs.some(
          (job) => job.name === this.workflow.primaryJobs.Visualization && job.status === 'running'
        )
      ) {
        actions.push('visualize');
      } else if (this.allComplete) {
        actions.push('rerun');
      }

      this.actions = actions;
    },
    onReRun() {
      this.$store.dispatch('SIMULATION_UPDATE_STEP', {
        id: this.simulation._id,
        step: 'Visualization',
        content: {
          view: 'default',
        },
      });
    },
    onVisualize() {
      console.log('onVisualize');
    },
  },
};
</script>
