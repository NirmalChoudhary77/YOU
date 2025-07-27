// Simple Button component for shadcn/ui compatibility
export function Button({ children, ...props }) {
  return <button className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 transition" {...props}>{children}</button>;
}
