import React, { useState } from "react";
import { AiOutlineClose} from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-scroll";


// #FFB400
// bg-C #F0F0F6

const Header = () => {

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_1px_10px_rgb(0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <h1 className="text-3xl font-semibold">ADOU FABRICE</h1>
          </div>

          {/* Les onglets */}
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="Accueil"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400] transition-all  cursor-pointer"
            >
              Accueil
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400] transition-all  cursor-pointer"
            >
              A propos de moi
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400] transition-all  cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="formation"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400] transition-all  cursor-pointer"
            >
              Formations
            </Link>
            <Link
              to="Experience"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400] transition-all  cursor-pointer"
            >
              Expériences
            </Link>
            <Link
              to="portefolio"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#FFB400]  cursor-pointer"
            >
              Portefolio
            </Link>
          </nav>

          {/* bar menu */}
          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <HiOutlineMenuAlt1 size={28} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center z-10 pt-8 pb-150 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Accueil
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            A propos de moi
          </Link>

          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Educations
          </Link>

          <Link
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Experiences
          </Link>

          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#FFB400] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
