"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};
const Header = ({}: Props) => {
  return (
    <header className="flex items-start bg-black  justify-between sticky top-0 max-w-5xl  z-20 lg:items-center p-4">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex  flex-row items-center"
      >
        <SocialIcon
          network="x"
          bgColor="transparent"
          url="https://x.com/un_kn0wnt?s=21"
          fgColor="#1DA1F2"
          className="h-2 w-2"
        />
        <SocialIcon
          network="linkedin"
          bgColor="transparent"
          url="#"
          fgColor="#0077b5"
          className="h-2 w-2"
        />
        <SocialIcon
          network="github"
          bgColor="transparent"
          url="https://github.com/Official-BigT/"
          fgColor="#0077b5"
          className="h-2 w-2"
        />
        <SocialIcon
          network="instagram"
          bgColor="transparent"
          url="https://www.instagram.com/un_kn0wnt?igsh=MW5pMW1xdzZuaXR2dQ%3D%3D&utm_source=qr"
          fgColor=" #FFC0CB"
          className="h-2 w-2"
        />
        <SocialIcon
          network="snapchat"
          bgColor="transparent"
          fgColor=" #FFC0CB"
          url="https://snapchat.com/t/Q2LH64nT"
          className="h-2 w-2"
        />
        <SocialIcon
          network="whatsapp"
          bgColor="transparent"
          fgColor="#25D366"
          url="https://wa.link/p8gg7u"
          className="h-2 w-2"
        />
      </motion.div>
    </header>
  );
};

export default Header;
