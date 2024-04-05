export function Button({ children }) {
  return (
    <button className="bg-primary text-alice px-4 py-2 rounded-lg hover:scale-105 transition-transform flex text-sm items-center justify-center">
      {children}
    </button>
  )
}