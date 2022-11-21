import React from 'react'
import './textFiles.css'

const MergeSort = () => {
    return (
        <div className='text-page'>
            <h2>Merge Sort</h2>
            <div>
                <h3>Pseudo Code</h3>
                <div>
                    MERGE_SORT(arr, beg, end)  <br />

                    if beg less than end  <br/>
                    set mid = (beg + end)/2 <br />
                    MERGE_SORT(arr, beg, mid)  <br />
                    MERGE_SORT(arr, mid + 1, end)  <br />
                    MERGE (arr, beg, mid, end)  <br />
                    end of if  <br />

                    END MERGE_SORT  <br />
                </div>
            </div>
            <div>
                <h3>How does it work ?</h3>
                <div>
                    Merge sort is similar to the quick sort algorithm as it uses the divide and conquer approach to sort the elements. It is one of the most popular and efficient sorting algorithm. It divides the given list into two equal halves, calls itself for the two halves and then merges the two
                    sorted halves. We have to define the merge() function to perform the merging.<br />

                    The sub-lists are divided again and again into halves until the list cannot be divided further. Then we combine the pair of one element lists into two-element lists, sorting them in the process. The sorted two-element pairs is merged into the four-element lists, and so on until we get the sorted list.</div>
            </div>
            <div>
                <h3>Time Complexity</h3>
                <div>
                    <b>Best Case Complexity -</b>  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of merge sort is O(n*logn)<br />
                    <b>Average Case Complexity -</b>It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of merge sort is O(n*logn).<br />
                    <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of merge sort is O(n*logn).<br />
                </div>
            </div>
            <div>
                <h3>Space Complexity</h3>
                <div>
                The space complexity of merge sort is O(n). It is because, in merge sort, an extra variable is required for swapping.</div>
            </div>

        </div>

    )
}

export default MergeSort;