import type { OrderKey, SortStep } from "../../types";

export function getSelectionSortSteps(array: number[], order: OrderKey): SortStep[] {
  const isAscending = order === "ASCENDING";
  const changeOrder = (a: number, b: number) => {
    return isAscending ? a < b : a > b;
  };

  const orderText = isAscending ? "minimum" : "maximum";
  const orderSign = isAscending ? ">" : "<"

  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({
      type: 'message',
      indices: [i],
      message: {
        title: "SELECTION INIT",
        description: `Searching for the ${orderText} elementㅤ||ㅤfrom [${i}] onward`
      }
    });

    let targetIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      steps.push({
        type: 'message',
        indices: [targetIndex, j],
        message: {
          title: "COMPARING",
          description: `Checking against current ${orderText}ㅤ||ㅤ${arr[j]} ${orderSign} ${arr[targetIndex]}ㅤ||ㅤ[${j}] ${orderSign} [${targetIndex}]`
        }
      });

      steps.push({ type: 'compare', indices: [targetIndex, j] });

      if (changeOrder(arr[j], arr[targetIndex])) {
        targetIndex = j;

        steps.push({
          type: 'message',
          indices: [targetIndex],
          message: {
            title: `NEW ${isAscending ? "MINIMUM" : "MAXIMUM"} FOUND`,
            description: `New ${orderText} foundㅤ||ㅤ${arr[targetIndex]}ㅤ||ㅤ[${targetIndex}]`
          }
        });
      }
    }

    if (targetIndex !== i) {
      steps.push({
        type: 'message',
        indices: [i, targetIndex],
        message: {
          title: "SWAPPING",
          description: `Placing ${orderText} in its correct positionㅤ||ㅤ${arr[i]}, ${arr[targetIndex]}ㅤ||ㅤ[${i}], [${targetIndex}]`
        }
      });

      steps.push({ type: 'swap', indices: [i, targetIndex] });
      [arr[i], arr[targetIndex]] = [arr[targetIndex], arr[i]];
    }
  }

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