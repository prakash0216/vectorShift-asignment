# main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Or specify the methods you want to allow
    allow_headers=["*"],  # Or specify the headers you want to allow
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    try:
        G = nx.DiGraph()

        # Add nodes
        for node in pipeline.nodes:
            G.add_node(node['id'], **node.get('data', {}))
        
        # Add edges
        for edge in pipeline.edges:
            G.add_edge(edge['source'], edge['target'])

        num_nodes = len(G.nodes)
        num_edges = len(G.edges)
        is_dag = nx.is_directed_acyclic_graph(G)

        return {
            'num_nodes': num_nodes,
            'num_edges': num_edges,
            'is_dag': is_dag
        }
    except Exception as e:
        print(f"Error: {e}")  # Log the error
        raise HTTPException(status_code=500, detail=str(e))
