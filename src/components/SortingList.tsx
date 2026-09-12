import PanelItem from "./Item";
import ButtonRandom from "./ButtonRandom";

type SortingListProps = {
    handleCreateList: () => void;
    currentList: number[]
}

export default function SortingList({ handleCreateList, currentList }: SortingListProps) {

    return (
        <div className="flex flex-row items-stretch gap-2">
            <ButtonRandom
                onClick={handleCreateList}
                className="h-full shrink-0 bg-sidebar border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            />

            <PanelItem
                className="cursor-default flex-1 justify-start text-left text-sm leading-relaxed
                bg-sidebar border-sidebar-border text-sidebar-foreground/80"
            >
                {currentList.join(", ")}
            </PanelItem>
        </div>
    )
}