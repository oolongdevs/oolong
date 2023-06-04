"use client";
import Image from "next/image";
import { useState } from "react";
const Socials = [
  [
    "/icons/dextools.svg",
    "https://www.dextools.io/app/en/ether/pair-explorer/",
  ],
  ["/icons/etherscan.png", "https://etherscan.io/token/"],
  ["/icons/twitter.png", "https://twitter.com/"],
  ["/icons/telegram.png", "https://t.me/"],
  ["/icons/uniswap.svg", "https://app.uniswap.org/#/swap?outputCurrency="],
];

const OverlayContent = {
  learn: <div>Learn content...</div>,
  tokenomics: <div>Tokenomics content...</div>,
  swap: <div>Swap content...</div>,
};
export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 rounded-lg border px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-900 dark:bg-opacity-50">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            An ERC-20 Contract{" "}
            <Image
              src="/icons/Ethereum.svg"
              alt="ethereum logo"
              width={45}
              height={45}
              priority
            />
          </a>
        </div>
        <div className="flex flex-row items-center rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 z-10">
          {Socials.map((d, idx) => (
            <div key={idx} className="mx-2 flex">
              <a href={d[1]}>
                <Image
                  src={d[0]}
                  width={30}
                  height={30}
                  // style={{ filter: "brightness(0) invert(1)" }}
                  // whileHover={{ opacity: 0.5 }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/oolonglogo.png"
          alt="Oolong"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem("learn");
            setOverlayOpen(true);
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 z-10"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn more about our token
          </p>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem("tokenomics");
            setOverlayOpen(true);
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 dark:bg-opacity-30 z-10"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tokenomics{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Oolong's 0 Tax and LP Burn!
          </p>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setSelectedItem("swap");
            setOverlayOpen(true);
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 z-10"
          target="_blank"
          rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Swap{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Buy Oolong and Relax!
          </p>
        </a>

        {overlayOpen && (
          <div className="fixed inset-0 w-full mt-4 h-5/6 flex items-center justify-center z-10">
            <div className="bg-gray-400 bg-opacity-50 p-4 rounded shadow-lg w-3/5 h-4/5 border-neutral-700 bg-neutral-800/30 relative">
              {OverlayContent[selectedItem]}
              <button
                onClick={() => setOverlayOpen(false)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full">
                <p className="black">Close</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
