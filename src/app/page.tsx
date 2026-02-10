import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { CommonIssues } from "@/components/sections/CommonIssues";
import { CourseDetails } from "@/components/sections/CourseDetails";
import { Differentials } from "@/components/sections/Differentials";
import { LearningOutcomes } from "@/components/sections/LearningOutcomes";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Curriculum } from "@/components/sections/Curriculum";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <CommonIssues />
        <CourseDetails />
        <Differentials />
        <LearningOutcomes />
        <Testimonials />
        <Pricing />
        <Curriculum />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
