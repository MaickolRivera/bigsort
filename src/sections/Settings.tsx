import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SidebarSection from "../components/SidebarSection";
import ButtonRandom from "../components/ButtonRandom";
import type { AlgorithmKey, OrderKey, SpeedKey } from "../types";
import { useTranslation } from "react-i18next";
import SunIcon from "../components/icons/config/IconLightMode";
import MoonIcon from "../components/icons/config/IconDarkMode";
import { Button } from "@/components/ui/button";
import IconGithub from "@/components/icons/general/IconGithub";
import SortingList from "@/components/SortingList";

type SettingSidebarProps = {
    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;

    algOrder: OrderKey;
    setAlgOrder: (value: OrderKey) => void;

    algSpeed: SpeedKey;
    setAlgSpeed: (value: SpeedKey) => void;

    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;

    theme: string;
    handleThemeChange: (value: string) => void;

    currentList: number[];
    handleCreateList: () => void;
};

function SettingSidebar({
    rangeValue,
    setRangeValue,
    randomNumberItems,
    codeAlgorithm,
    setCodeAlgorithm,
    algSpeed,
    setAlgSpeed,
    algOrder,
    setAlgOrder,
    theme,
    handleThemeChange,
    currentList,
    handleCreateList,
  }: SettingSidebarProps) {

    const { i18n, t } = useTranslation("settings");

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
    };

    const toggleTheme = () => {
        handleThemeChange(theme === "dark" ? "light" : "dark");
    };

    return (
        <Sidebar title={t("title.settings")} icon={IconSettings} side="left">
            <div className="flex flex-col gap-5">

                <SidebarSection title={t("title.algorithms")}>
                    <Dropdown<AlgorithmKey>
                        values={['BUBBLE', 'INSERTION', 'SELECTION', 'QUICK']}
                        selectedValue={codeAlgorithm}
                        setSelectedValue={setCodeAlgorithm}
                        ariaLabel={t("aria-label.algorithm")}
                    />
                </SidebarSection>

                <SidebarSection title={t("title.order")}>
                    <SwitchOption<OrderKey>
                        selectedValue={algOrder}
                        setSelectedValue={setAlgOrder}
                        options={[t("button.ascending"), t("button.descending")]}
                        values={["ASCENDING", "DESCENDING"]}
                    />
                </SidebarSection>

                <SidebarSection title={t("title.speed")}>
                    <SwitchOption<SpeedKey>
                        selectedValue={algSpeed}
                        setSelectedValue={setAlgSpeed}
                        options={["0.5x", "1.0x", "1.5x", "2.0x"]}
                        values={["0.5x", "1.0x", "1.5x", "2.0x"]}
                    />
                </SidebarSection>

                <SidebarSection title={t("title.numbers")}>
                    <div className="flex flex-row items-stretch gap-2 cursor-pointer">
                        <ButtonRandom onClick={randomNumberItems} />
                        <Range value={rangeValue} onChange={setRangeValue} />
                    </div>
                </SidebarSection>

                <SidebarSection title={t("title.values")}>
                    <SortingList currentList={currentList} handleCreateList={handleCreateList} />
                </SidebarSection>
            </div>

            <div className="flex flex-col gap-5">
                <SidebarSection title={t("title.config")}>
                    <div className="flex flex-row gap-2 w-full">
                        <Button
                            variant="outline"
                            className="flex-1 cursor-pointer"
                            aria-label={t("aria-label.languaje")}
                            onClick={toggleLanguage}
                        >
                            {i18n.language.toUpperCase()}
                        </Button>

                        <Button
                            variant="outline"
                            className="flex-1 cursor-pointer"
                            aria-label={t("aria-label.theme")}
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 cursor-pointer"
                            aria-label={t("aria-label.repository")}
                        >
                            <a href="https://github.com/maickolrivera/bigsort" target="_blank" rel="noopener noreferrer">
                                <IconGithub />
                            </a>
                        </Button>
                    </div>
                </SidebarSection>
            </div>
        </Sidebar>
    )
}
export default SettingSidebar;