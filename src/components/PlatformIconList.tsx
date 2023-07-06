import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from  'react-icons';

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
          <Icon as={iconMap[p.slug]} color={"gray.500"}/>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
