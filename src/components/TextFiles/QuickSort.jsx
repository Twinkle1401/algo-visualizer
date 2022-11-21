import React from 'react'
import './textFiles.css'

const QuickSort = () => {
    return (
        <div className='text-page'>
            <h2>Quick Sort</h2>
            <div>
                <h3>Pseudo Code</h3>
                <div>
                    QUICKSORT (array A, start, end)  <br />

                    1 if (start less than end)     <br />
                    2 p = partition(A, start, end)  <br />
                    3 QUICKSORT (A, start, p - 1)   <br />
                    4 QUICKSORT (A, p + 1, end)    <br />

                </div>
                <h4>Partition Algorithm</h4>
                <div>
                <p>The partition algorithm rearranges the sub-arrays in a place.</p>
                    PARTITION (array A, start, end)   <br />
                    1 pivot ? A[end]     <br />
                    2 i ? start-1     <br />
                    3 for j ? start to end -1   <br />
                    4 do if (A[j] less than pivot)    <br />
                    5 then i ? i + 1     <br />
                    6 swap A[i] with A[j]   <br />
                    7 swap A[i+1] with A[end]   <br />
                    8 return i+1   <br />
                </div>
            </div>
            <div>
                <h3>How does it work ?</h3>
                <div>

                    Sorting is a way of arranging items in a systematic manner. Quicksort is the widely used sorting algorithm that makes n log n comparisons in average case for sorting an array of n elements. It is a faster and highly efficient sorting algorithm. This algorithm follows the divide and conquer approach.
                    Divide and conquer is a technique of breaking down the algorithms into subproblems, then solving the subproblems, and combining the results back together to solve the original problem.<br />

                    Divide: In Divide, first pick a pivot element. After that, partition or rearrange the array into two sub-arrays such that each element in the left sub-array is less than or equal to the pivot element and each element in the right sub-array is larger than the pivot element.<br />

                    Conquer: Recursively, sort two subarrays with Quicksort.<br />
                    Combine: Combine the already sorted array.<br />

                    Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.<br />

                    After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.<br />
                </div>
                <h4>Choosing the Pivot Point</h4>
                <div>
                    Picking a good pivot is necessary for the fast implementation of quicksort. However, it is typical to determine a good pivot. Some of the ways of choosing a pivot are as follows -<br />

                    Pivot can be random, i.e. select the random pivot from the given array.<br />
                    Pivot can either be the rightmost element of the leftmost element of the given array.<br />
                    Select median as the pivot element.<br />
                </div>
            </div>

            <div>
                <h3>Time Complexity</h3>
                <div>
                    <b>Best Case Complexity -</b>In Quicksort, the best-case occurs when the pivot element is the middle element or near to the middle element. The best-case time complexity of quicksort is O(n*logn).<br />
                    <b>Average Case Complexity -</b>It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of quicksort is O(n*logn).<br />
                    <b>Worst Case Complexity -</b> In quick sort, worst case occurs when the pivot element is either greatest or smallest element. Suppose, if the pivot element is always the last element of the array, the worst case would occur when the given array is sorted already in ascending or descending order. The worst-case time complexity of quicksort is O(n2).<br />
                </div>
            </div>
            <div>
                <h3>Space Complexity</h3>
                <div>
                The space complexity of quicksort is O(n*logn).
                </div>
            </div>

        </div>

    )
}

export default QuickSort;
