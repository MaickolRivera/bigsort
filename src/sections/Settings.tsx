import IconSettings from "../components/icons/general/IconSettings";
import Dropdown from "../components/Dropdown";
import Sidebar from "../components/Sidebar";
import Range from "../components/Range";
import SwitchOption from "../components/SwitchOption";
import SidebarSection from "../components/SidebarSection";
import ButtonRandom from "../components/ButtonRandom";
import type { AlgorithmKey, LanguageKey, OrderKey, SpeedKey } from "../types";
import { useState } from "react";
import IconJS from "../components/icons/languajes/IconJS";
import IconJava from "../components/icons/languajes/IconJava";
import IconPython from "../components/icons/languajes/IconPython";
import SunIcon from "../components/icons/config/IconWhiteMode";
import MoonIcon from "../components/icons/config/IconDarkMode";

type SidebarSettingsProps = {
    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;

    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;

    algSpeed: SpeedKey;
    setAlgSpeed: (value: SpeedKey) => void;

    algOrder: OrderKey;
    setAlgOrder: (value: OrderKey) => void;

    codeLanguage: LanguageKey;
    setCodeLanguage: (value: LanguageKey) => void;

    theme: string;
    handleThemeChange: (value: string) => void;
};

function SidebarSettings({
    rangeValue,
    setRangeValue,
    randomNumberItems,

    codeAlgorithm,
    setCodeAlgorithm,

    algSpeed,
    setAlgSpeed,

    algOrder,
    setAlgOrder,

    codeLanguage,
    setCodeLanguage,

    theme,
    handleThemeChange,
  }: SidebarSettingsProps) {

    const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

    const themeIcons = {
      light: <SunIcon />,
      dark: <MoonIcon />
    };
    
    return (
        <Sidebar title="SETTINGS" icon={IconSettings} side="left">
            <div className="flex flex-col gap-6">

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

                <SidebarSection title="CODE LANGUAGE">
                    <SwitchOption<LanguageKey>
                        selectedValue={codeLanguage}
                        setSelectedValue={setCodeLanguage}
                        options={[<IconJS />, <IconJava />, <IconPython />]}
                        values={['JAVASCRIPT', 'JAVA', 'PYTHON']}
                    />
                </SidebarSection>
            </div>

            <div className="flex flex-col gap-6 mt-6">

                <SidebarSection title="VISUAL MODE">
                    <SwitchOption<string>
                        selectedValue={theme}
                        setSelectedValue={handleThemeChange}
                        options={[themeIcons.light, themeIcons.dark]}
                        values={["light", "dark"]}
                    />
                </SidebarSection>

                <SidebarSection title="LANGUAGE">
                    <Dropdown<string>
                        values={["ENGLISH", "SPANISH"]}
                        selectedValue={selectedLanguage}
                        setSelectedValue={setSelectedLanguage}
                    />
                </SidebarSection>

            </div>
        </Sidebar>
    )
}
export default SidebarSettings;