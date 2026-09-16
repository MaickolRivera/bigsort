import { StatItem } from "../components/PanelItem";

type StatsProps = {
    bestCase: string;
    worstCase: string;
};

export default function Stats({ bestCase, worstCase}: StatsProps) {
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
        <p className="font-semibold text-center">COMPLEXITY AND STATS</p>
        <div className="flex flex-col lg:flex-row gap-3 w-1/2 lg:w-auto">
          <StatItem value={bestCase} label="BEST CASE" />
          <StatItem value={worstCase} label="WORST CASE" />
        </div>
    </div>
  );
}