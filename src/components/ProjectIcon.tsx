type IconType = "heart" | "sunset" | "waves" | "circle" | "chart" | "code";

const styles: Record<IconType, string> = {
  heart: "bg-rose-500/20 text-rose-400",
  sunset: "bg-amber-500/20 text-amber-400",
  waves: "bg-blue-500/20 text-blue-400",
  circle: "bg-violet-500/20 text-violet-400",
  chart: "bg-emerald-500/20 text-emerald-400",
  code: "bg-cyan-500/20 text-cyan-400",
};

export function ProjectIcon({ type }: { type: IconType }) {
  return (
    <div
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles[type] ?? styles.circle}`}
    >
      {type === "heart" && "♥"}
      {type === "sunset" && "◐"}
      {type === "waves" && "∿"}
      {type === "circle" && "○"}
      {type === "chart" && "▦"}
      {type === "code" && "</>"}
    </div>
  );
}
