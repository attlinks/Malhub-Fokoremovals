import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const cards = [
    {
      src: "/images/adam%20mover%201.png",
      title: "House Removals",
      description:
        "Trusted experts in home and office furniture collection and timely delivery.",
    },
    {
      src: "/images/relocate.png",
      title: "Office Relocation",
      description:
        "Seamless moves that minimize downtime and keep your business running smoothly.",
    },
    {
      src: "/images/move.png",
      title: "Man & Van Services",
      description:
        "Flexible transport solutions for small or large moves at short notice.",
    },
  ];

  const offerCards = [
    {
      src: "/images/furniture.png",
      title: "Furniture and Delivery",
      description:
        "Reliable pick-up and drop-off of furniture, handled with care and efficiency.",
    },
    {
      src: "/images/time.png",
      title: "Same day Or Booked",
      description: "Urgent or planned moves delivered on time, every time.",
    },
    {
      src: "/images/world.png",
      title: "Local & National",
      description:
        "Wherever you're headed in the UK, we're ready to get you there.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div data-aos="fade-up" className="max-w-xl">
            <h2 className="font-serif text-[44px] leading-[1.05] text-slate-900 md:text-[52px]">
              What we offer at
            </h2>
            <h3
              className="mt-3 md:text-[48px]"
              style={{
                fontFamily: "Inter",
                fontSize: "50px",
                fontWeight: 500,
                lineHeight: "67px",
                color: "oklch(0.546 0.245 262.881)",
              }}
            >
              Fokoremovals
            </h3>
            <p
              className="mt-6 max-w-md"
              style={{
                fontFamily: "Arial",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(126, 139, 165)",
              }}
            >
              Trusted experts in home and office relocations, furniture
              collection and timely delivery
            </p>
          </div>

          <p
            data-aos="fade-up"
            className="max-w-xs md:pt-2 text-left"
            style={{
              fontFamily: "Arial",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "rgb(126, 139, 165)",
            }}
          >
            More than 100 Homes, offices, companies have used our services
            during the years.
          </p>
        </div>

        <div
          data-aos="zoom-in-up"
          className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-[440px] flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_40px_90px_rgba(37,99,235,0.28),0_28px_60px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70"
            >
              <div className="group relative h-[300px] w-full overflow-hidden">
                <img
                  src={card.src}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex-1 px-7 py-7">
                <h4 className="text-[18px] font-semibold text-slate-900">
                  {card.title}
                </h4>
                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          data-aos="zoom-in-up"
          className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10"
        >
          {offerCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/70"
            >
              <div className="relative h-[280px] w-full overflow-hidden">
                <img
                  src={card.src}
                  alt=""
                  className="h-full w-full object-cover transition-all duration-500 ease-out hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="px-6 py-8">
                <h4 className="text-[20px] font-semibold text-slate-900">
                  {card.title}
                </h4>
                <p className="mt-3 text-[14px] leading-6 text-slate-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[18px] font-semibold text-[#007BFF] hover:text-[#155BFF]"
          >
            <span>See All What We Offer</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Offer2;
