import { Link } from "react-scroll";
import { Avatar, Button, Divider } from "@heroui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

import { main, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function IndexPage() {
  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 md:py-10 px-4 sm:px-8 w-100 w-[90vw] mx-auto"
      id="home"
    >
      <div className="order-2 sm:order-1 inline-block max-w-lg justify-center">
        <span className={subtitle({ class: "m-0" })}>Hai, saya</span> <br />
        <span className={main({ color: "violet", class: "font-gilgan my-0" })}>
          Farid Ramadhan
        </span>
        <Divider className="my-4 h-1 bg-primary rounded-full" />
        <div className={subtitle({ class: "mt-4" })}>
          Saya seorang web developer yang hobi ngulik teknologi terbaru. Selalu
          berusaha bikin website yang gak cuma keren, tapi juga mudah digunakan.
          Punya pengalaman di beberapa proyek dan siap buat kerjasama bareng
          kamu! Yuk, kita terhubung.
        </div>
        <div className="flex gap-3">
          <Link duration={500} offset={-64} smooth={true} to="projects">
            <span
              className="
                inline-flex items-center justify-center 
                px-5 py-2 
                rounded-xl 
                bg-primary text-white 
                font-semibold 
                drop-shadow-lg drop-shadow-primary
                hover:shadow-lg hover:opacity-90 
                transition-all duration-200
                cursor-pointer
              "
            >
              View Projects
            </span>
          </Link>
          <Link duration={500} offset={-64} smooth={true} to="contacts">
            <span
              className="
                inline-flex items-center justify-center
                px-5 py-2
                rounded-xl
                border-2 border-primary
                text-primary
                font-semibold
                bg-transparent
                hover:bg-primary/10
                transition-all duration-200
                cursor-pointer
              "
            >
              Contact me
            </span>
          </Link>
        </div>
        <div className="flex gap-4 mt-3">
          <Button
            isIconOnly
            color="secondary"
            variant="light"
            onClick={() =>
              window.open("https://github.com/faridthns", "_blank")
            }
          >
            <GithubIcon size={30} />
          </Button>
          <Button
            isIconOnly
            color="secondary"
            variant="light"
            onClick={() =>
              window.open("https://www.linkedin.com/in/faridramadhan03/", "_blank")
            }
          >
            <FaLinkedin size={30} />
          </Button>
          <Button
            isIconOnly
            color="secondary"
            variant="light"
            onClick={() =>
              window.open("https://www.instagram.com/farid.ramadhann_/", "_blank")
            }
          >
            <FaInstagram size={30} />
          </Button>
        </div>
      </div>

      <div className="order-1 sm:order-2 flex justify-center sm:justify-end items-center">
        <Avatar
          className="max-w-[80vw] w-60 h-60 sm:w-80 sm:h-80 text-large shadow-xl shadow-blue-500/50 object-cover"
          src="/img/farid.webp"
        />
      </div>
    </section>
  );
}
