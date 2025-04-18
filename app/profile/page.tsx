"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="px-5 flex gap-4">
        {/* SideBar */}
        <div className="bg-[#282929] h-fit w-fit p-4 rounded-lg">
          <div className="flex justify-between items-center gap-5 p-3">
            <div>
              <Image
                src="/profile.png"
                alt="profile"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl ">Full Name</h1>
                <Image src="/badge.png" alt="badge" width={20} height={20} />
              </div>
              <h3 className="text-xs">@username</h3>
            </div>
          </div>

          <div className="p-1.5 bg-[#293A2F] text-[#2CBA5C] flex justify-center items-center rounded-xl cursor-pointer">
            <button>Edit Profile</button>
          </div>

          <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

          <div className="p-2 mt-3">
            <div>
              <h1 className="text-xl">Community</h1>
            </div>
            <div className="p-2 text-base space-y-2">
              <div>
                Post : <span>2</span>
              </div>
              <div>
                Followers : <span>20</span>
              </div>
              <div>
                Following : <span>30</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

          <div className="p-2 mt-3">
            <div>
              <h1 className="text-xl">Additional Info</h1>
            </div>
            <div className="p-2 text-base space-y-2">
              <div>
                Age : <span>21</span>
              </div>
              <div>
                Weight : <span>81Kg</span>
              </div>
              <div>
                Height : <span>182cm</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

          <div className="p-2 mt-3">
            <div>
              <h1 className="text-xl">Socials</h1>
            </div>

            <div className="p-2 text-base space-y-2">
              <div>Insta</div>
              <div>Twitter</div>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="w-3/4 flex flex-col gap-5">
          {/* Badges */}
          <div className="bg-[#282929] w-full h-fit p-4 rounded-lg">
            <div className="flex items-center justify-center">
              <h1 className="text-xl">PR Badges</h1>
            </div>

            <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

            <div>
              <div className="p-3">
                <h1 className="text-xl">Squats</h1>
              </div>

              <div className="flex gap-3">
                <div>50kg</div>
                <div>75kg</div>
                <div>100kg</div>
                <div>125kg</div>
                <div>150kg</div>
              </div>
            </div>

            <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

            <div>
              <div className="p-3">
                <h1 className="text-xl">Bench Press</h1>
              </div>

              <div className="flex gap-3">
                <div>50kg</div>
                <div>75kg</div>
                <div>100kg</div>
                <div>125kg</div>
                <div>150kg</div>
              </div>
            </div>

            <div className="w-full h-[1px]  mt-3 bg-[#464746]"></div>

            <div>
              <div className="p-3">
                <h1 className="text-xl">Dead Lift</h1>
              </div>

              <div className="flex gap-3">
                <div>75kg</div>
                <div>100kg</div>
                <div>125kg</div>
                <div>150kg</div>
                <div>175kg</div>
              </div>
            </div>
          </div>

          {/* Streak Chart */}
          <div className="bg-[#282929] w-full h-fit p-4 rounded-lg">
            <Image
              src="/streak_chart.png"
              alt="streak chart"
              width={900}
              height={100}
            />
          </div>

          {/* Posts */}
          <div className="bg-[#282929] w-full h-fit p-4 rounded-lg">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl">POSTS</h1>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
