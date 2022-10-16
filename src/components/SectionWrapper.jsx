import React from "react";
import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        ${reverse ? styles.textRight : styles.textLeft}
        w-11/12 sm:2-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv}
        ${reverse ? "fadeRightMini" : "fadeLeftMini"}
        `}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            } `}
          >
            {title}
          </h1>
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button assetUrl={assets.expo} link="exp://exp.host/@yoho4613/react_native_nft_marketplace?release-channel=default" />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            className={`${styles.sectionImg} 
            ${reverse ? "fadeLeftMini" : "fadeRightMini"}`}
            src={mockupImg}
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
