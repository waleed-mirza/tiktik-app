import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 md:gap-20">
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 h-[88vh] flex flex-col flex-1 overflow-auto videos gap-10">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp
