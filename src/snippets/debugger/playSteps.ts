import type { MessageKey, SortStep } from "../../types";

let isAnimating = false;
let animationId: number = 0;

export async function playSteps(
    steps: SortStep[],
    arr: number[],
    delayMs: number,
    countSteps: number,
    countSwaps: number,
    setArray: (arr: number[]) => void,
    setActive: (indices: number[]) => void,
    setAction: (type: "compare" | "swap" | 'complete' |null) => void,
    setMessage: (message: MessageKey) => void,
    setCountSteps: (countSteps: number) => void,
    setCountSwaps: (countSwaps: number) => void,
    onFinish?: () => void
){

    if (isAnimating) return;
    isAnimating = true;
    const currentAnimationId = ++animationId;

    let stepCount = countSteps;
    let swapCount = countSwaps;

    try{
        for(let i = 0; i < steps.length; i++){
            if(currentAnimationId !== animationId || !isAnimating) break

            const step = steps[i];
            const {type, indices, message} = step;

            if(step.type === 'compare' || step.type === "swap"){
                stepCount++;
                setCountSteps(stepCount)
            }

            if(type === "message"){
                if(setMessage && message){
                    setMessage(message);
                    setActive(indices);
                }
            } else {
                setActive(indices);
                setAction(type);
                if (step.type === 'swap') {
                    const [i, j] = step.indices;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    setArray([...arr]);
                    swapCount++;
                    setCountSwaps(swapCount);
                }
            }

            await new Promise((resolve) => setTimeout(resolve, delayMs));

            if(currentAnimationId !== animationId || !isAnimating) break;

            setActive([]);
            if(type !== "message") setAction(null);
        }

    } finally {

        if (currentAnimationId === animationId) {
            isAnimating = false;
            setActive([]);
            setAction(null);
            if (onFinish) onFinish();
        }

    }
}

export function stopAnimation(){
    isAnimating = false;
    animationId++;
}

export function inCurrentlyAnimating(){
    return isAnimating;
}