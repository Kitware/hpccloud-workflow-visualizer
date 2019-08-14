export function clusterFilter(cluster) {
  return (
    'config' in cluster &&
    'paraview' in cluster.config &&
    'installDir' in cluster.config.paraview &&
    cluster.config.paraview.installDir
  );
}

// ----------------------------------------------------------------------------

export function getPayload({ simulation }) {
  return {
    sessionKey: simulation._id, // for pvw, we use this later for connecting,
    input: {
      file: {
        id: simulation.metadata.inputFolder.files.dataset,
      },
    },
    output: {
      folder: {
        id: simulation.metadata.outputFolder._id,
      },
    },
  };
}
