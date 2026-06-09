import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section className=" h-[250px] bg-[#1E6BFF] px-6 text-white flex items-center">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h1
            style={{
              fontFamily: "Inter",
              fontSize: "50px",
              fontWeight: 500,
              lineHeight: "67px",
              color: "rgb(255, 255, 255)",
            }}
            className="pt-[-20px] md:text-[72px]"
          >
            About Us
          </h1>
          <p
            data-aos="fade-up"
            className="mt-2 max-w-3xl"
            style={{
              fontFamily: "Arial",
              fontSize: "14px",
              fontWeight: 200,
              lineHeight: "32px",
              color: "oklab(0.999994 0.0000455678 0.0000200868 / 0.9)",
            }}
          >
            At Foko Removals, we're all about making your move smooth and
            stress-free. Whether it's a single item, full<br></br> house, or
            office relocation — we've got you covered with a friendly team, fair
            prices, and full insurance for<br></br> peace of mind.
          </p>
        </div>

        <div className="flex items-end md:justify-end">
          <p
            className="mt-[8.8rem] text-right"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "oklab(0.999994 0.0000455677 0.0000200868 / 0.7)",
            }}
          >
            Reliable, Fast & Timely
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
