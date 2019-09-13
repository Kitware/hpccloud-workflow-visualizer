import stepIntroduction from './components/steps/Introduction';
import stepStartViz from './components/steps/Visualization/Start';
import stepVisualizer from './components/steps/Visualization/View';

const visualizer = {
  name: 'Visualizer',
  icon: 'mdi-cube-outline',
  components: {
    // NewProject: rootNewProject,
    // EditProject: rootEditProject,
    // NewSimulation: rootNewSimulation,
    // EditSimulation: rootEditSimulation,
    // ViewSimulation: rootViewSimulation,
  },
  config: {
    cluster: {
      'config.paraview.installDir': {
        type: 'text',
        label: 'ParaView Directory',
        description: 'Path to the home directory of ParaView.',
      },
    },
  },
  steps: {
    _order: ['Introduction', 'Visualization'],
    _initial_state: {
      Introduction: {
        type: 'information',
        metadata: {
          alwaysAvailable: true,
        },
      },
      Visualization: {
        type: 'output',
        metadata: {
          disabled: false,
        },
      },
    },
    Introduction: {
      default: stepIntroduction,
    },
    Visualization: {
      default: stepStartViz,
      run: stepVisualizer,
    },
  },
  taskFlows: {
    Visualization: 'hpccloud.taskflow.paraview.pv_lite.ParaViewLiteTaskFlow',
  },
  primaryJobs: {
    Visualization: 'paraview',
  },
  labels: {
    Introduction: {
      default: 'Introduction',
    },
    Visualization: {
      default: 'Visualization',
      run: 'Visualization (running)',
    },
  },
};

if (window.HPCWorkflow) {
  window.HPCWorkflow.register(visualizer);
}
