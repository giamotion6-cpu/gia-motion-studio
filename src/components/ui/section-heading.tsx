import type { ReactNode } from "react";

export function SectionHeading({
  index,
  eyebrow,
  title,
  side,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  side?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {side ? <div className="section-heading__side">{side}</div> : null}
    </div>
  );
}
