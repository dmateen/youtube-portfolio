import TableSection from "@/components/ui/landingPage/tableSection";
import { formatNumber } from "@/utils/common";
import { api_url } from "@/utils/urls";
import { getYoutubeData } from "./api/getYoutubeData";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { CiUnlock } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa6";
import { VideosList } from "@/components/custom/videosList";
import { formatNumberWithCommas } from "./utils/utility";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavBar } from "@/components/custom/navbar";
import { AccordionWrapper } from "@/components/custom/accordionWrapper";
import { WordsSeperator } from "@/components/custom/wordsSeperator";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import HeroCTA from "@/components/custom/heroCTA";
import Hero from "@/components/custom/hero";
import Portfolio from "@/components/custom/portfolio";
import FAQ from "@/components/custom/faq";
import Footer from "@/components/custom/footer";
import Contact from "@/components/custom/contact";

export default async function Page() {
  const response = await getYoutubeData();

  return (
    <>
      <NavBar />
      <Hero />
      <Portfolio data={response} />
      <WordsSeperator />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export const metadata = {
  title: "Youtube Portfolio",
  description: "Youtube Portfolio website",
};
