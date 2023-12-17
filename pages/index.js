import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Output from "@/components/Output";

import value from "@/data/pipValues";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  function fefe() {
    setOutAmount((balance / 100) * risk);
    setPSize((((balance / 100) * risk) / stloss) * value[0][pair]);
    setStLot(Math.round((((balance / 100) * risk) / stloss) * 10) / 100);
    setMiniLot(Math.round((((balance / 100) * risk) / stloss) * 10) / 10);
    setMicroLot((((balance / 100) * risk) / stloss) * 10);
  }
  const [balance, setBalance] = useState(0);
  const [risk, setRisk] = useState(0);
  const [stloss, setStloss] = useState(0);
  const [outAmount, setOutAmount] = useState(0);
  const [pSize, setPSize] = useState(0);
  const [stLot, setStLot] = useState(0);
  const [miniLot, setMiniLot] = useState(0);
  const [microLot, setMicroLot] = useState(0);
  const [pair, setPair] = useState("EUR/USD");

  return (
    <>
      <Head>
        <title>Lot Size Calculator</title>
        <meta name="description" content="Lot size calculator for forex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-adsense-account"
          content="ca-pub-3507313975970441"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="grid  md:grid-cols-2 py-12 md:mx-72 shadow-inner rounded-lg border-2 text-lg  border-indigo-500">
          <div className="md:mx-32 pt-10 font-semibold">
            <select
              className="bg-indigo-500 text-white rounded-lg p-1 ml-2 shadow-xl transition duration-200  hover:scale-105 hover:border-white"
              onChange={(event) => setPair(event.target.value)}
              defaultValue={pair}
            >
              <option value="EUR/USD">EUR/USD</option>
              <option value="GBP/USD">GBP/USD</option>
              <option value="USD/CHF">USD/CHF</option>
              <option value="USD/CAD">USD/CAD</option>
              <option value="USD/JPY">USD/JPY</option>
              <option value="NZD/USD">NZD/USD</option>
              <option value="AUD/USD">AUD/USD</option>
              <option value="EUR/AUD">EUR/AUD</option>
              <option value="EUR/GBP">EUR/GBP</option>
              <option value="EUR/JPY">EUR/JPY</option>
              <option value="EUR/CAD">EUR/CAD</option>
              <option value="EUR/CHF">EUR/CHF</option>
              <option value="EUR/NZD">EUR/NZD</option>
              <option value="GBP/CAD">GBP/CAD</option>
              <option value="GBP/CHF">GBP/CHF</option>
              <option value="GBP/JPY">GBP/JPY</option>
              <option value="GBP/AUD">GBP/AUD</option>
              <option value="GBP/NZD">GBP/NZD</option>
              <option value="AUD/CAD">AUD/CAD</option>
              <option value="AUD/JPY">AUD/JPY</option>
              <option value="AUD/CHF">AUD/CHF</option>
              <option value="AUD/NZD">AUD/NZD</option>
              <option value="CHF/JPY">CHF/JPY</option>
              <option value="CAD/CHF">CAD/CHF</option>
              <option value="CAD/JPY">CAD/JPY</option>
              <option value="NZD/CHF">NZD/CHF</option>
              <option value="NZD/JPY">NZD/JPY</option>
              <option value="NZD/CAD">NZD/CAD</option>
            </select>
            <div className="m-2 ">
              <label
                htmlFor="price"
                className="block text-md font-semibold leading-6 text-gray-900"
              >
                Account Balance
              </label>
              <div className="relative mt-2 rounded-md shadow-sm ">
                <div className="pointer-events-none  absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  onChange={(e) => setBalance(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus:outline-none focus:border-indigo-500 sm:text-sm sm:leading-6"
                  placeholder={balance}
                />
                {/* <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                  >
                    <option>USD</option>
                    <option>CAD</option>
                    <option>EUR</option>
                  </select>
                </div> */}
              </div>
            </div>
            <div className="m-2 ">
              <label
                htmlFor="price"
                className="block text-md font-semibold leading-6 text-gray-900"
              >
                Risk Percentage
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
                <input
                  onChange={(e) => setRisk(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  className="focus:outline-none focus:border-indigo-500 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={risk}
                />
              </div>
            </div>
            <div className="m-2 ">
              <label
                htmlFor="price"
                className="block text-md font-semibold   leading-6 text-gray-900"
              >
                Stop Loss (pips)
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm"></span>
                </div>
                <input
                  onChange={(e) => setStloss(e.target.value)}
                  type="text"
                  name="price"
                  id="price"
                  className="focus:outline-none focus:border-indigo-500 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={stloss}
                />
              </div>
              <button
                onClick={fefe}
                className="bg-indigo-500 hover:bg-indigo-700 mt-2  text-white font-bold py-2 px-6 rounded-full shadow-xl transition duration-200  hover:scale-105"
              >
                Button
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 text-center md:text-left font-semibold">
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="text-4xl">Results</p>
            </div>
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="">Amount at Risk</p>
              <p>{outAmount} USD</p>
            </div>
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="">Position Size(units)</p>
              <p>{pSize}</p>
            </div>
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="">Standard Lots</p>
              <p>{stLot}</p>
            </div>
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="">Mini Lots</p>
              <p>{miniLot} </p>
            </div>
            <div className="border-b-2 pb-2 border-indigo-500">
              <p className="">Micro Lots</p>
              <p>{microLot}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <Footer />
        </div>
      </main>{" "}
    </>
  );
}
