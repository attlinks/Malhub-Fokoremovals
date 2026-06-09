import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-slate-100 p-6">
      <header className="flex w-full justify-center">
        <nav
          className="fixed top-10 left-1/2 -translate-x-1/2 right-0 z-50 w-full max-w-[760px] rounded-[12px] border border-slate-200 bg-white px-7 shadow-sm"
          aria-label="Primary"
        >
          <div className="flex h-[60px] items-center gap-4">
            <a href="#" className="flex shrink-0 items-center gap-4">
              <span
                className="grid h-11 w-11 place-items-center rounded-full bg-white"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-10 w-10 text-[#007BFF]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="12"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="4"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <circle cx="24" cy="24" r="2.5" fill="currentColor" />
                </svg>
              </span>
              <span className="font-[Sansation,_sans-serif] text-[24px] font-bold leading-[24px] text-[#007BFF]">
                FOKOREMOVALS
              </span>
            </a>

            <ul className="ml-auto flex items-center gap-10 font-[Arial,_sans-serif] text-[22px] font-medium">
              <li>
                <Link to="/" className="text-[#007BFF]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 hover:text-[#007BFF]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-slate-500 hover:text-[#007BFF]"
                >
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
