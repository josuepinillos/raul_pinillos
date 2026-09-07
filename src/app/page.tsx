import { About } from "@/components/site/about";
import { Audiences } from "@/components/site/audiences";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Levels } from "@/components/site/levels";
import { Method } from "@/components/site/method";
import { Navbar } from "@/components/site/navbar";
import { Path } from "@/components/site/path";
import { Testimonials } from "@/components/site/testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Levels />
        <Method />
        <Audiences />
        <Path />
        <About />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
