import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TypingAnimation from "../components/TypingAnimation";

const page = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-screen flex justify-start text-left px-6"
        style={{
          backgroundImage: "url('/background_img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          opacity: 0.5,
        }}
      >
        <div className="max-w-lg">
          <div className="p-4 mt-10 h-[300px]">
            <h2 className="text-5xl font-extrabold text-[#F3AAFF] leading-relaxed">
              Transform Your Fitness Journey
              <br />
              <span className="">
                <TypingAnimation text="Physical Fitness" delay={200} />
              </span>
            </h2>
          </div>
          <div className="p-4 w-[350px]">
            <p className="mt-4 text-lg">
              Track workouts, monitor progress, and achieve your fitness goals
              with FitLife.
            </p>
          </div>
          <div className="p-4">
            <button className="mt-6 px-6 py-3 cursor-pointer bg-[#F3AAFF] text-[#110B20] rounded-full hover:bg-[#3F125E] hover:text-[#F7C1EB] transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <section
          className="py-20 px-6 h-screen"
          style={{
            backgroundImage: "url('/image2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-6xl font-bold text-center text-[#F5B1FD]">
            Personalized Training Guide
          </h2>
        </section>

        <section
          className="py-20 px-6 h-screen"
          style={{
            backgroundImage: "url('/image3.jpg')",
            backgroundSize: "auto",
            backgroundPosition: "right",
            opacity: 0.5,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-6xl font-bold text-left text-[#F5B1FD]">
            GYM Bro's Community
          </h2>
        </section>

        <section
          className="py-20 px-6 h-screen"
          style={{
            backgroundImage: "url('/image4.webp')",
            backgroundSize: "auto",
            backgroundPosition: "left",
            opacity: 0.5,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-6xl font-bold text-right text-[#F5B1FD]">
            Track your progress
          </h2>
        </section>

        <section
          className="py-20 px-6 h-screen"
          style={{
            backgroundImage: "url('/image5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right",
            opacity: 0.2,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-6xl font-bold text-left text-[#F5B1FD]">
            Know your food
          </h2>
        </section>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 w-full h-screen">
        <div className="flex justify-center items-center h-full w-full">
          <h1 className="text-6xl">About</h1>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-6  text-center">
        <Footer/>
      </footer>
    </div>
  );
};

export default page;
