"use client";
import React from "react";
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      // key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg dark:text-white text-gray-950 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 dark:text-white text-gray-950 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 dark:text-white text-gray-950ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="dark:text-white text-gray-950">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const LMSFAQ = () => {
  const faqsList = [
    {
      q: "Will I receive a certificate for each course?",
      a: "Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!",
    },
    {
      q: "Can I get source code of each course?",
      a: "Yes - You will get source code of all courses when you will watch the course video.",
    },
    {
      q: "Can I ask about anything related course or if my code dosen't work?",
      a: "Yes, you can comment on every part of the videos in the course. We'll always try to reply to your comment and fix any issues you may have.",
    },
    {
      q: "Can I download any course videos?",
      a: "For security reasons, course videos cannot be downloaded. However, you have lifetime access to each purchased course and can watch them anytime, anywhere with your account",
    },
  ];

  return (
    <>
      <section className="leading-relaxed max-w-screen-2xl mx-auto px-4 md:px-8 dark:bg-gray-950 bg-white ">
      <div className="text-left mb-14 dark:text-white text-gray-950 ">
          <h2 className="text-3xl font-bold   flex justify-center items-center dark:text-white text-gray-950">
            FAQ
          </h2>
          <div className="relative mt-2  flex justify-center items-center">
            <div className="h-1 bg-blue-400 w-20 rounded-lg"></div>
          </div>
        </div>
        <div className="space-y-3 text-center">
          <h1 className="text-3xl dark:text-white text-gray-950font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default LMSFAQ;
