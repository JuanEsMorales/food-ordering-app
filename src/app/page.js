import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { HomeMenu } from "@/components/HomeMenu";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HomeMenu />
        <About />
        <Contact />
      </main>
    </>
  );
}
