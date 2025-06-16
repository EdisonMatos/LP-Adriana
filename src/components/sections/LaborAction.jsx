import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionHeader from "../sectionElements/SectionHeader";
import AboutModal from "../sectionElements/about/AboutModal";
import content from "../../content/content";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import GalleryAbout from "../sectionElements/about/GalleryAbout";
import ParagraphSemFading from "../sectionElements/about/ParagraphSemFading";
import ParagraphWithFading from "../sectionElements/about/ParagraphWithFading";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../../assets/imgs/about/imgGaleria1.webp";
import img2 from "../../assets/imgs/about/imgGaleria2.webp";
import img3 from "../../assets/imgs/about/imgGaleria3.webp";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";

export default function LaborAction({
  modal = true,
  showGallery = false,
  colorMode,
}) {
  // Definir classes de tema
  const bgClasses = {
    dark: "bg-bgFixedDark",
    light: "bg-bgFixedLight",
    default: "bg-bgSectionDark",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const titleColor = textClasses[colorMode] || textClasses.default;
  const subtitleColor = colorMode === "light" ? "text-black/80" : "text-white";

  const images = [
    {
      original: img1,
      thumbnail: img1,
    },
    {
      original: img2,
      thumbnail: img2,
    },
    {
      original: img3,
      thumbnail: img3,
    },
  ];

  return (
    <SectionArea className={`${bgClass} transition-colors duration-1000`}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[90%] desktop1:w-[415px] desktop2:w-[450px] flex justify-center rounded-xl">
          <img
            src={content.texts.laborAction.img}
            alt={content.texts.about.imagem.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] rounded-xl shadow-custom-opacity shadow-shadowAbouts/50"
          />
        </MotionDivDownToUp>

        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <SectionHeader
            className="text-center"
            miniTitle={content.texts.laborAction.miniTag}
            color={colorMode}
            type="article"
            titleColorSet={titleColor}
            subtitleColorSet={subtitleColor}
          />
          <MotionDivDownToUp>
            <p className="text-white text-opacity-80 -mt-7 mb-8 text-title4 desktop3:text-title5 phone1:leading-9 desktop3:leading-9 font-mainFont">
              {content.texts.laborAction.title}
            </p>
            <p className="text-white text-opacity-80 font-mainFont">
              {content.texts.laborAction.text}
            </p>
          </MotionDivDownToUp>

          <Button
            aria-label={content.texts.hero.ctaButtonAriaLabel}
            label={content.texts.cta.ctaButtonText}
            animation
            icon={<FaWhatsapp size={24} />}
            className="mt-8"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
