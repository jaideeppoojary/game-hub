import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from 'react-icons';
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from "../hooks/usePlatform";

interface Props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
  const iconMap: {[key:string] : IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo :SiNintendo,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platform.map((p) => (
          <Icon key={p.id} as={iconMap[p.slug]} color={"gray.500"}/>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
