import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="mt-16 text-center flex flex-col gap-5">
      <SectionHeader mainHeader={'Contact us'} subHeader={'Don\'t hesitate'} />
      <a href="tel:+573112345670" className="text-gray-700 text-2xl underline">+57 3112345670</a>
    </section>
  )
}