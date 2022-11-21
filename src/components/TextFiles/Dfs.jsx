import React from 'react'
import "./search.css"

const Dfs = () => {
  return (
    <>
    <div>
        <h1 class='udid_h'>Depth First Search or DFS :</h1>
        <p class='udid_h'>Depth-first search is an algorithm for traversing or searching tree or graph data
            structures. <br/><br/>The algorithm starts at the root node and explores as far as possible along each branch
            before backtracking.
            <br/> <br/>
            So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent
            <br/>unmarked node and continue this loop until there is no unmarked adjacent node.
            <br/><br/>Then backtrack and check for
            other unmarked nodes and traverse them. Finally, print the nodes in the path.
        </p>


        <br/><br/>

        <h3 class='udid_h'>Time complexity : O(V + E)</h3>
        <h3 class='udid_h'>Auxiliary Space : O(V)</h3>

        <p class="udid_h">Where V is the number of vertices and E is the number of edges in the graph</p>
        <br/><br/>

        <h2 class='udid_h'>Pseudo Code :</h2>
        <div class="box">
            DFS(G, u)<br/><br/>
            u.visited = true<br/><br/>
            for each v ∈ G.Adj[u]<br/><br/>
            if v.visited == false<br/><br/>
            DFS(G,v)<br/><br/><br/>

            init() <br/><br/>
            <br/><br/>
               For each u ∈ G<br/><br/>
            u.visited = false<br/><br/>
            For each u ∈ G<br/><br/>
            DFS(G, u)<br/><br/>
            
        </div>


    </div>
    </>
    
  )
}

export default Dfs;