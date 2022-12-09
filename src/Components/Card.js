import React from "react";

function Card() {
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
      <div class="rounded overflow-hidden shadow-lg items-center row-span-3">
        <img
          class="w-full max-h-56"
          src={process.env.PUBLIC_URL + "images/Quotes.jpg"}
          alt="Mountain"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Quote app</div>
          <p class="text-gray-700 text-base">
            A Quote app to add, delete,and comment on yoir favorite qoute.
          </p>
          <p class="text-gray-700 text-base">
            Technology used:- Html, CSS, Reactjs
          </p>
        </div>
        <div className="text-center mx-4 px-6 pt-4 pb-2 rounded-md text-mono text-white ">
          <a
            href="https://quotes-app-6c520.web.app/quotes"
            class="inline-block no-underline hover:text-slate-900 bg-gray-200 rounded-full px-5 py-1 text-sm font-semibold text-gray-700 mr-2 mb-3"
            type="button"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
