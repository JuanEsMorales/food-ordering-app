export function SectionHeader({subHeader, mainHeader}) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold uppercase">{subHeader}</h3>
      <h2 className="font-extrabold text-4xl text-primary">
        {mainHeader}
      </h2>
    </div>
  )
}