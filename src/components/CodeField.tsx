import { snippets } from "../snippets/debugger";
import type { LanguageKey } from "../types";
import { Card, CardContent } from "@/components/ui/card"
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
      <CardContent>
        <ScrollArea type="always" className="w-full whitespace-nowrap">
          <pre className="text-sm py-4 px-1">
            <code>{code}</code>
          </pre>
          <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
