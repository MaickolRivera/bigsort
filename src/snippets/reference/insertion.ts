import type { AlgorithmData } from "@/types";

export const INSERTION: AlgorithmData = {
  complexity: {
    best: 'O(n)',
    worst: 'O(n²)'
  },

  info: {
    description: `Builds the sorted list one element at a time. It takes each element and inserts it into its correct position within the already-sorted part of the list.
  It's efficient for small or nearly sorted lists, similar to how a person sorts playing cards by hand.`,
    
    explanation: `1. Take the next unsorted element
  2. Compare it with the elements already sorted to its left
  3. Shift larger elements one position to the right
  4. Insert the element into its correct position
  5. Repeat until the entire list is sorted`
  },

  code: {
    JAVA: `
public class InsertionSort {
  public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
}
`.trim(),

    PYTHON: `
def insertion_sort(arr):
    n = len(arr)
    for i in range(1, n):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
`.trim(),

    JAVASCRIPT: `
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}
`.trim()
  }
};