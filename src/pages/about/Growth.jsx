import React from "react";

const Growth = () => {
  const data = [
    {
      id: 1,
      amount: 12,
      title: "award for digital innovatio",
    },
    {
      id: 2,
      amount: 99,
      title: "projects success rate 99%",
    },
  ];
  return (
    <div
      data-scroll-section
      className="text-white px-[60px] flex font-hero-light my-[120px]"
    >
      <div className="left-section w-2/3 ">
        <h1
          className="title text-[36px] capitalize loco-growth-text"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
        >
          We craft smart, scalable strategies that <br /> spark real growth
        </h1>
        <p
          className="description text-[32px] font-light loco-growth-text"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
        >
          From strategy to execution, our expert teams bring your vision to
          life.
          <br /> The real measure of success? When clients choose us again.
        </p>
      </div>
      <div className="right-section w-1/3 flex-1 relative">
        <div
          key={data[0].id}
          className="flex items-center right-1/2 justify-center text-center flex-col w-[170px] h-[170px] rounded-full absolute bg-[#ffffff29] loco-growth-circle"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
        >
          <h1 className="text-[36px] font-bold">{data[0].amount}+</h1>
          <p className="text-[16px] font-light">{data[0].title}</p>
        </div>
        <div
          key={data[1].id}
          className="flex px-4  bottom-0 left-1/2 items-center justify-center text-center flex-col w-[170px] h-[170px] rounded-full absolute bg-[#ffffff29] loco-growth-circle"
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
        >
          <h1 className="text-[36px] font-bold">{data[1].amount}+</h1>
          <p className="text-[16px] font-light ">{data[1].title}</p>
        </div>
      </div>
    </div>
  );
};

export default Growth;
