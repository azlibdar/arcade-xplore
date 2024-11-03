interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorClass = score >= 75 ? "text-green-400" : score >= 50 ? "text-amber-400" : "text-zinc-400";
  return (
    <span title="Critic score" className={`${colorClass} py-1 h-min px-2 font-medium rounded-md text-sm bg-zinc-700`}>
      {score}
    </span>
  );
};

export default CriticScore;
