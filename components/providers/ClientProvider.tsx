"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisitedWindAndFire");
    
    if (hasVisited) {
      setShowLoader(false);
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem("hasVisitedWindAndFire", "true");
      // Hide loader after 2.2 seconds
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2200);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {isFirstVisit && showLoader && <LoadingScreen />}
      {children}
    </>
  );
}
