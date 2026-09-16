import type { OrderKey, SortStep } from "../../types";

export function getSelectionSortSteps(array: number[], order: OrderKey): SortStep[] {
  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number) => (isAscending ? a < b : a > b);

  const orderKey = isAscending ? "minimum" : "maximum";
  const orderSign = isAscending ? ">" : "<";

  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      type: "message",
      indices: [i],
      message: {
        titleKey: "algorithms.selection.init.title",
        descriptionKey: "algorithms.selection.init.description",
        params: { orderKey, index: i },
      },
    });

    let targetIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      steps.push({
        type: "message",
        indices: [targetIndex, j],
        message: {
          titleKey: "algorithms.selection.comparing.title",
          descriptionKey: "algorithms.selection.comparing.description",
          params: { orderKey, a: arr[j], b: arr[targetIndex], sign: orderSign, i: targetIndex, j },
        },
      });

      steps.push({ type: "compare", indices: [targetIndex, j] });

      if (changeOrder(arr[j], arr[targetIndex])) {
        targetIndex = j;

        steps.push({
          type: "message",
          indices: [targetIndex],
          message: {
            titleKey: isAscending
              ? "algorithms.selection.newFound.min.title"
              : "algorithms.selection.newFound.max.title",
            descriptionKey: "algorithms.selection.newFound.description",
            params: { orderKey, value: arr[targetIndex], index: targetIndex },
          },
        });
      }
    }

    if (targetIndex !== i) {
      steps.push({
        type: "message",
        indices: [i, targetIndex],
        message: {
          titleKey: "algorithms.selection.swapping.title",
          descriptionKey: "algorithms.selection.swapping.description",
          params: { orderKey, a: arr[i], b: arr[targetIndex], i, target: targetIndex },
        },
      });

      steps.push({ type: "swap", indices: [i, targetIndex] });
      [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
    }
  }

  steps.push({
    type: "message",
    indices: [],
    message: {
      titleKey: "algorithms.selection.complete.title",
      descriptionKey: "algorithms.selection.complete.description",
      params: { orderKey: isAscending ? "ascending" : "descending", array: arr.join(", ") },
    },
  });

  steps.push({ type: "complete", indices: Array.from({ length: arr.length }, (_, i) => i) });

  return steps;
}