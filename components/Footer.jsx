"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-gray-950 bg-white  h-[310px]  relative">
        <section className="relative">
          <footer className="w-full relative ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">

                {/* CraftlyTech Logo  */}
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    src="/icons/craftlytech.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <span className="text-xl font-semibold">CraftlyTech Inc</span>
                </Link>
                {/* End of CraftlyTech Logo  */}

                {/* Navigation Links */}
                <ul className="text-lg text-center sm:flex items-cente justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
                  <li>
                    <Link
                      href={"/"}
                      className="text-gray-950 dark:text-white font-semibold"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="sm:my-0 my-2">
                    <Link
                      href={"/Pricing"}
                      className="text-gray-950 dark:text-white font-semibold"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/Contact"}
                      className="text-gray-950 dark:text-white font-semibold"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="sm:my-0 my-2">
                    <Link
                      href={"/Terms-Conditions"}
                      className="text-gray-950 dark:text-white font-semibold"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/PrivacyPolicy"}
                      className="text-gray-950 dark:text-white font-semibold"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
                {/* End of Navigation Links */}

                {/* Social Media Icons */}
                <div className="flex  space-x-4 sm:justify-center  ">
                  <div className="flex space-x-10 justify-center items-center ">
                    
                    <Link
                      className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                      href={"https://www.linkedin.com/in/darshil-patel-42307a257"}
                    >
                      <LinkedinIcon className="h-5 w-5 text-white" />
                    </Link>

                    <Link
                      href={"https://x.com/darshilptl03?t=dtVGKJ1YYZb1WwuLRSEp1g&s=09"}
                      className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          id="Vector"
                          d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                          fill="white"
                        />
                      </svg>
                    </Link>

                    <Link
                      className="w-10 h-10 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
                      href={"https://www.instagram.com/craftlytech?igsh=bWVubzE4ZjRmaTls"}
                    >
                      <InstagramIcon className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
                {/* End of Social Media Icons */}

              </div>

              {/* Copyrights Decs  */}
              <div className="py-7 border-t border-gray-700">
                <div className="flex items-center justify-center">
                  <span className="text-gray-950 dark:text-white font-semibold">
                    © 2024 <a href="https://pagedone.io/">CraftlyTech Inc</a>.
                    All rights reserved.
                  </span>
                </div>
              </div>
              {/* End of Copyrights Decs  */}
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default Footer;


//  Icons Declarations

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
