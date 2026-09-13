import type { OrderKey, SortStep } from "../../types";

export function getQuickSortSteps(array: number[], order: OrderKey): SortStep[] {

  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number) => {
    return isAscending ? a < b : a > b;
  }

  const orderText = isAscending ? "left" : "right";

  const steps: SortStep[] = [];
  const arr = [...array];

  function quickSort(start: number, end: number) {
    if (start >= end) return;

    steps.push({ 
      type: 'message', 
      indices: Array.from({ length: end - start + 1 }, (_, i) => start + i), 
      message: {
        title: "SORTING SUB-ARRAY",
        description: `[${start}..${end}] using pivot ${arr[end]}`
      }
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
        type: 'message', 
        indices: [j, end], 
        message: {
          title: "COMPARING",
          description: `${arr[j]} (index ${j}) with pivot ${pivot}`
        }
      });

      steps.push({ type: 'compare', indices: [j, end] });

      if (changeOrder(arr[j], pivot)) {
        steps.push({ 
          type: 'message', 
          indices: [i, j], 
          message: {
            title: "SWAPPING",
            description: `Moving ${arr[j]} (index ${j}) to ${orderText} partition by swapping with ${arr[i]} (index ${i})`
          }
        });

        steps.push({ type: 'swap', indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    steps.push({ 
      type: 'message', 
      indices: [i, end], 
      message: {
        title: "PLACING PIVOT",
        description: `Placing ${pivot} at index ${i}`
      }
    });

    steps.push({ type: 'swap', indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
  }

  quickSort(0, arr.length - 1);

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: {
      title: "SORTING COMPLETE",
      description: `Final array in ${order.toLowerCase()} order: [${arr.join(", ")}]`
    }
  });

  steps.push({
    type: 'complete',
    indices: Array.from({ length: arr.length }, (_, i) => i),
  })

  return steps;
}
