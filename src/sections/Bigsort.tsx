import LayoutBar from "../components/LayoutBar";
import { snippets } from "../snippets/reference";
import type { AlgorithmKey, LanguageKey, MessageKey } from "../types";
import Stats from "./Stats";
import Controls from "./Controls";
import SidebarSection from "@/components/SidebarSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatItem } from "@/components/Item";

type BigSortProps = {
  codeLanguage: LanguageKey;
  codeAlgorithm: AlgorithmKey;

  currentList: number[];
  activeIndices: number[];
  actionType: "compare" | "swap" | "complete" | null;
  countSteps: number;
  countSwaps: number;
  isAnimating: boolean;

  message: MessageKey | null;

  handleRun: () => void;
  handleReset: () => void;
};

function BigSort({
  codeAlgorithm,
  currentList,
  activeIndices,
  actionType,
  countSteps,
  countSwaps,
  isAnimating,

  message,

  handleRun,
  handleReset,
}: BigSortProps) {

  const worstCase = snippets[codeAlgorithm].complexity.worst;
  const bestCase = snippets[codeAlgorithm].complexity.best;

  return (
    <div className="flex flex-col md:px-50 lg:items-center gap-10 mt-22 lg:mt-0 lg:justify-center flex-auto overflow-y-scroll scroll-bar-custom w-full">

      <div className="flex gap-4 flex-col justify-center items-center w-full lg:w-[24rem]">
        <h1 className="text-2xl lg:text-3xl font-bold">BIG S(O)RT</h1>
        <p className="text-xs text-sidebar-foreground/70 text-center px-8 lg:px-0">
          Interactive tool to explore how sorting algorithms work, with live visuals, controls, speed and code in multiple languages.
        </p>
      </div>

      <div className="flex flex-col gap-5">

        <div className="flex flex-row gap-1 h-90 lg:h-100 px-5 justify-center items-end overflow-x-hidden w-full overflow-y-hidden">
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
        
        <div className="flex flex-col md:flex-row gap-3 justify-center px-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                {!message?.title ? `${codeAlgorithm} SORT | READY TO START` : message.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs">
                {!message?.description ? "Press the run button to begin sorting." : message.description}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                STEPS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center">
                {countSteps}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                SWAPS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-center">
                {countSwaps}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/*
      <Stats bestCase={bestCase} worstCase={worstCase}/>
      */}

    </div>
  );
}

export default BigSort;