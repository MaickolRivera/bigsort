import LayoutBar from "../components/LayoutBar";
import type { AlgorithmKey, LanguageKey, MessageKey } from "../types";
import Controls from "./Controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getActionBadgeClass } from "../lib/actionColor";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("bigsort");

  return (
    <div className="flex flex-col md:px-50 lg:items-center gap-10 pt-14 lg:pt-0 lg:justify-center flex-auto overflow-y-scroll scroll-bar-custom w-full">

      <div className="flex gap-4 flex-col justify-center items-center w-full lg:w-130">
        <h1 className="text-2xl lg:text-3xl font-bold">BIG S(O)RT</h1>
        <p className="text-xs text-sidebar-foreground/70 text-center px-8 lg:px-0">
        {t("information.description")}  
        </p>
      </div>

      <div className="flex flex-col gap-5">

        <div className="flex flex-row gap-1 h-90 lg:h-100 px-5 justify-center items-end overflow-x-hidden w-full overflow-y-hidden">
          {currentList.map((element, i) => (
            <LayoutBar
              key={i}
              level={element}
              index={i}
              isActive={activeIndices.includes(i)}
              actionType={actionType}
            />
          ))}

        </div>


        <Controls isAnimating={isAnimating} handleRun={handleRun} handleReset={handleReset}></Controls>
        
        <div className="flex flex-col md:flex-row gap-3 justify-center px-5">
          <Card className="w-full lg:w-105 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                <Badge className={`uppercase text-[10px] transition-none ${getActionBadgeClass(actionType)}`}>
                  {message?.title ?? "ready"}
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-sm pl-2">
                {!message?.description ? "Press the run button to begin sorting." : message.description}
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center w-auto lg:w-22">
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                {t("information.steps")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
                {countSteps}
            </CardContent>
          </Card>

          <Card className="text-center w-auto lg:w-22">
            <CardHeader>
              <CardTitle className="text-xs font-normal text-muted-foreground">
                {t("information.swaps")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
                {countSwaps}
            </CardContent>
          </Card>
        </div>
      </div>

      {/*
      <Stats bestCase={bestCase} worstCase={worstCase}/>
      */}

<footer className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
  <p className="text-xs text-neutral-500 tracking-wide">
    {t("information.footer")}{" "}
    <span className="text-neutral-400">♥</span>{" "}
    {t("information.footerBy")}{" "}
    <a
      href="https://www.linkedin.com/in/maickol-rivera/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
    >
      Maickol Rivera
    </a>
  </p>
</footer>

    </div>
  );
}

export default BigSort;