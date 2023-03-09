import { useState } from "react";
import { DesktopFooter } from "../desktop-footer/DesktopFooter";
import { DesktopSocialFooter } from "../desktop-social-footer/DesktopSocialFooter";
import DeskImg from "../../../images/drawers.jpg";
import { MobileFooter } from "../mobile-footer/MobileFooter";
import "../article-card/ArticleCard.css";

export const ArticleCard = () => {
  const [isSocialMediaBarShowing, setIsSocialMediaBarShowing] = useState(false);

  const toggleSocialMediaBar = () =>
    setIsSocialMediaBarShowing(!isSocialMediaBarShowing);

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
      <MobileFooter
        isSocialMediaBarShowing={isSocialMediaBarShowing}
        toggleSocialMediaBar={toggleSocialMediaBar}
      />
    </div>
  );
};
