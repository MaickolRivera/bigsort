import { snippets } from "../snippets/reference";
import type { AlgorithmKey, LanguageKey } from "../types";
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

type CodeFieldProps = {
  codeAlgorithm: AlgorithmKey;
  codeLanguage: LanguageKey;
};

export default function CodeField({ codeAlgorithm, codeLanguage }: CodeFieldProps) {
  const code = snippets[codeAlgorithm].code[codeLanguage] ?? "// Code not available.";

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