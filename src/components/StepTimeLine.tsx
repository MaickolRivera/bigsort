export default function StepsTimeline({ explanation }: { explanation: string }) {
  const steps = explanation
    .split('\n')
    .map(line => line.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);

  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <li key={i} className="relative flex gap-3 pb-4 last:pb-0">
          {i !== steps.length - 1 && (
            <span className="absolute left-2.75 top-6 bottom-0 w-px bg-border" />
          )}
          <span className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-[10px] font-medium text-muted-foreground">
            {i + 1}
          </span>
          <p className="text-xs pt-0.5">{step}</p>
        </li>
      ))}
    </ol>
  );
}