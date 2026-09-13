import type { OrderKey, SortStep } from "../../types";

export function getInsertionSortSteps(array: number[], order: OrderKey): SortStep[] {
    
    const isAscending = order === "ASCENDING";
    const changeOrder = (a: number, b: number): boolean => {
      return isAscending ? a > b : a < b;
    }

    const orderText = isAscending ? "left" : "right"
    const orderSign = isAscending ? ">" : "<";
  
    const steps: SortStep[] = [];
    const arr = [...array];
  
    for (let i = 1; i < arr.length; i++) {

      steps.push({
        type: 'message',
        indices: [i],
        message: {
          title: "INSERTION INIT",
          description: `Current value: ${arr[i]}. Searching correct position in the sorted part`
        }
      });
       
      let j = i;
      while (j > 0 && changeOrder(arr[j - 1], arr[j])) {

        steps.push({
          type: 'message',
          indices: [j - 1, j],
          message: {
            title: "INSERTING",
            description: `${arr[j - 1]} ${orderSign} ${arr[j]} = true, shifting ${arr[j]} ${orderText} to find its correct position`
          }
        });

        steps.push({ type: 'compare', indices: [j - 1, j] });
        steps.push({ type: 'swap', indices: [j - 1, j] });
  
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }

      if (j > 0) {
        steps.push({
          type: 'message',
          indices: [j - 1, j],
          message: {
            title: "NO SWAP NEEDED",
            description: `Comparing ${arr[j - 1]} with ${arr[j]}`
          }
        });
        steps.push({ type: 'compare', indices: [j - 1, j] });
      }
    }

    steps.push({
      type: 'message',
      indices: [],
      message: {
        title: "SORTING COMPLETE",
        description: `Final array in ${order.toLowerCase()}: [${arr.join(', ')}]` 
      }
    });

    steps.push({
      type: 'complete',
      indices: Array.from({ length: arr.length }, (_, i) => i),
    })
  
    return steps;
}
