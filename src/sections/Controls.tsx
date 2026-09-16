import IconPause from "../components/icons/controls/IconPause"
import IconRetry from "../components/icons/controls/IconRetry"
import IconRun from "../components/icons/controls/IconRun"
import PanelItem from "../components/Item"

import { useTranslation } from "react-i18next";

type ControlsProps = {
    isAnimating: boolean;

    handleRun: () => void;
    handleReset: () => void;
}

export default function Controls({ isAnimating, handleRun, handleReset }: ControlsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-5">
      <div className="flex flex-row h-10 gap-4 border-sidebar-border pl-6">
        <PanelItem onClick={handleRun} title={t("controls.run")}
          className="cursor-pointer px-6 py-2.5 
          bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          {isAnimating ? <IconPause /> : <IconRun />}
        </PanelItem>

        <PanelItem onClick={handleReset} title={t("controls.reset")}
          className="cursor-pointer px-6 py-2.5 
          bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
          <IconRetry />
        </PanelItem>
      </div>
    </div>
  );
}