// submit.js

import React from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const submitPipeline = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          `Number of nodes: ${result.num_nodes}\nNumber of edges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
        );
      } else {
        alert("Error: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the pipeline.");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={submitPipeline}
        className="bg-[#5d7f9e] text-white py-2 px-4 rounded hover:bg-[#6563E4]"
      >
        Submit
      </button>
    </div>
  );
};
