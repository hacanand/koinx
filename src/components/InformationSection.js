import React from "react";
import FinancialAdviceSection from "./FinancialAdviceSection";

function InformationSection() {
  return (
    <section className="flex flex-col px-6 pt-7 bg-white rounded-lg max-w-full max-md:px-5">
      <h1 className="text-2xl font-semibold leading-5 text-slate-900 max-md:max-w-full">
        About Bitcoin
      </h1>
      <Article
        title="What is Bitcoin?"
        content="Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC."
      />
      <Divider />
      <Article
        title="Lorem ipsum dolor sit amet"
        content="Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique phasellus. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pellentesque id volutpat."
      />
      <Divider />
      <FinancialAdviceSection/>
      <Divider />
      <p className="mt-4 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
        <br />
        <br />
      </p>
    </section>
  );
}

function Article({ title, content }) {
  return (
    <>
      <h2 className="mt-8 text-lg font-bold leading-5 text-slate-900 max-md:max-w-full">
        {title}
      </h2>
      <p className="mt-2.5 text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
        {content}
      </p>
    </>
  );
}

function Divider() {
  return (
    <hr className="shrink-0 mt-4 h-px bg-slate-300 opacity-50 max-md:max-w-full" />
  );
}

 
 
export default InformationSection;
