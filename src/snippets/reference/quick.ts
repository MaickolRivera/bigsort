import type { AlgorithmData } from "@/types";

export const QUICK: AlgorithmData = {
  complexity: {
    best: 'O(n log n)',
    worst: 'O(n²)'
  },

  info: {
    description: `A divide-and-conquer algorithm. It picks an element as a pivot and partitions the list so that smaller elements end up to its left and larger elements to its right.
  It then applies the same process recursively to each half until the entire list is sorted.`,
    
    explanation: `1. Pick an element as the pivot (here, the last one in the range)
  2. Partition the list: elements smaller than the pivot go left, larger ones go right
  3. Place the pivot in its final position (partitioning)
  4. Recursively apply the same process to the left sublist
  5. Recursively apply the same process to the right sublist`
  },

  code: {
    JAVA: `
public class QuickSort {
  public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
      int pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }

  private static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }
}`.trim(),

    PYTHON: `
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
`.trim(),

    JAVASCRIPT: `
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`.trim()
  }
};