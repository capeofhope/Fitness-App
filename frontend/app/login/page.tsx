"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Loader from "../components/Loader";
import Coach from "../components/Coach";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex flex-col gap-0 text-center">
        {/* character */}
        <div className="absolute top-[5%] left-[25%] transform -translate-x-1/2 z-10">

        <h1 className="text-6xl font-bold text-white drop-shadow-xl bg-black/50 p-4 rounded-xl border border-white/20">
  GET STARTED
</h1>

        </div>

        <div className="h-full">
          <Canvas>
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={<Loader />}>
              <Coach
                position-y={-3}
                scale={2.5}
                rotation={[0, 0, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="flex flex-col h-screen w-1/2">
        <div className="flex flex-col gap-3 p-4 my-auto ">
          <div className="font-bold text-3xl border-2 border-amber-50 p-2">
            <h1>Login</h1>
          </div>

          <div className="border-2 border-amber-50 p-2">
            <input placeholder="Enter Your Email..." />
          </div>

          <div className="border-2 border-amber-50 p-2">
            <input placeholder="Password..." />
          </div>

          <Link href={'/signup'}>
          <p className="text-sm cursor-pointer hover:text-blue-500">
            Don't have an account?
          </p>
          </Link>

          <button className="border-2 border-amber-50 p-2 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
