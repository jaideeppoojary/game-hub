import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatfom from "../hooks/usePlatfom";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId);
  const onSelectedPlatform = useGameQueryStore(s=> s.setPlatformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatfom(selectedPlatformId);
  
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data?.results?.map((platform) => (
            <MenuItem
              onClick={() => onSelectedPlatform(platform.id)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;
