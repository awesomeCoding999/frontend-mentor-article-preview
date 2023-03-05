import { MobileFooter } from "../mobile-footer/MobileFooter";
import { MobileSocialFooter } from "../mobile-social-footer/MobileSocialFooter";
import { DesktopFooter } from "../desktop-footer/DesktopFooter";
import { DesktopSocialFooter } from "../desktop-social-footer/DesktopSocialFooter";
import DeskImg from "../../../images/drawers.jpg";
import "../article-card/ArticleCard.css";
import { useState } from "react";

export const ArticleCard = () => {
  const [isSocialMediaBarShowing, setIsSocialMediaBarShowing] = useState(true);

  return (
    <div className="card">
      <img className="hero-img" src={DeskImg} alt="desk" />

      <div className="text-container">
        <p className="tag-line">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="description">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I&apos;ve got some simple tips to
          help you make any room feel complete.
        </p>
      </div>
      {isSocialMediaBarShowing ? (
        <MobileSocialFooter isSocialMediaBarShowing={isSocialMediaBarShowing} />
      ) : (
        <MobileFooter />
      )}
    </div>
  );
};
