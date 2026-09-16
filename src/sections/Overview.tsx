import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import IconOverview from "../components/icons/general/IconOverview";
import IconJS from "../components/icons/languajes/IconJS";
import IconJava from "../components/icons/languajes/IconJava";
import IconPython from "../components/icons/languajes/IconPython";
import type { AlgorithmKey, LanguageKey } from "../types";
import SwitchOption from "@/components/SwitchOption";
import { snippets } from "@/snippets/reference";
import StepsTimeline from "@/components/StepTimeLine";
import { useTranslation } from "react-i18next";

type OverviewSidebarProps = {
    codeLanguage: LanguageKey,
    codeAlgorithm: AlgorithmKey;

    setCodeLanguage: (value: LanguageKey) => void;
}

function OverviewSidebar({ 
    codeLanguage, setCodeLanguage,
    codeAlgorithm}: OverviewSidebarProps) {

    const { t } = useTranslation("overview");
    const key = codeAlgorithm.toLocaleLowerCase();

const description = t(`${key}.description`);
    const explanation = t(`${key}.explanation`, {returnObjects: true}) as string[];

    return (
        <Sidebar title="OVERVIEW" icon={IconOverview} side="right"> 
            <div className="flex flex-col gap-5 mb-5">

                <SidebarSection title="DESCRIPTION">
                    <p className="text-xs whitespace-pre-line">
                        {description}
                    </p>
                </SidebarSection>

                <SidebarSection title="EXPLANATION">
                    <div className="px-2 pt-2">
                        <StepsTimeline explanation={explanation} />
                    </div>
                </SidebarSection>

                <SidebarSection title="CODE">
                    <SwitchOption<LanguageKey>
                        selectedValue={codeLanguage}
                        setSelectedValue={setCodeLanguage}
                        options={[<IconJS />, <IconJava />, <IconPython />]}
                        values={['JAVASCRIPT', 'JAVA', 'PYTHON']}
                    />
                    <CodeField codeAlgorithm={codeAlgorithm} codeLanguage={codeLanguage} />
                </SidebarSection>
            </div>
        </Sidebar>
    );
}

export default OverviewSidebar;
