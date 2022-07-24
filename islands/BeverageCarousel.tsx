/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { BeverageSummary } from "../types/Beverages.ts";

interface BeverageCarouselProps {
  beverages: BeverageSummary[];
}

const BeverageCarousel = ({ beverages }: BeverageCarouselProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const buttonClass = tw
    `p-2 bg-yellow-300 text-gray-800 text-xl font-extrabold hover:(bg-black text-yellow-300)`;

  const getBeverageTextStyle = (index: number) => {
    return index === currentItemIndex
      ? tw
        `bg-gray-800 text-yellow-300 hover:(text-gray-800 bg-yellow-300) focus:(bg-gray-800 text-yellow-300)`
      : tw
        `text-gray-800 bg-yellow-300 hover:(bg-gray-800 text-yellow-300) focus:(bg-gray-800 text-yellow-300)`;
  };

  const previousSlide = () =>
    setCurrentItemIndex((prevCurrentItemIndex) =>
      prevCurrentItemIndex === 0
        ? beverages.length - 1
        : prevCurrentItemIndex - 1
    );

  const nextSlide = () =>
    setCurrentItemIndex((prevCurrentItemIndex) =>
      prevCurrentItemIndex === beverages.length - 1
        ? 0
        : prevCurrentItemIndex + 1
    );

  return (
    <div class={tw`flex flex-col content-center items-center gap-4`}>
      <nav class={tw`my-3`}>
        {beverages.map(({ id, name }, index) => (
          <button
            href={`/beverages/${id}`}
            class={tw`p-2 font-semibold ${getBeverageTextStyle(index)} `}
            onClick={() => setCurrentItemIndex(index)}
          >
            {name}
          </button>
        ))}
      </nav>
      <div class={tw`w-3/4 mx-auto flex flex-row justify-between items-center`}>
        <button
          class={buttonClass}
          onClick={previousSlide}
          disabled={!IS_BROWSER}
        >
          {"<"}
        </button>
        <div
          class={tw`flex flex-col justify-center items-center gap-1 w-full `}
        >
          <a
            href={`/beverages/${beverages[currentItemIndex].id}`}
            class={tw`h-64`}
          >
            <img
              class={tw`w-full h-full`}
              src={beverages[currentItemIndex].imageUrl}
              alt={beverages[currentItemIndex].shortDescription}
            />
          </a>
          <p class={tw`text-lg font-bold text-gray-700`}>
            {beverages[currentItemIndex].shortDescription}
          </p>
        </div>
        <button class={buttonClass} onClick={nextSlide} disabled={!IS_BROWSER}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default BeverageCarousel;
