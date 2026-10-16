import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterBottom from "./FooterBottom";
import FooterConnect from "./FooterConnect";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <FooterBrand />
          <FooterNavigation />
          <FooterConnect />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
