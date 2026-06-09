import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [activeBg, setActiveBg] = useState(1);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBg((prev) => (prev === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const bg1Opacity = activeBg === 1 ? "opacity-100" : "opacity-0";
  const bg2Opacity = activeBg === 2 ? "opacity-100" : "opacity-0";

  return (
    <div className="mt-[-49px] w-full">
      <section className=" w-full max-w-none overflow-hidden">
        <div className="relative grid min-h-[520px] grid-cols-1 gap-10 px-10 pt-[11rem] pb-10 md:grid-cols-2 pl-[4.5rem] pr-[4.5rem]">
          <div className="absolute inset-0">
            <div
              id="heroBg1"
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${bg1Opacity}`}
              style={{ backgroundImage: "url('./images/hero-bg-1.png')" }}
              aria-hidden="true"
            ></div>
            <div
              id="heroBg2"
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${bg2Opacity}`}
              style={{ backgroundImage: "url('./images/hero-bg-2.png')" }}
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 bg-black/55"
              aria-hidden="true"
            ></div>
          </div>

          <div className=" relative flex flex-col" data-aos="fade-right">
            <div className="flex items-center gap-3 text-sm font-semibold text-white/90">
              <span>Trusted By 100+</span>
              <img
                src="/images/Group 3.png"
                alt="Trusted badge"
                className="h-6 w-auto"
                aria-hidden="true"
              />
            </div>

            <h1 className="mt-6 max-w-[520px] text-[52px] font-extrabold leading-[1.05] text-white">
              <span
                className="text-[#007BFF] text-[50px] font-semibold leading-[62px]"
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  color: "oklch(0.623 0.214 259.815)",
                }}
              >
                Foko Removals
              </span>
              <span
                className="text-[50px] font-semibold leading-[62px]"
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  color: "rgb(255, 255, 255)",
                }}
              >
                – Your
              </span>
              <span
                className="block text-[50px] font-semibold leading-[62px]"
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  color: "rgb(255, 255, 255)",
                }}
              >
                Move, Our Mission
              </span>
            </h1>

            <p
              className="mt-4 max-w-[520px]"
              style={{
                fontFamily: "Arial",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "26px",
                color: "rgb(197, 207, 227)",
              }}
            >
              Reliable man &amp; van and removal services, Based in
              Loughborough, serving across the UK.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="tel:07920021955"
                className="flex w-fit items-center gap-3 text-white/90"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.6 10.8c1.3 2.6 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[16px] font-semibold">07920021955</span>
              </a>

              <a
                href="mailto:info@fokoremovals.co.uk"
                className="flex w-fit items-center gap-3 text-white/90"
              >
                <span
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-1 ring-white/15"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-.5 2L12 12.8 4.5 8h15z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-[16px] font-semibold">
                  info@fokoremovals.co.uk
                </span>
              </a>
            </div>
          </div>

          <div className="relative flex items-start justify-end">
            <form
              className="w-full max-w-[420px] rounded-[18px] bg-white/10 p-8 text-white backdrop-blur-md ring-1 ring-white/15"
              data-aos="fade-left"
            >
              <h2
                style={{
                  fontFamily:
                    'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "32px",
                  color: "rgb(255, 255, 255)",
                }}
              >
                Client Contact Form
              </h2>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="text-[14px] font-semibold">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full border-b border-white/35 bg-transparent pb-3 text-[14px] text-white placeholder:text-white/60 focus:border-white/70 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[14px] font-semibold">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full border-b border-white/35 bg-transparent pb-3 text-[14px] text-white placeholder:text-white/60 focus:border-white/70 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[14px] font-semibold">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 w-full border-b border-white/35 bg-transparent pb-3 text-[14px] text-white placeholder:text-white/60 focus:border-white/70 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[14px] font-semibold">Address</span>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="mt-2 w-full border-b border-white/35 bg-transparent pb-3 text-[14px] text-white placeholder:text-white/60 focus:border-white/70 focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-[14px] font-semibold">Message</span>
                  <textarea
                    rows="2"
                    placeholder="Type your message..."
                    className="mt-2 w-full resize-none bg-transparent pb-3 text-[14px] text-white placeholder:text-white/60 focus:outline-none"
                  ></textarea>
                </label>
              </div>

              <div className="mt-8">
                <div className="h-px w-full bg-white/25"></div>
                <button
                  type="button"
                  className="mt-7 w-full rounded-full bg-[#1E6BFF] py-4 text-[22px] font-semibold text-white hover:bg-[#155BFF] focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
