import { RiComputerLine } from "react-icons/ri";
import {
  Button,
  Divider,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@heroui/react";
import { motion } from "framer-motion";

import { title, subtitle } from "@/components/primitives";

export default function Skills() {
  const list = [
    {
      title: "HTML5",
      img: "/img/4.png",
    },
    {
      title: "CSS3",
      img: "/img/3.png",
    },
    {
      title: "Javascript",
      img: "/img/javascript.png",
    },
    {
      title: "React.js",
      img: "/img/reactjs.png",
    },
    {
      title: "Express.js",
      img: "/img/expressjs.png",
    },
    {
      title: "Node.js",
      img: "/img/nodejs.png",
    },
    {
      title: "Tailwind",
      img: "/img/tailwind.png",
    },
    {
      title: "Bootstrap",
      img: "/img/bootstrap.png",
    },
    {
      title: "PHP",
      img: "/img/php.png",
    },
    {
      title: "Codeigniter",
      img: "/img/ci.png",
    },
    {
      title: "Mysql",
      img: "/img/mysql.png",
    },
    {
      title: "Git",
      img: "/img/git.png",
    },
    {
      title: "Github",
      img: "/img/github.png",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-4 p-8 md:py-10"
      id="skills"
    >
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet", class: "my-0" })}>
          Skills & Technologies
        </h1>
        <Divider className="mx-auto my-4 h-1 bg-primary rounded-full w-20" />
        <h1 className={subtitle({ class: "my-0" })}>
          Bahasa pemrograman dan teknologi yang saya kuasai.
        </h1>
      </div>
      <div className="text-start w-full py-6">
        <h2 className={subtitle({ class: "font-bold my-0" })}>
          <Button isIconOnly color="secondary" variant="faded">
            <RiComputerLine size={20} />
          </Button>
          &nbsp;Programming Tools
        </h2>
      </div>
      <div className="gap-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
        {list.map((item, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card isPressable shadow="lg">
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={item.title}
                  className="w-full object-fit h-[140px]"
                  radius="lg"
                  shadow="sm"
                  src={item.img}
                  width="100%"
                />
              </CardBody>
              <CardFooter className="text-small justify-center">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
