import React from 'react'
import "./search.css"

const Bfs = () => {
  return (
    <div>
        <h1 class='udid_h'>Breadth First Search or BFS :</h1>
        <p class='udid_h'>Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that
            satisfies a given
            property.<br/><br/>
            It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes
            at the next depth level.
            <br/> <br/>
            Extra memory, usually a queue, is needed to keep track of the child nodes that were
            encountered but not yet explored.
        </p>



        <br/><br/>

        <h3 class='udid_h'>Time complexity : O(V + E)</h3>
        <h3 class='udid_h'>Auxiliary Space : O(V)</h3>

        <p class="udid_h">Where V is the number of vertices and E is the number of edges in the graph</p>
        <br/><br/>

        <h2 class='udid_h'>Pseudo Code :</h2>
        <div class="box1">

            create a queue Q
            <br/><br/>
            mark v as visited and put v into Q<br/><br/>
            while Q is non-empty<br/><br/>
            remove the head u of Q<br/><br/>
            mark and enqueue all (unvisited) neighbours of u<br/><br/><br/>

        </div>


    </div>
  )
}

export default Bfs;