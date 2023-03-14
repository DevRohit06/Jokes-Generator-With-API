import Output from "./output";
import { useState, useEffect } from "react";
export default function Hero() {
  const [select, setSelect] = useState("joke");
  const [joke, setJoke] = useState([]);
  if (!joke) {
    return console.log("something is wrong");
  }
    const fetchJoke = async () => {
      return fetch(`https://jokes-generator-with-api-bjnu.vercel.app/${select}`)
        .then((response) => response.json())
        .then((data) => setJoke(data) && console.log(data));
    };
    useEffect(() => {
      fetchJoke();
    }, []);


  return (
    <div className="bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Jokes Generator
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 ">
              This Jokes generator has an custom api which you can integrate
              with your own and is available open source on github
            </p>
            <div>
              <div className="py-8 lg:flex justify-center">
                <form
                  className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4"
                  onSubmit={(event) => {fetchJoke() && event.preventDefault()}}
                  method="get"
                >
                  <select id="type"
                    onChange={(event) => {setSelect(event.target.value) && event.preventDefault()}}
                    className=" mx-auto lg:mr-8  bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-4"
                  >
                    <option value="joke">
                      random
                    </option>
                    <option value="programming">programming</option>
                    <option value="knock-knock">Knock-Knock</option>
                    <option value="general">General</option>
                    <option value="anime">Anime</option>
                  </select>

                  <input
                    className=" rounded-md bg-white w-64 py-4 text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white "
                    type="submit"
                    value="Generate"
                  />
                </form>
              </div>
            </div>
            <div className=" mt-8 w-full p-4 text-center rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
              <h5 className="mb-2 text-3xl font-bold  text-white">
                {joke.setup}
              </h5>
              <p className="mb-5 text-3xl  sm:text-lg text-gray-400">
                {joke.punchline}
              </p>
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <span className=" text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-white">
                  {joke.type}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
