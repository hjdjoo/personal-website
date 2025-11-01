export default function Card({ children }: { children: React.ReactNode }) {

  return (
    <div className="w-full rounded-md bg-gray-500/50 py-12 mb-12">
      {children}
    </div>
  )
}