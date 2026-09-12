import LayoutBar from "../components/LayoutBar";
import { snippets } from "../snippets/debugger";
import type { AlgorithmKey, LanguageKey } from "../types";
import Stats from "./Stats";
import Controls from "./Controls";

type BigSortProps = {
  codeLanguage: LanguageKey;
  codeAlgorithm: AlgorithmKey;

  currentList: number[];
  activeIndices: number[];
  actionType: "compare" | "swap" | "complete" | null;
  countSteps: number;
  countSwaps: number;
  isAnimating: boolean;

  handleRun: () => void;
  handleReset: () => void;
};

function BigSort({
  codeLanguage,
  codeAlgorithm,

  currentList,
  activeIndices,
  actionType,
  countSteps,
  countSwaps,
  isAnimating,

  handleRun,
  handleReset,
}: BigSortProps) {

  const worstCase = snippets[codeAlgorithm][codeLanguage].complexity.worst;
  const bestCase = snippets[codeAlgorithm][codeLanguage].complexity.best;

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

        <Controls isAnimating={isAnimating} handleRun={handleRun} handleReset={handleReset}></Controls>

      </div>

      <Stats bestCase={bestCase} worstCase={worstCase} countSteps={countSteps} countSwaps={countSwaps} />

    </div>
  );
}

export default BigSort;