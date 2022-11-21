import React from 'react';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Visualizer from './components/visualizer';
import FrontPage from './components/FrontPage';
import Theory from './components/Theory';
import BubbleSort from "./components/TextFiles/BubbleSort";
import SelectionSort from "./components/TextFiles/SelecionSort";
import InsertionSort from "./components/TextFiles/InsertionSort";
import MergeSort from './components/TextFiles/MergeSort';
import QuickSort from "./components/TextFiles/QuickSort";
import Dfs from "./components/TextFiles/Bfs";
import Bfs from "./components/TextFiles/Dfs";
import './App.css';


class App extends React.Component {
	
    render() { 
        return (
            <>
            <Routes>
            <Route exact path="/" element={<FrontPage/>}/>
            <Route exact path="/sortingVisualizer" element={<Visualizer/>}/>
            <Route exact path="/traversalVisualizer" element={<Visualizer/>}/>
            <Route exact path="/theory" element={<Theory/>}/>
            <Route exact path="/bubblesort" element={<BubbleSort />} />
            <Route exact path="/selectionSort" element={<SelectionSort />} />
            <Route exact path="/insertionSort" element={<InsertionSort />} />
            <Route exact path="/mergeSort" element={<MergeSort />} />
            <Route exact path="/quickSort" element={<QuickSort />} />
            <Route exact path="/dfs" element={<Dfs />} />
            <Route exact path="/bfs" element={<Bfs />} />
            </Routes>
            </>
        );
	}
}
 
export default App;