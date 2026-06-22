import React from "react";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Thank You 💛</h1>

        <p className="text-gray-600 mb-6">
          We got your message and we're excited to learn more about your
          business. Gabbi will be in touch soon to set up a quick,
          no-pressure call.
        </p>

        <a
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default ThankYouPage;
