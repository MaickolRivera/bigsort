import { snippets } from "../snippets/debugger";
import type { LanguageKey } from "../types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type AlgorithmKey = keyof typeof snippets;
type CodeFieldProps = {
  codeAlgorithm: AlgorithmKey;
  codeLanguage: LanguageKey;
};

export default function CodeField({ codeAlgorithm, codeLanguage }: CodeFieldProps) {
  const langKey = codeLanguage as LanguageKey;
  const code = snippets[codeAlgorithm][langKey]?.code ?? "// Code not available.";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xs font-normal text-muted-foreground uppercase">
          {codeLanguage.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea type="always" className="w-full whitespace-nowrap">
          <pre className="text-sm pb-5">
            <code>{code}</code>
          </pre>
          <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
