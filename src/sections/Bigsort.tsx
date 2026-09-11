import { useEffect, useState } from "react";
import LayoutBar from "../components/LayoutBar";
import { snippets } from "../snippets/debugger";
import type { AlgorithmKey, LanguageKey, MessageKey, OrderKey, SortStep, SpeedKey } from "../types";
import { getBubbleSortSteps } from "../snippets/animation/bubbleSteps";
import { inCurrentlyAnimating, playSteps, stopAnimation } from "../snippets/animation/playSteps";
import { getInsertionSortSteps } from "../snippets/animation/insertionSteps";
import { getSelectionSortSteps } from "../snippets/animation/selectionSteps";
import { getQuickSortSteps } from "../snippets/animation/quickSteps";
import Stats from "./Stats";
import Controls from "./Controls";

type BigSortProps = {
  randomNumberItems: number;
  codeLanguage: LanguageKey,
  codeAlgorithm: AlgorithmKey;
  algSpeed: SpeedKey;
  setMessage: (message: MessageKey | null) => void;
  algOrder: OrderKey;
};

function BigSort({ randomNumberItems, codeLanguage, codeAlgorithm, algSpeed, setMessage, algOrder }: BigSortProps) {
  const [currentList, setCurrentList] = useState<number[]>([]);
  const [originalList, setOriginalList] = useState<number[]>([]);

  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [actionType, setActionType] = useState<"compare" | "swap" | "complete" |null>(null);

  const [countSteps, setCountSteps] = useState<number>(0);
  const [countSwaps, setCountSwaps] = useState<number>(0);

  const [isAnimating, setIsAnimating] = useState(false);
  
  const createList = (items: number) => {
    const newList = [];
    for (let i = 0; i < items; i++) {
      const randomValue = Math.floor(Math.random() * 15) + 1;
      newList.push(randomValue);
    }
    return newList;
  };

  useEffect(() => {
    const newList = createList(randomNumberItems);
    setCurrentList(newList);
    setOriginalList([...newList]);

    if (inCurrentlyAnimating()) {
      stopAnimation();
      setIsAnimating(false);
    }

  }, [randomNumberItems]);

  const handleCreateList = () => {
    const newList = createList(randomNumberItems);
    setCurrentList(newList);
    setOriginalList([...newList]);

    if (inCurrentlyAnimating()) {
      stopAnimation();
      setIsAnimating(false);
    }

    setCountSteps(0);
    setCountSwaps(0);
  };

  const speedMap: Record<SpeedKey, number> = {
    "0.5x": 1400,
    "1.0x": 700,
    "1.5x": 550,
    "2.0x": 300,
  };

  const worstCase = snippets[codeAlgorithm][codeLanguage].complexity.worst;
  const bestCase = snippets[codeAlgorithm][codeLanguage].complexity.best;
  const delayMs = speedMap[algSpeed];
  
  const handleRun = () => {

    if(isAnimating){
      stopAnimation();
      setIsAnimating(false);
      setActiveIndices([]);
      setActionType(null);
      return;
    }

    setIsAnimating(true);

    let steps: SortStep[] = [];
    if (codeAlgorithm === "BUBBLE") steps = getBubbleSortSteps(currentList, algOrder);
    else if (codeAlgorithm === "INSERTION") steps = getInsertionSortSteps(currentList, algOrder);
    else if (codeAlgorithm === "SELECTION") steps = getSelectionSortSteps(currentList, algOrder);
    else if (codeAlgorithm === "QUICK")     steps = getQuickSortSteps(currentList, algOrder);

    playSteps(
      steps,
      currentList,
      delayMs,
      countSteps,
      countSwaps,
      setCurrentList,
      setActiveIndices,
      setActionType,
      setMessage,
      setCountSteps,
      setCountSwaps,
      () => setIsAnimating(false)
    );
  };

  const handleReset = () =>{
    if (inCurrentlyAnimating()) {
      stopAnimation();
    }

    setCurrentList([...originalList]);
    setActiveIndices([]);
    setActionType(null);
    setCountSteps(0);
    setCountSwaps(0);
    setIsAnimating(false);
    setMessage(null);
  }
  
  return (
    <div className="flex flex-col md:px-50 lg:items-center gap-13 py-6 lg:py-20 flex-auto overflow-y-scroll scroll-bar-custom w-full">
      
      <div className="flex gap-10 lg:gap-2 flex-col justify-center items-center w-full lg:w-[24rem]">
        <h1 className="text-2xl lg:text-3xl font-bold">BIG S(O)RT</h1>
        <p className="text-xs text-WM-subtext dark:text-BM-subtext text-center px-8 lg:px-0">
          Interactive tool to explore how sorting algorithms work, with live visuals, controls, speed and code in multiple languages.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        
        <div className="flex flex-row gap-2.5 h-90 px-10 justify-center items-end overflow-x-hidden w-full overflow-y-hidden">
          {currentList.map((element, i) => (
            <LayoutBar
              key={i}
              level={element}
              index={i + 1}
              isActive={activeIndices.includes(i)}
              actionType={actionType}
            />
          ))}

        </div>

        <Controls currentList={currentList} isAnimating={isAnimating} handleCreateList={handleCreateList} handleRun={handleRun} handleReset={handleReset}></Controls>

      </div>
      
      <Stats bestCase={bestCase} worstCase={worstCase} countSteps={countSteps} countSwaps={countSwaps} />

    </div>
  );
}

export default BigSort;