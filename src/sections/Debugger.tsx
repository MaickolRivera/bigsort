import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import IconDebugger from "../components/icons/general/IconDebugger";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import IconJS from "../components/icons/languajes/IconJS";
import IconJava from "../components/icons/languajes/IconJava";
import IconPython from "../components/icons/languajes/IconPython";
import type { AlgorithmKey, LanguageKey, MessageKey } from "../types";
import SwitchOption from "@/components/SwitchOption";
import { snippets } from "@/snippets/reference";
import StepsTimeline from "@/components/StepTimeLine";

type DebuggerSidebarProps = {
    codeLanguage: LanguageKey,
    codeAlgorithm: AlgorithmKey;
    message: MessageKey | null;

    setCodeLanguage: (value: LanguageKey) => void;
}

function DebuggerSidebar({ 
    codeLanguage, setCodeLanguage,
    codeAlgorithm, 
    message}: DebuggerSidebarProps) {

    const description = snippets[codeAlgorithm].info.description;
    const explanation = snippets[codeAlgorithm].info.explanation;

    return (
        <Sidebar title="DEBUGGER" icon={IconDebugger} side="right"> 
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

                <SidebarSection title="STEP BY STEP">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-xs font-normal text-muted-foreground">
                            {!message?.title ? `${codeAlgorithm} SORT | READY TO START` : message.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xs">
                            {!message?.description ? "Press the run buttom to begin sorting." : message.description}
                            </p>
                        </CardContent>
                    </Card>
                </SidebarSection>
            </div>
        </Sidebar>
    );
}

export default DebuggerSidebar;
