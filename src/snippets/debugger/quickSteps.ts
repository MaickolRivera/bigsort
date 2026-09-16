import type { OrderKey, SortStep } from "../../types";

export function getQuickSortSteps(array: number[], order: OrderKey): SortStep[] {
  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number) => (isAscending ? a < b : a > b);

  const orderKey = isAscending ? "left" : "right";

  const steps: SortStep[] = [];
  const arr = [...array];

  function quickSort(start: number, end: number) {
    if (start >= end) return;

    steps.push({
      type: "message",
      indices: Array.from({ length: end - start + 1 }, (_, i) => start + i),
      message: {
        titleKey: "algorithms.quick.subarray.title",
        descriptionKey: "algorithms.quick.subarray.description",
        params: { pivot: arr[end], start, end },
      },
    });

    const pivotIndex = partition(start, end);
    quickSort(start, pivotIndex - 1);
    quickSort(pivotIndex + 1, end);
  }

  function partition(start: number, end: number): number {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      steps.push({
        type: "message",
        indices: [j, end],
        message: {
          titleKey: "algorithms.quick.comparing.title",
          descriptionKey: "algorithms.quick.comparing.description",
          params: { a: arr[j], pivot, j, end },
        },
      });

      steps.push({ type: "compare", indices: [j, end] });

      if (changeOrder(arr[j], pivot)) {
        steps.push({
          type: "message",
          indices: [i, j],
          message: {
            titleKey: "algorithms.quick.swapping.title",
            descriptionKey: "algorithms.quick.swapping.description",
            params: { orderKey, a: arr[j], b: arr[i], i, j },
          },
        });

        steps.push({ type: "swap", indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    steps.push({
      type: "message",
      indices: [i, end],
      message: {
        titleKey: "algorithms.quick.placingPivot.title",
        descriptionKey: "algorithms.quick.placingPivot.description",
        params: { pivot, index: i },
      },
    });

    steps.push({ type: "swap", indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
  }

  quickSort(0, arr.length - 1);

  steps.push({
    type: "message",
    indices: [],
    message: {
      titleKey: "algorithms.quick.complete.title",
      descriptionKey: "algorithms.quick.complete.description",
      params: { orderKey: isAscending ? "ascending" : "descending", array: arr.join(", ") },
    },
  });

  steps.push({ type: "complete", indices: Array.from({ length: arr.length }, (_, i) => i) });

  return steps;
}