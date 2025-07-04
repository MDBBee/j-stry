import React from "react";

const Intro = () => {
  return (
    <div className="space-y-6 w-[30rem] mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-chart-2 text-center mt-10">
          Track. Reflect. and Improve.
        </h1>
        <h2 className="text-2xl font-bold text-primary text-center ">
          Your Job Search Starts Here.
        </h2>
      </div>
      <p className="text-muted-foreground text-justify">
        Looking for a better way to organize your job hunt? Our platform helps
        you document every step of your job search—from applications and
        interviews to follow-ups and rejections. With built-in support from a
        LangGraph-powered agent, you can refine your resume, cover letters, and
        outreach messages with AI assistance. Whether you are actively applying
        or just starting out, this is your space to stay focused, stay
        motivated, and make every application count.
      </p>
    </div>
  );
};

export default Intro;
