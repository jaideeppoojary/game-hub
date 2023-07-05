import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.png';
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar =()=>{
	return (
		<HStack justifyContent={'space-between'} paddingInline={'20px'}>
			<Image src={logo} boxSize={"60px"} />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;