"use client";
import { useEffect, useState } from "react";

export const useResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check Device
    let userAgent = navigator.userAgent;
    let mobile = /Mobi/.test(userAgent);
    let tablet = /Tablet|iPad/.test(userAgent);

    setIsMobile(mobile);
    setIsTablet(tablet);
    setIsDesktop(!mobile && !tablet);
  }, []);
  return { isMobile, isTablet, isDesktop };
};
