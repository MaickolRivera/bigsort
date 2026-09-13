import type { OrderKey, SortStep } from "../../types";

export function getBubbleSortSteps(array: number[], order: OrderKey = "ASCENDING"): SortStep[] {

  const isAscending = order === "ASCENDING";
  const changeOrder =(a: number, b:number): boolean => {
    return isAscending ? a > b : a < b;
  }
  const orderText = isAscending ? "smaller" : "largest";
  const orderSign = isAscending ? ">" : "<";

  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({ 
      type: 'message', 
      indices: [], 
      message: {
        title: "BUBBLE INIT",
        description: `Pass ${i + 1}: Bubble the ${orderText} element among the first ${arr.length - i} elements to its correct position`
      }
    });

    for (let j = 0; j < arr.length - i - 1; j++) {

      steps.push({ 
        type: 'message', 
        indices: [j, j + 1], 
        message: {
          title: "COMPARING",
          description: `Checking if ${arr[j]} (index[${j}]) ${orderSign} ${arr[j + 1]} (index[${j + 1}])`
        }
      });

      steps.push({ type: 'compare', indices: [j, j + 1] });

      if (changeOrder(arr[j],  arr[j + 1])) {
        
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: {
            title: "SWAPPING",
            description: `Swapping ${arr[j]} (index[${j}]) and ${arr[j + 1]} (index[${j + 1}]) for ${order.toLowerCase()} order`
          }
        });

        steps.push({ type: 'swap', indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: {
            title: "NO SWAP NEEDED",
            description: `${arr[j]} and ${arr[j + 1]} are already in correct ${order.toLowerCase()} order`
          }
        });
      }
    }
  }

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: {
      title: "SORTING COMPLETE",
      description: `Final array in ${order.toLowerCase()} order: [${arr.join(', ')}]`
    }
  });

  steps.push({
    type: 'complete',
    indices: Array.from({ length: arr.length }, (_, i) => i),
  })

  return steps;
}
