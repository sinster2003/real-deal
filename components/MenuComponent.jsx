import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { FcHome, FcAbout, FcMenu } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import Link from "next/link";

const MenuComponent = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FcMenu />} variant="outline" />
      <MenuList>
        <Link href="/">
          <MenuItem icon={<FcHome />}>Home</MenuItem>
        </Link>
        <Link href="/search">
          <MenuItem icon={<BsSearch />}>Search</MenuItem>
        </Link>
        <Link href="/search?purpose=for-sale">
          <MenuItem icon={<FiKey />}>Buy Property</MenuItem>
        </Link>
        <Link href="/search?purpose=for-rent">
          <MenuItem icon={<FcAbout />}>Rent Property</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
