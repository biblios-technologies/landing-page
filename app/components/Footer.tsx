import { BookOpen, Heart } from "lucide-react";
import b1 from '../images/final_B1.png';

const Footer = () => {
  return (
    <footer className="bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center">
                <img
                  src={b1}
                  alt="Biblios Logo"
                  width={40}
                  />
              </a>
          </div>

          {/* Copyright */}
          <div className="text-black/60 text-sm">
            © {new Date().getFullYear()} Biblios Technologies. All rights
            reserved.
          </div>
        </div>

        {/* Scripture */}
        <div className="mt-8 pt-8 border-t border-black/10 text-center">
          <p className="text-black/40 text-sm italic">
            "He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ."
          </p>
          <p className="text-[#30b7f9]/60 text-xs mt-2">— Colossians 1:28</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
