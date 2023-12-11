import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";


const HeroSection = () => {
  return (
    <main className="py-16 mt-16 md-flex md:shrink-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-8 place-self-center justify-self-start"
          >
            <h1 className="font-extrabold">
              {/* span text seperator -- for design*/}
              <span className="text-white text-6xl ">
                Hello, I'm{" "} 
                <span className="text-transparent bg-clip-text sm:text-6xl md:text-7xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                Yao Feng
                </span>
              </span>
              <br></br>
              <span className="text-6xl">I'm 
              <TypeWritter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString`<span style="color:#FFFF00">Data Analysis Student</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString`<span style="color:#FFA500">Software Engineer</span>`
                    .pauseFor(1500)
                    .deleteAll()
                    .start();

                }}
              ></TypeWritter>
              </span>
            </h1>
            <p className="text-gray-300 pt-8 text-base sm:text-lg mb-6 lg:text-xl">
              Slide down to know more about me! 
            </p>
              <Link
                href="https://github.com/YFShADoW" 
                className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2 border-orange-500 hover:bg-orange-400">
                <span className="text-xl text-white">Github</span>
              </Link>
             
              <Link
                href="https://drive.google.com/file/d/1NpDwipVXvHRDXqCOtL9wGnTSK_IK8HWi/view?usp=sharing"
                className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-yellow-500 hover:bg-yellow-400">
                <span className="text-xl text-white">Resume</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/yao-feng-chooi/"
                className="px-6 inline-block py-3 rounded-full mr-4 border-solid border-2  border-red-500 hover:bg-red-400">
                <span className="text-xl text-white">Linkedin</span>
              </Link>

          </motion.div>
        <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
          <div className="w-[400px] h-[400px] relative z-0">
            <img
              src="/YF.jpg"
              alt="YF Pic"
              className=" transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});