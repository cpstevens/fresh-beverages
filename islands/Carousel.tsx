/** @jsx h */
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CarouselItem {
  imageUrl: string;
  href: string;
  copy: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const buttonClass = tw
    `p-2 bg-yellow-300 text-black hover:(bg-black text-yellow-300)`;

  const previousSlide = () =>
    setCurrentItemIndex((prevCurrentItemIndex) =>
      prevCurrentItemIndex === 0 ? items.length - 1 : prevCurrentItemIndex - 1
    );

  const nextSlide = () =>
    setCurrentItemIndex((prevCurrentItemIndex) =>
      prevCurrentItemIndex === items.length - 1 ? 0 : prevCurrentItemIndex + 1
    );

  return (
    <div class={tw`w-3/4 mx-auto flex flex-row justify-between items-center`}>
      <button
        class={buttonClass}
        onClick={previousSlide}
        disabled={!IS_BROWSER}
      >
        {"<"}
      </button>
      <div class={tw`flex flex-col justify-center items-center gap-1 w-full `}>
        <a href={items[currentItemIndex].href} class={tw`h-64`}>
          <img
            class={tw`w-full h-full`}
            src={items[currentItemIndex].imageUrl}
            alt={items[currentItemIndex].copy}
          />
        </a>
        <p class={tw`text-lg font-bold text-gray-700`}>
          {items[currentItemIndex].copy}
        </p>
      </div>
      <button class={buttonClass} onClick={nextSlide} disabled={!IS_BROWSER}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
