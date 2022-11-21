import React from 'react'
import './textFiles.css'

const BubbleSort = () => {
    return (
        <div className='text-page'>
            <h2>Bubble Sort</h2>
            <div>
                <h3>Pseudo Code</h3>
                <div>
                    begin BubbleSort(arr)<br/>
                    for all array elements<br/>
                    if arr[i] greater than arr[i+1]  <br/>
                    swap(arr[i], arr[i+1]) <br/>
                    end if  <br/>
                    end for <br/>
                     return arr<br/>
                    end BubbleSort<br/>
                </div>
            </div>
            <div>
                <h3>How does it work ?</h3>
                <div>
                    A bubble sort is an internal exchange sort. It is considered one of the simplest methods to sort an array of objects.  It is also known as a sinking sort (because the smallest items "sink" to the bottom of the array).
                    <br />
                    Instead of searching an array as a whole, the bubble sort works by comparing adjacent pairs of objects in the array.  If the objects are not in the correct ordered, they are swapped so that the largest of the two moves up.  This process continues until the largest of the objects, eventually "bubbles" up to the highest position in the array.  After this occurs, the search for the  next largest object begins.  The swapping continues until the whole array is in the correct order.
                </div>
            </div>
            <div>
                <h3>Time Complexity</h3>
                <div>
                    <b>Best Case Complexity -</b> It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of bubble sort is O(n).<br />
                    <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of bubble sort is O(n2).<br />
                    <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of bubble sort is O(n2).<br />
                </div>
            </div>
            <div>
                <h3>Space Complexity</h3>
                <div>
                    The space complexity of bubble sort is O(1). It is because, in bubble sort, an extra variable is required for swapping.<br />
                    The space complexity of optimized bubble sort is O(2). It is because two extra variables are required in optimized bubble sort.
                </div>
            </div>

        </div>

    )
}

export default BubbleSort;