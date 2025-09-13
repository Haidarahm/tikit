import React from "react";
import ScrollStack, { ScrollStackItem } from "../../components/ScrollStackItem";

function Goals() {
  return (
    <div className=" section font-hero-light flex flex-col mx-auto  h-[calc(100%-104px)] mt-[104px]  z-10 w-6/7 justify-center">
      <ScrollStack className="h-full w-full">
        <ScrollStackItem>
          <h2>Card 1</h2>
          <p>This is the first card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
          <p>This is the second card in the stack</p>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
          <p>This is the third card in the stack</p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
}

export default Goals;
