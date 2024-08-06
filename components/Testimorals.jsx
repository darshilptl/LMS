"use client";
import React from "react";
import { TestimoralsUI } from "./ui/Testimorals";

export function Testimorals() {
  return (
    <>
      <section className="relative dark:bg-gray-950 bg-white">
        <div className="h-[48rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
          <div className="text-center relative">
            <div
              className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
              style={{
                background:
                  "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
              }}
            ></div>
            <div className="text-left mb-20 dark:text-gray-400 text-gray-950">
              <h2 className="text-3xl font-bold   flex justify-center items-center dark:text-white text-gray-950">
                Testimorals
              </h2>
              <div className="relative mt-2  flex justify-center items-center">
                <div className="h-1 bg-blue-400 w-1/6 rounded-lg"></div>
              </div>
            </div>
            <h2 className="mb-20 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>
          <TestimoralsUI items={testimonials} direction="right" speed="slow" />
        </div>
      </section>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Working with CraftlyTech has been a game-changer for our Sarvman Health Website. Their team developed a stunning and user-friendly website for us using the latest technologies like Next.js, Tailwind CSS, Express.js and MongoDB for database. The project was delivered on time and exceeded our expectations. We highly recommend CraftlyTech for any web development needs.",
    name: "Dr.Tanvi Patel"
  },
  {
    quote:
      "CraftlyTech provided outstanding support for my mobile app . They guided me through the entire process, from initial concept to final deployment, ensuring the app was optimized for performance and user experience. Their professionalism and dedication made my app a success.",
    name: "Deepak Patel"
  },
  {
    quote: "CraftlyTech's ability to deliver complex projects on time and within budget is impressive. They developed a robust Learning Management System (LMS) for my academic project, incorporating secure user authentication and a streamlined course enrollment process. Their team is highly skilled and professional, making them a reliable partner for any development project.",
    name: "Palak Patel"
  },
];
