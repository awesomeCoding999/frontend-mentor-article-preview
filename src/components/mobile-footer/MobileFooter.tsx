import { SocialBar } from "../social-bar/SocialBar";
import { Footer } from "../footer/Footer";
import { SocialBtn } from "../social-btn/SocialBtn";
import "../mobile-footer/MobileFooter.css";

type MobileFooterProps = {
  isSocialMediaBarShowing: boolean;
  toggleSocialMediaBar: () => void;
};

export const MobileFooter = ({
  isSocialMediaBarShowing,
  toggleSocialMediaBar,
}: MobileFooterProps) => {
  return (
    <>
      {isSocialMediaBarShowing ? (
        <footer className="social-icon-footer flex-container">
          <SocialBar />
          <SocialBtn
            isSocialMediaBarShowing={isSocialMediaBarShowing}
            toggleSocialMediaBar={toggleSocialMediaBar}
          />
        </footer>
      ) : (
        <Footer
          isSocialMediaBarShowing={isSocialMediaBarShowing}
          toggleSocialMediaBar={toggleSocialMediaBar}
        />
      )}
    </>
  );
};
