import React from 'react'
import {Link} from 'react-router-dom'
import "./Theory.css"

const Theory = () => {
  return (
    <>
    <div className='theory-page'>
    <button className='btn'><Link to="/selectionSort">Selectoin Sort</Link></button>
    <button className='btn'><Link to="/bubblesort">Bubble Sort</Link></button>
    <button className='btn'><Link to="/insertionSort">Insertion Sort</Link></button>
    <button className='btn'><Link to="/mergeSort">Merge Sort</Link></button>
    <button className='btn'><Link to="/quickSort">Quick Sort</Link></button>
    <button className='btn'><Link to="/dfs">Depth First Search</Link></button>
    <button className='btn'><Link to="/bfs">Breadth First Search</Link></button>
    </div>
    </>
  )
}

export default Theory;