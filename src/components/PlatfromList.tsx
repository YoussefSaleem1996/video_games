import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatfroms";
import { Platform } from "../hooks/useGames";
import { BsChevronDown } from "react-icons/bs";

const PlatfromList = () => {
  const { data, error, isloading } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      {!isloading && (
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Platforms
        </MenuButton>
      )}
      {isloading && <MenuButton as={Button}>loading...</MenuButton>}
      <MenuList>
        {data.map((platform: Platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromList;
