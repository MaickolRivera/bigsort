import { useEffect, useState } from "react";
import BigSort from "./sections/Bigsort";
import SidebarCode from "./sections/Debugger";
import SidebarSettings from "./sections/Settings";
import type { AlgorithmKey, LanguageKey, MessageKey, OrderKey, SortStep, SpeedKey } from "./types";
import { getBubbleSortSteps } from "./snippets/animation/bubbleSteps";
import { getInsertionSortSteps } from "./snippets/animation/insertionSteps";
import { getSelectionSortSteps } from "./snippets/animation/selectionSteps";
import { getQuickSortSteps } from "./snippets/animation/quickSteps";
import { inCurrentlyAnimating, playSteps, stopAnimation } from "./snippets/animation/playSteps";

function App() {
  const [rangeValue, setRangeValue] = useState(10);

  const generateRandomValue = () => {
    const randomValue = Math.floor(Math.random() * 11) + 5;
    setRangeValue(randomValue);
  };

  const [codeAlgorithm, setCodeAlgorithm] = useState<AlgorithmKey>("BUBBLE");
  const [codeLanguage, setCodeLanguage] = useState<LanguageKey>("JAVASCRIPT");

  const [algSpeed, setAlgSpeed] = useState<SpeedKey>("1.0x");

  const [message, setMessage] = useState<MessageKey | null>(null);

  const [algOrder, setAlgOrder] = useState<OrderKey>("ASCENDING");

  const [theme, setTheme] = useState("dark");

  const [currentList, setCurrentList] = useState<number[]>([]);
  const [originalList, setOriginalList] = useState<number[]>([]);

  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [actionType, setActionType] = useState<"compare" | "swap" | "complete" | null>(null);

  const [countSteps, setCountSteps] = useState<number>(0);
  const [countSwaps, setCountSwaps] = useState<number>(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const createList = (items: number) => {
    const newList: number[] = [];
    for (let i = 0; i < items; i++) {
      const randomValue = Math.floor(Math.random() * 15) + 1;
      newList.push(randomValue);
    }
    return newList;
  };

  const handleCreateList = () => {
    const newList = createList(rangeValue);
    setCurrentList(newList);
    setOriginalList([...newList]);

    if (inCurrentlyAnimating()) {
      stopAnimation();
    }
    setIsAnimating(false);
    setActiveIndices([]);
    setActionType(null);
    setCountSteps(0);
    setCountSwaps(0);
  };

  useEffect(() => {
    handleCreateList();
  }, [rangeValue]);

  const speedMap: Record<SpeedKey, number> = {
    "0.5x": 1400,
    "1.0x": 700,
    "1.5x": 550,
    "2.0x": 300,
  };
  const delayMs = speedMap[algSpeed];

  const handleRun = () => {
    if (isAnimating) {
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
    else if (codeAlgorithm === "QUICK") steps = getQuickSortSteps(currentList, algOrder);

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

  const handleReset = () => {
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
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") || "dark";
    setTheme(storageTheme);
    document.documentElement.classList.toggle("dark", storageTheme === "dark");
  }, []);

  return (
    <div className="flex overflow-y-scroll scroll-bar-custom flex-row justify-between h-screen w-screen font-display">
      <SidebarSettings
        algOrder={algOrder}
        setAlgOrder={setAlgOrder}
        algSpeed={algSpeed}
        setAlgSpeed={setAlgSpeed}

        codeAlgorithm={codeAlgorithm}
        setCodeAlgorithm={setCodeAlgorithm}

        randomNumberItems={generateRandomValue}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}

        theme={theme}
        handleThemeChange={handleThemeChange}

        currentList={currentList}
        handleCreateList={handleCreateList}
      />

      <BigSort
        codeLanguage={codeLanguage}
        codeAlgorithm={codeAlgorithm}

        currentList={currentList}
        activeIndices={activeIndices}
        actionType={actionType}
        countSteps={countSteps}
        countSwaps={countSwaps}
        isAnimating={isAnimating}

        handleRun={handleRun}
        handleReset={handleReset}
      />

      <SidebarCode
        codeLanguage={codeLanguage}
        setCodeLanguage={setCodeLanguage}
        codeAlgorithm={codeAlgorithm}
        message={message}
      />
    </div>
  )
}

export default App