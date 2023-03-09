import { useState } from "react";
import DeskImg from "../../../images/drawers.jpg";
import { MobileFooter } from "../mobile-footer/MobileFooter";
import { Footer } from "../footer/Footer";
import { SocialBar } from "../social-bar/SocialBar";
import "../article-card/ArticleCard.css";

export const ArticleCard = () => {
  const [isSocialMediaBarShowing, setIsSocialMediaBarShowing] =
    useState<boolean>(false);
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  const [isDesktopViewShowing, setIsDesktopViewShowing] =
    useState<boolean>(true);

  const toggleSocialMediaBar = () =>
    setIsSocialMediaBarShowing(!isSocialMediaBarShowing);

  window.addEventListener("resize", () => {
    setDeviceWidth(window.innerWidth);
  });

  return (
    <div className="card">
      <img className="hero-img" src={DeskImg} alt="desk" />
      <div className="text-footer-container">
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
        {deviceWidth >= 1024 ? (
          <>
            <Footer
              isSocialMediaBarShowing={isSocialMediaBarShowing}
              toggleSocialMediaBar={toggleSocialMediaBar}
            />
            {isSocialMediaBarShowing && (
              <div className="social-widget">
                <SocialBar />
              </div>
            )}
          </>
        ) : (
          <MobileFooter
            isSocialMediaBarShowing={isSocialMediaBarShowing}
            toggleSocialMediaBar={toggleSocialMediaBar}
          />
        )}
      </div>
    </div>
  );
};
