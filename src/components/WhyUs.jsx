import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 200,
      once: true,
    });
  }, []);
  return (
    <section className=" w-full bg-white px-6 py-20 text-slate-900">
      <div className=" mx-auto max-w-6xl space-y-16">
        <div
          data-aos="fade-up"
          className=" grid gap-12 grid-cols-1 md:grid-cols-[1.2fr_0.8fr] md:items-start"
        >
          <div className="space-y-6">
            <h2 className="*:text-[48px] font-semibold leading-[1.05] text-slate-950 md:text-[56px]">
              Why choose
            </h2>
            <h3 className="text-[48px] font-semibold leading-[1.05] text-[#1E6BFF] md:text-[56px]">
              Fokoremovals
            </h3>
            <p className="max-w-3xl text-[18px] leading-[1.7] text-slate-500">
              Your trusted partner for stress-free moves<br></br> across the UK.
            </p>
          </div>

          <div className=" flex items-start">
            <p className="text-[18px] leading-[1.7] text-slate-500">
              At Fokoremovalsltd, we combine professionalism, reliability and
              care to make every move smooth and hassle-free.
            </p>
          </div>
        </div>

        <div className="grid gap-6 justify-center md:grid-cols-2 mt-8">
          <article className="group overflow-visible rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-visible rounded-[1.75rem] bg-slate-50 p-6">
              <div className="mt-[-3.8rem] mr-[-3.8rem] ml-[17rem] relative h-[220px] overflow-visible">
                <img
                  src="/images/road.png"
                  alt="Road under truck"
                  className="absolute bottom-0 left-1/2 w-[100%] max-w-[320px] -translate-x-1/2 transition-all duration-500 ease-out group-hover:scale-105"
                />
                <img
                  src="/images/truck.png"
                  alt="Fully Insured Goods in Transit"
                  className="absolute right-0 top-0 z-10 h-[260px] w-auto translate-x-8 -translate-y-8 transition-all duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Fully Insured Goods in Transit
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-500">
                Enjoy complete peace of mind knowing your items are protected
                throughout the move.
              </p>
            </div>
          </article>

          <article className="group overflow-visible rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-visible rounded-[1.75rem] bg-slate-50 p-6">
              <div className="mt-[-3.8rem] relative h-[220px] overflow-visible">
                <img
                  src="/images/courier.png"
                  alt="Professional, Polite, and Punctual"
                  className="absolute inset-x-0 top-0 mx-auto h-[280px] w-auto -translate-y-16 transition-all duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Professional, Polite, and Punctual
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-500">
                Our experienced team delivers a courteous, timely, and
                hassle-free service every time.
              </p>
            </div>
          </article>

          <article className="group overflow-visible rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="relative overflow-visible rounded-[1.75rem] bg-slate-50 p-6">
              <div className="mt-[-3.8rem] relative h-[220px] overflow-visible">
                <img
                  src="/images/courier.png"
                  alt="Affordable and Flexible Options"
                  className="absolute inset-x-0 top-0 mx-auto h-[260px] w-auto -translate-y-16 transition-all duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-slate-950">
                Affordable and Flexible Options
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-500">
                Choose a plan that fits your schedule and budget without
                compromising on quality.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <article className="group flex-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <img
              src="/images/Shop.png"
              alt="Your Belongings Handled with Care"
              className="mb-6 h-[220px] w-full rounded-[1.5rem] object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-slate-950">
              Your Belongings Handled with Care
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-500">
              We treat your possessions as if they were our own, ensuring safe
              transport at every stage.
            </p>
          </article>

          <article className="group flex-1 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <img
              src="/images/map.png"
              alt="Based in Loughborough, Operating UK-Wide"
              className="mb-6 h-[220px] w-full rounded-[1.5rem] object-cover transition-all duration-500 ease-out group-hover:scale-105"
            />
            <h3 className="text-2xl font-semibold text-slate-950">
              Based in Loughborough, Operating UK-Wide
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Local expertise with national reach wherever you're moving, we've
              got you covered.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
