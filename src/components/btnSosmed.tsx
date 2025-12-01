import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { Tooltip } from "@heroui/tooltip";
import { FaShareAlt , FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function BtnSpeedDial() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler className="bg-primary dark:bg-foreground">
            <IconButton size="lg" className="text-background rounded-full">
              <FaShareAlt  className="h-5 w-5 transition-transform group-hover:rotate-360" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <Tooltip content="faridthns" placement="left">
              <a
                href="https://github.com/faridthns"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpeedDialAction className="bg-primary dark:bg-foreground text-background cursor-pointer">
                  <FaGithub className="h-5 w-5" />
                </SpeedDialAction>
              </a>
            </Tooltip>
            <Tooltip content="Farid Ramadhan" placement="left">
              <a
                href="https://www.linkedin.com/in/faridramadhan03/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpeedDialAction className="bg-primary dark:bg-foreground text-background cursor-pointer">
                  <FaLinkedin className="h-5 w-5" />
                </SpeedDialAction>
              </a>
            </Tooltip>
            <Tooltip content="farid.ramadhann_" placement="left">
              <a
                href="https://www.instagram.com/farid.ramadhann_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpeedDialAction className="bg-primary dark:bg-foreground text-background cursor-pointer">
                  <FaInstagram className="h-5 w-5" />
                </SpeedDialAction>
              </a>
            </Tooltip>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
