import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Sidebar/Discover";
import SuggestedAccounts from "./Sidebar/SuggestedAccounts";
import Footer from "./Sidebar/Footer";

const Sidebar: NextPage = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const userLoggedIn = false;
  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl cursor-pointer"
        onClick={() => {
          setShowSideBar((previousState) => !previousState);
        }}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className="w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 p-3 | xl:border-0 xl:w-[400px]">
          <div className="border-gray-200 | xl:border-b-2 xl:pb-4">
            <Link href="/">
              <div className="normal-link">
                <div className="text-2xl">
                  <AiFillHome />
                </div>
                <div className="text-xl hidden | xl:block">For you</div>
              </div>
            </Link>
          </div>
          {!userLoggedIn && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Login to like and comment on videos
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <button
                      className="text-lg text-[#F51997] bg-white border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:bg-[#F51997] hover:text-white cursor-pointer"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                />
              </div>
            </div>
          )}

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
