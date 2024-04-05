import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="mt-16" id="about">
      <SectionHeader subHeader={'Our story'} mainHeader={'About us'} />
      <div className="text-lg text-balance mx-auto max-w-2xl text-center mt-4 text-gray-700 flex flex-col gap-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quaerat quidem quibusdam quod, quasi, quod, quaerat quaerat
          quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat.
        </p>
        <p>Quisquam
          quaerat quidem quibusdam quod, quasi, quod, quaerat quaerat
          quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat.
        </p>
        <p>
          Quaerat quidem quibusdam quod, quasi, quod, quaerat quaerat
          quaerat quaerat quaerat quaerat quaerat quaerat quaerat quaerat.
        </p>
      </div>
    </section>
  )
}