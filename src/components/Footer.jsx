import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0065ff] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h2 className="text-[42px] font-semibold tracking-[-0.03em] sm:text-[48px]">
            Get a Free Quote Today
          </h2>
          <p className="mt-3 text-[18px] text-slate-100/90">Ready to move?</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white text-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] p-6 md:p-10">
            <div className="space-y-8 rounded-[1.75rem] bg-white p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8F0FF] text-[#1E6BFF]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.6 10.8c1.3 2.6 3.9 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8z" />
                    </svg>
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E7FBD8]">
                    <img
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      className="h-6 w-6"
                    />
                  </span>
                  <p className="text-lg font-semibold text-slate-900">
                    07920021955
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8F0FF] text-[#1E6BFF]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 6H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-.5 2L12 12.8 4.5 8h15z" />
                    </svg>
                  </span>
                  <p className="text-lg font-semibold text-slate-900">
                    info@fokoremovals.co.uk
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8F0FF] text-[#1E6BFF]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      29 Middle Avenue, Loughborough
                    </p>
                    <p className="text-sm text-slate-500">LE11 5HZ</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[#F3F8FE] p-6 shadow-sm md:p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-900">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Type your message..."
                    className="mt-3 w-full border-b border-slate-300 bg-transparent pb-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-slate-500 resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 w-full rounded-full bg-[#1E6BFF] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#155BFF]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-slate-100/90 pt-8">
          © 2025 FOKOREMOVALS Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
