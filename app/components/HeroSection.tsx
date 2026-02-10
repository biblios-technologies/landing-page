import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import b1 from '../images/final_B1.png';
import b2 from '../images/final_B2.png';
import i from '../images/final_i.png';
import l from '../images/final_L.png';
import o from '../images/final_O.png';
import s from '../images/final_S.png';



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
          <div className="inline-flex items-center gap-2 bg-transparent border border-black/20 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="text-sm font-medium text-[#30b7f9]/75">
              Restoring Biblical Christianity
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-2 justify-center items-center mt-12">
            <h1 className={`ont-bold welcome-size flex justify-center gap-1`}>
              <span><img
                  src={b1}
                  alt="Biblios Logo"
                  width={105}
                />
              </span>
              <span><img
                  src={i}
                  alt="Biblios Logo"
                  width={46}
                />
              </span>
              <span><img
                  src={b2}
                  alt="Biblios Logo"
                  width={105}
                />
              </span>
              <span><img
                  src={l}
                  alt="Biblios Logo"
                  width={86}
                />
              </span>
              <span><img
                  src={i}
                  alt="Biblios Logo"
                  width={46}
                />
              </span>
              <span><img
                  src={o}
                  alt="Biblios Logo"
                  width={108}
                />
              </span>
              <span><img
                  src={s}
                  alt="Biblios Logo"
                  width={106}
                />
              </span>
            </h1>
            <p className="text-3xl mt-2 font-normal text-[#fdc61d]" style={{ letterSpacing: "0.40em" }}>TECHNOLOGIES</p>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-lg text-black/50 max-w-2xl mx-auto mb-10 mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We build purposeful technology that helps disciples grow, churches
            thrive, and the Gospel advance to the ends of the earth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button className="bg-[#30b7f9]/75 hover:bg-[#30b7f9]/80 text-white" onClick={onScrollToContact}>
              Connect With Us
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              className="text-[#30b7f9]/75 bg-white/40 border-[#30b7f9]/75 hover:bg-[#30b7f9]/75 hover:text-white"
              onClick={() =>
                document
                  .getElementById("mission")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn Our Mission
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-black/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#30b7f9]/75 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
