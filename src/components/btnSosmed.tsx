import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { Tooltip } from "@heroui/tooltip";
import { FaShareAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const socialLinks = [
  {
    label: "faridthns",
    url: "https://github.com/faridthns",
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    label: "Farid Ramadhan",
    url: "https://www.linkedin.com/in/faridramadhan03/",
    icon: <FaLinkedin className="h-5 w-5" />,
  },
  {
    label: "farid.ramadhann_",
    url: "https://www.instagram.com/farid.ramadhann_/",
    icon: <FaInstagram className="h-5 w-5" />,
  },
];

export function BtnSpeedDial() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <SpeedDial>
        <SpeedDialHandler className="bg-primary dark:bg-foreground">
          <IconButton
            className="text-background rounded-full"
            placeholder={undefined}
            ripple={false}
            size="lg"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <FaShareAlt className="h-5 w-5 transition-transform group-hover:rotate-360" />
          </IconButton>
        </SpeedDialHandler>

        <SpeedDialContent
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {socialLinks.map((item, index) => (
            <Tooltip key={index} content={item.label} placement="left">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <SpeedDialAction
                  className="bg-primary dark:bg-foreground text-background cursor-pointer"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {item.icon}
                </SpeedDialAction>
              </a>
            </Tooltip>
          ))}
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
