import type { OrderKey, SortStep } from "../../types";

export function getBubbleSortSteps(array: number[], order: OrderKey = "ASCENDING"): SortStep[] {
  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number): boolean => (isAscending ? a > b : a < b);

  const orderKey = isAscending ? "largest" : "smaller";
  const orderSign = isAscending ? ">" : "<";

  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      type: "message",
      indices: [],
      message: {
        titleKey: "algorithms.bubble.init.title",
        descriptionKey: "algorithms.bubble.init.description",
        params: { orderKey, count: arr.length - i },
      },
    });

    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({
        type: "message",
        indices: [j, j + 1],
        message: {
          titleKey: "algorithms.bubble.comparing.title",
          descriptionKey: "algorithms.bubble.comparing.description",
          params: { a: arr[j], b: arr[j + 1], sign: orderSign, i: j, j: j + 1 },
        },
      });

      steps.push({ type: "compare", indices: [j, j + 1] });

      if (changeOrder(arr[j], arr[j + 1])) {
        steps.push({
          type: "message",
          indices: [j, j + 1],
          message: {
            titleKey: "algorithms.bubble.swapping.title",
            descriptionKey: "algorithms.bubble.swapping.description",
            params: { a: arr[j], b: arr[j + 1], i: j, j: j + 1 },
          },
        });

        steps.push({ type: "swap", indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        steps.push({
          type: "message",
          indices: [j, j + 1],
          message: {
            titleKey: "algorithms.bubble.noSwap.title",
            descriptionKey: "algorithms.bubble.noSwap.description",
            params: { a: arr[j], b: arr[j + 1], i: j, j: j + 1 },
          },
        });
      }
    }
  }

  steps.push({
    type: "message",
    indices: [],
    message: {
      titleKey: "algorithms.bubble.complete.title",
      descriptionKey: "algorithms.bubble.complete.description",
      params: { orderKey: isAscending ? "ascending" : "descending", array: arr.join(", ") },
    },
  });

  steps.push({
    type: "complete",
    indices: Array.from({ length: arr.length }, (_, i) => i),
  });

  return steps;
}