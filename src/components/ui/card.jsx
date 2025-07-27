// Simple Card component for shadcn/ui compatibility
export function Card({ children, ...props }) {
  return <div className="rounded-xl border bg-white text-black shadow" {...props}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div className="p-6 pt-0" {...props}>{children}</div>;
}
