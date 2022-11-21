import React from 'react'
import './textFiles.css'

const SelecionSort = () => {
    return (
        <div className='text-page'>
            <h2>Selection Sort</h2>
            <div>
                <h3>Pseudo Code</h3>
                <div>
                    SELECTION SORT(arr, n)  <br />

                    Step 1: Repeat Steps 2 and 3 for i = 0 to n-1  <br />
                    Step 2: CALL SMALLEST(arr, i, n, pos)  <br />
                    Step 3: SWAP arr[i] with arr[pos]  <br />
                    [END OF LOOP]  <br />
                    Step 4: EXIT  <br />

                    SMALLEST (arr, i, n, pos)  <br />
                    Step 1: [INITIALIZE] SET SMALL = arr[i]  <br />
                    Step 2: [INITIALIZE] SET pos = i  <br />
                    Step 3: Repeat for j = i+1 to n  <br />
                    if (SMALL greater than arr[j])  <br />
                    SET SMALL = arr[j]  <br />
                    SET pos = j  <br />
                    [END OF if]  <br />
                    [END OF LOOP]  <br />
                    Step 4: RETURN pos <br />
                </div>
            </div>
            <div>
                <h3>How does it work ?</h3>
                <div>
                    In selection sort, the smallest value among the unsorted elements of the array is selected in every pass and inserted to its appropriate position into the array. It is also the simplest algorithm. It is an in-place comparison sorting algorithm. In this algorithm, the array is divided into two parts,
                    first is sorted part, and another one is the unsorted part. Initially, the sorted part of the array is empty, and unsorted part is the given array. Sorted part is placed at the left, while the unsorted part is placed at the right.<br />

                    In selection sort, the first smallest element is selected from the unsorted array and placed at the first position. After that second smallest element is selected and placed in the second position. The process continues until the array is entirely sorted.
                </div>
            </div>
            <div>
                <h3>Time Complexity</h3>
                <div>
                    <b>Best Case Complexity -</b> It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of selection sort is O(n2).<br />
                    <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of selection sort is O(n2).<br />
                    <b>Worst Case Complexity -</b>  It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of selection sort is O(n2).<br />
                </div>
            </div>
            <div>
                <h3>Space Complexity</h3>
                <div>
                    The space complexity of selection sort is O(1). It is because, in selection sort, an extra variable is required for swapping.
                </div>
            </div>

        </div>

    )
}

export default SelecionSort;