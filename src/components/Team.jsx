import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="py-16 px-6 text-center text-black bg-white">
        <div className="mx-auto max-w-5xl">
          <h1
            data-aos="fade-down"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "36px",
              fontWeight: 500,
              lineHeight: "36px",
              color: "rgb(26, 26, 26)",
            }}
          >
            Speak with our experienced
            <span className="block" style={{ color: "rgb(26, 26, 26)" }}>
              team at <span className="text-[#007BFF]">Fokoremovals</span>
            </span>
          </h1>
          <p
            data-aos="fade-down"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(73, 80, 87)",
            }}
            className="mt-3"
          >
            We are available 24/7, we work round the clock.
          </p>
          <p
            data-aos="fade-up"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(73, 80, 87)",
            }}
            className="mt-1"
          >
            Your Request, We Answer
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white mt-[-6rem]">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div data-aos="fade-right" className="space-y-8">
            <p className="max-w-xl text-base leading-7 text-slate-700">
              Our friendly, knowledgeable staff are here to answer your
              questions, plan your move, and make sure everything runs smoothly.
              Whether you're relocating your home or business, we'll guide you
              through every step and tailor our services to your needs.
            </p>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Exceptional Service Quality:
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
                We combine professional handling, punctual arrivals, and
                flexible options to deliver smooth, stress-free moves every
                time.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Outstanding Customer Care:
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-700">
                Our responsive, friendly team listens, advises, and keeps you
                updated at every stage to ensure your complete satisfaction.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/images/gpt.png"
              alt="24/7 service"
              className="max-w-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
