import type { OrderKey, SortStep } from "../../types";

export function getInsertionSortSteps(array: number[], order: OrderKey): SortStep[] {
  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number): boolean => (isAscending ? a > b : a < b);

  const orderKey = isAscending ? "left" : "right";
  const orderSign = isAscending ? ">" : "<";

  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    steps.push({
      type: "message",
      indices: [i],
      message: {
        titleKey: "algorithms.insertion.init.title",
        descriptionKey: "algorithms.insertion.init.description",
        params: { value: arr[i], index: i },
      },
    });

    let j = i;
    while (j > 0 && changeOrder(arr[j - 1], arr[j])) {
      steps.push({
        type: "message",
        indices: [j - 1, j],
        message: {
          titleKey: "algorithms.insertion.inserting.title",
          descriptionKey: "algorithms.insertion.inserting.description",
          params: { orderKey, a: arr[j - 1], b: arr[j], sign: orderSign, i: j - 1, j },
        },
      });

      steps.push({ type: "compare", indices: [j - 1, j] });
      steps.push({ type: "swap", indices: [j - 1, j] });

      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }

    if (j > 0) {
      steps.push({
        type: "message",
        indices: [j - 1, j],
        message: {
          titleKey: "algorithms.insertion.noSwap.title",
          descriptionKey: "algorithms.insertion.noSwap.description",
          params: { a: arr[j - 1], b: arr[j] },
        },
      });
      steps.push({ type: "compare", indices: [j - 1, j] });
    }
  }

  steps.push({
    type: "message",
    indices: [],
    message: {
      titleKey: "algorithms.insertion.complete.title",
      descriptionKey: "algorithms.insertion.complete.description",
      params: { orderKey: isAscending ? "ascending" : "descending", array: arr.join(", ") },
    },
  });

  steps.push({ type: "complete", indices: Array.from({ length: arr.length }, (_, i) => i) });

  return steps;
}