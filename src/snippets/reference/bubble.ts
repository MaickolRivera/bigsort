import type { AlgorithmData } from "@/types";

export const BUBBLE: AlgorithmData = {
  complexity: {
    best: 'O(n)',
    worst: 'O(n²)'
  },

  code: {
    JAVA: `
public class BubbleSort {
  public static void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped = true;
    while (swapped) {
      swapped = false;
      for (int i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
          int temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          swapped = true;
        }
      }
      n--;
    }
  }
}`.trim(),

    PYTHON: `
def bubble_sort(arr):
  n = len(arr)
  swapped = True
  while swapped:
      swapped = False
      for i in range(1, n):
          if arr[i - 1] > arr[i]:
              arr[i], arr[i - 1] = arr[i - 1], arr[i]
              swapped = True
      n -= 1`.trim(),

    JAVASCRIPT: `
function bubbleSort(arr) {
  let n = arr.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    n--;
  }
}`.trim()
  }
};