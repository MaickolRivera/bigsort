import CodeField from "../components/CodeField";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import IconDebugger from "../components/icons/general/IconDebugger";
import IconGithub from "../components/icons/general/IconGithub";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { AlgorithmKey, LanguageKey, MessageKey } from "../types";

type DebuggerSidebarProps = {
  codeLanguage: LanguageKey,
  codeAlgorithm: AlgorithmKey;
  message: MessageKey | null;
}

function DebuggerSidebar({ codeLanguage, codeAlgorithm, message}: DebuggerSidebarProps) {
    return (
        <Sidebar title="DEBUGGER" icon={IconDebugger} side="right"> 
            <div className="flex flex-col gap-6 mb-5">

                <SidebarSection title="CODE">
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

            <SidebarSection title="GITHUB">
                <Button
                    asChild
                    variant="outline"
                    className="w-full justify-between px-5 py-2.5">
                    <a    
                        href="https://github.com/m4icol/bigsort"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-sm">VIEW REPOSITORY</span>
                        <IconGithub />
                    </a>
                    </Button>
            </SidebarSection>
        </Sidebar>
    );
}

export default DebuggerSidebar;
