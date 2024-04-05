import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeMenu } from "@/components/HomeMenu";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeMenu />
        <About />
        <Contact />
      </main>
      <footer className="mt-16">
        <p className="text-sm text-center text-gray-600">
          &copy; 2024 All rights reserved
        </p>
      </footer>
    </>
  );
}
