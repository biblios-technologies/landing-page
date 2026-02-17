import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar, MessageCircle, Phone } from "lucide-react";

const FOUNDER_PHONE = "+1 (470) 819-3848";
const ZCAL_URL = "https://zcal.co/gabbitaylor/free-consultation";

const ContactCardActions = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated text-center space-y-8">

      <div className="space-y-3">
        <h3 className="text-2xl font-semibold">Connect Here</h3>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Leaders book a time to chat or reach out directly to the founder. We’d love to
          hear about your church and how we can serve you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        {/* ZCal Button */}
        <Button
          size="lg"
          className="bg-[#30b7f9]"
          onClick={() => window.open(ZCAL_URL, "_blank")}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a meeting
        </Button>

        {/* Text Founder Button */}
        <Button
          size="lg"
          variant="outline"
          onClick={() => setShowPhone((prev) => !prev)}
            className={`
                active:bg-transparent
                focus-visible:ring-0
                transition-colors
                hover:border-[#30b7f9] hover:text-[#30b7f9]
                hover:bg-transparent
                ${showPhone ? "border-[#30b7f9] text-[#30b7f9]" : ""}
            `}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Text the founder
        </Button>

      </div>

      {/* Phone reveal */}
      {showPhone && (
        <div className="mt-4 animate-in fade-in slide-in-from-top-2">
          <div className="inline-flex items-center gap-2 text-sm font-sm bg-muted px-3 py-1 rounded-xl">
            <Phone className="w-4 h-4" />
            <a
              href={`sms:${FOUNDER_PHONE.replace(/\D/g, "")}`}
              className="text-[#30b7f9] hover:underline"
            >
              {FOUNDER_PHONE}
            </a>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactCardActions;
