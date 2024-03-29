import CardSpotlightEffect from "@/components/CardSpotlight";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mb-28">
      <MaxWidthWrapper>
      <div>
        <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl md:text-[2.8rem] lg:text-[2.8rem] pt-28 text-white">
          <span className="text-[#059669]">Detective ML </span>
          <div className="max-w-2xl">
            Detection of Student Steps in Sneakers & Heels using ML.
          </div>
        </h1>
      </div>

      <div className="pb-20">
            <Link target="_blank" href={"https://teachablemachine.withgoogle.com/models/5ohG-fDB6/"}>
              <Button
                size="lg"
                className="bg-[#059669] mt-14 mr-2 text-black text-white border-[#31c497] hover:bg-[#059669]"

              >
                Try Now
              </Button>
            </Link>
            <Link href="https://github.com/amanibobo">
              <Button
                size="lg"
                className="text-white bg-[#222222] hover:text-white border border-[#3b3b3b] hover:bg-[#222222]"
              >
                GitHub
              </Button>
            </Link>
          </div>

          <div className="flex">
            <CardSpotlightEffect title = "Blazingly Fast" description="TensorFlow is an open-source library for machine learning applications. " />
            <CardSpotlightEffect title="Created with Teachable Machine" description="Teachable Machine is a tool that allows users to train machine learning models without coding."/>
            <CardSpotlightEffect title="Use of ML" description="Using modern day technologys, we were able to create this Model"/>
          </div>
      </MaxWidthWrapper>
    </section>
  );
}
