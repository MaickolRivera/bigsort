import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SidebarSection from "../components/SidebarSection";
import ButtonRandom from "../components/ButtonRandom";
import type { AlgorithmKey, LanguageKey, OrderKey, SpeedKey } from "../types";
import { useState } from "react";
import SunIcon from "../components/icons/config/IconWhiteMode";
import MoonIcon from "../components/icons/config/IconDarkMode";
import { Button } from "@/components/ui/button";
import IconGithub from "@/components/icons/general/IconGithub";

type SettingSidebarProps = {
    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;

    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;

    algSpeed: SpeedKey;
    setAlgSpeed: (value: SpeedKey) => void;

    algOrder: OrderKey;
    setAlgOrder: (value: OrderKey) => void;

    theme: string;
    handleThemeChange: (value: string) => void;
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
  }: SettingSidebarProps) {

    const [selectedLanguage, setSelectedLanguage] = useState<"EN" | "ES">("EN");

    const toggleLanguage = () => {
        setSelectedLanguage((prev) => (prev === "EN" ? "ES" : "EN"));
    };

    const toggleTheme = () => {
        handleThemeChange(theme === "dark" ? "light" : "dark");
    };

    return (
        <Sidebar title="SETTINGS" icon={IconSettings} side="left">
            <div className="flex flex-col gap-5">

                <SidebarSection title="ALGORITHMS">
                    <Dropdown<AlgorithmKey>
                        values={['BUBBLE', 'INSERTION', 'SELECTION', 'QUICK']}
                        selectedValue={codeAlgorithm}
                        setSelectedValue={setCodeAlgorithm}
                    />
                </SidebarSection>

                <SidebarSection title="NUMBERS">
                    <div className="flex flex-row w-full gap-2">
                        <ButtonRandom onClick={randomNumberItems} />
                        <Range value={rangeValue} onChange={setRangeValue} />
                    </div>
                </SidebarSection>

                <SidebarSection title="SPEED">
                    <SwitchOption<SpeedKey>
                        selectedValue={algSpeed}
                        setSelectedValue={setAlgSpeed}
                        options={["0.5x", "1.0x", "1.5x", "2.0x"]}
                        values={["0.5x", "1.0x", "1.5x", "2.0x"]}
                    />
                </SidebarSection>

                <SidebarSection title="ORDER">
                    <SwitchOption<OrderKey>
                        selectedValue={algOrder}
                        setSelectedValue={setAlgOrder}
                        options={["ASCENDING", "DESCENDING"]}
                        values={["ASCENDING", "DESCENDING"]}
                    />
                </SidebarSection>
            </div>

            <div className="flex flex-col gap-5">
                <SidebarSection title="CONFIG">
                    <div className="flex flex-row gap-2 w-full">
                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={toggleLanguage}
                        >
                            {selectedLanguage}
                        </Button>

                        <Button
                            variant="outline"
                            className="flex-1"
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="flex-1"
                        >
                            <a
                                href="https://github.com/maickolrivera/bigsort"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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