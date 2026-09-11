import { StatItem } from "../components/Item";

type StatsProps = {
    bestCase: string;
    worstCase: string;
    countSteps: number;
    countSwaps: number;
};

export default function Stats({ bestCase, worstCase, countSteps, countSwaps }: StatsProps) {
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
        <p className="font-semibold text-center">COMPLEXITY AND STATS</p>
        <div className="flex flex-col lg:flex-row gap-3 w-1/2 lg:w-auto">
          <StatItem value={bestCase} label="BEST CASE" />
          <StatItem value={worstCase} label="WORST CASE" />
          <StatItem value={countSteps} label="STEPS" />
          <StatItem value={countSwaps} label="SWAPS" />
        </div>
    </div>
  );
}