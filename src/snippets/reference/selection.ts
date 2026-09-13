import type { AlgorithmData } from "@/types";

export const SELECTION: AlgorithmData = {
  complexity: {
    best: 'O(n²)',
    worst: 'O(n²)'
  },

  info: {
    description: `Splits the list into a sorted and an unsorted part. On each pass, it finds the smallest element in the unsorted part and moves it to the end of the sorted part.
  It's easy to understand, though not the most efficient choice for large lists.`,
    
    explanation: `1. Find the smallest element in the unsorted part
  2. Swap it with the first element of that part
  3. Treat that position as sorted
  4. Repeat with the rest of the list
  5. Continue until only one element remains to check`
  },

  code: {
    JAVA: `
      public class SelectionSort {
        public static void selectionSort(int[] arr) {
          int n = arr.length;
          for (int i = 0; i < n - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < n; j++) {
              if (arr[j] < arr[minIdx]) {
                minIdx = j;
              }
            }
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
          }
        }
      }
    `.trim(),

    PYTHON: `
      def selection_sort(arr):
          n = len(arr)
          for i in range(n - 1):
              min_idx = i
              for j in range(i + 1, n):
                  if arr[j] < arr[min_idx]:
                      min_idx = j
              arr[min_idx], arr[i] = arr[i], arr[min_idx]
    `.trim(),

    JAVASCRIPT: `
      function selectionSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          let minIdx = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
              minIdx = j;
            }
          }
          [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
        }
      }
    `.trim()
  }
};