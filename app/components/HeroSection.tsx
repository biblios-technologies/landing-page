import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import BibliosLogo from '../images/Biblios Official Logo.png';



interface HeroSectionProps {
  onScrollToContact: () => void;
}

const HeroSection = ({ onScrollToContact }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6CC75B]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#30b7f9]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-10 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-transparent border border-black/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 md:mb-8 animate-fade-up">
            <span className="text-xs sm:text-sm md:text-base font-medium text-[#30b7f9]/75">
              Restoring Biblical Christianity
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2 justify-center items-center mt-8 md:mt-12">
            <h1 className={`ont-bold welcome-size flex justify-center gap-1`}>
              <span><img
                  src={BibliosLogo}
                  alt="Biblios Logo"
                  className="
                    w-72
                    sm:w-72
                    md:w-[420px]
                    lg:w-[600px]
                    h-auto
                  "
                />
              </span>
            </h1>
            <p className="
              mt-2
              font-normal
              text-[#fdc61d]
              tracking-[0.25em]
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
            "
            style={{ letterSpacing: "0.40em" }}>TECHNOLOGIES</p>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-md md:text-xl text-black/50 max-w-2xl mx-auto mb-8 md:mb-10 mt-4 md:mt-6 px-2 animate-fade-up">
            We build purposeful technology that helps disciples grow, churches
            thrive, and the Gospel advance to the ends of the earth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              className="text-[#30b7f9]/75 bg-white/40 border-[#30b7f9]/75 hover:bg-[#30b7f9]/75 hover:text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3" onClick={onScrollToContact}>
              Connect With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              className="bg-[#30b7f9]/75 hover:bg-[#30b7f9]/80 text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              onClick={() =>
                document
                  .getElementById("story")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-black/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#30b7f9]/75 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
