import React from 'react'
import './textFiles.css'

const InsertionSort = () => {
    return (
        <div className='text-page'>
            <h2>Insertion Sort</h2>
            <div>
                <h3>Pseudo Code</h3>
                <div>
                    Step 1 - If the element is the first element, assume that it is already sorted. Return 1.<br />

                    Step2 - Pick the next element, and store it separately in a key.<br />

                    Step3 - Now, compare the key with all elements in the sorted array.<br />

                    Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.<br />

                    Step 5 - Insert the value.<br />

                    Step 6 - Repeat until the array is sorted.<br />
                </div>
            </div>
            <div>
                <h3>How does it work ?</h3>
                <div>
                    Insertion sort works similar to the sorting of playing cards in hands. It is assumed that the first card is already sorted in the card game, and then we select an unsorted card. If the selected unsorted card is greater than the first card, it will be placed at the right side; otherwise, it will be placed at the left side. Similarly, all unsorted cards are taken and put in their exact place.
                    <br />
                    The same approach is applied in insertion sort. The idea behind the insertion sort is that first take one element, iterate it through the sorted array. Although it is simple to use, it is not appropriate for large data sets.
                </div>
            </div>
            <div>
                <h3>Time Complexity</h3>
                <div>
                    <b>Best Case Complexity -</b>  It occurs when there is no sorting required, i.e. the array is already sorted. The best-case time complexity of insertion sort is O(n).<br />
                    <b>Average Case Complexity -</b> It occurs when the array elements are in jumbled order that is not properly ascending and not properly descending. The average case time complexity of insertion sort is O(n2).<br />
                    <b>Worst Case Complexity -</b> It occurs when the array elements are required to be sorted in reverse order. That means suppose you have to sort the array elements in ascending order, but its elements are in descending order. The worst-case time complexity of insertion sort is O(n2).<br />
                </div>
            </div>
            <div>
                <h3>Space Complexity</h3>
                <div>
                    The space complexity of insertion sort is O(1). It is because, in insertion sort, an extra variable is required for swapping.</div>
            </div>

        </div>

    )
}

export default InsertionSort;