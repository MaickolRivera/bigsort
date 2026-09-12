import IconPause from "../components/icons/controls/IconPause"
import IconRetry from "../components/icons/controls/IconRetry"
import IconRun from "../components/icons/controls/IconRun"
import PanelItem from "../components/Item"

type ControlsProps = {
    isAnimating: boolean;

    handleRun: () => void;
    handleReset: () => void;
}

export default function Controls ({isAnimating, handleRun, handleReset}: ControlsProps) {
    return(
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-5">
            <div className="flex flex-row h-full gap-3 border-sidebar-border pl-6">
                <PanelItem onClick={handleRun} title="Run / Pause Animation"
                className="cursor-pointer px-5 py-4 
                bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground
                ">
                {isAnimating ? <IconPause /> : <IconRun />}
                </PanelItem>
                
                <PanelItem onClick={handleReset} title="Reset Animation"
                className="cursor-pointer px-5 py-4 
                bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <IconRetry />
                </PanelItem>
            </div>
        </div>
    )
}