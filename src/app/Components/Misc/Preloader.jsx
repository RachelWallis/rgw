"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { p_nbsp } from "../utils";
import logo from '../../assets/images/logo.png';

function Preloader() {
  useEffect(() => {
    const handleLoad = () => {
      // Add 'loaded' class to body for hiding preloader
      document.body.classList.add("loaded");

      const relatedPosts = document.querySelector(".related-posts");
      const footer = document.querySelector(".default-footer");
      const navigation = document.querySelector(".navigation");
      const blogParagraphs = document.querySelectorAll(".blog-single-content-wrapper > p");

      if (relatedPosts) {
        if (!document.querySelector(".comment-form--wrapper")) {
          relatedPosts.style.marginTop = "15rem";
        } else {
          footer?.style.setProperty("margin-top", "0");
        }
      }

      navigation?.addEventListener("navigationOpened", () => {
        const logoElement = navigation.querySelector(".logo > *");
        const hamburger = navigation.querySelector(".hamburger");

        if (logoElement) {
          hamburger?.classList.add("align");
        }
      });

      blogParagraphs.forEach((element) => {
        const fontSize = parseInt(window.getComputedStyle(element).fontSize.replace("px", ""));
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight.replace("px", ""));

        if (isNaN(lineHeight) || isNaN(fontSize) || fontSize === lineHeight) return;

        if (fontSize > lineHeight) {
          element.style.lineHeight = `${fontSize + 14}px`;
        }
      });
    };

    // Ensure the handleLoad runs if the document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Add resize event listener
    window.addEventListener("resize", p_nbsp);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", p_nbsp);
    };
  }, []);

  return (
    <div className="preloader">
      <div id="pulse-wrapper">
        <div id="pulse">
          <span></span>
          <span></span>
        </div>
      </div>
      <Image src={logo} alt="slope-logo" />
    </div>
  );
}

export default Preloader;
