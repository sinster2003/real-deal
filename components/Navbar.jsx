import {
  Flex,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import MenuComponent from "./MenuComponent";
import ListComponent from "./ListComponent";

const Navbar = () => {
  const [isMobileOrTab] = useMediaQuery("(max-width: 1000px)");

  return (
    <Flex
      color={isMobileOrTab ? "gray.500" : "teal.400"}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      borderBottom="1px"
      borderBottomColor="gray.300"
      p="5"
    >
      <Heading color="teal.500">RealDeal</Heading>
      {isMobileOrTab ? <MenuComponent/> : <ListComponent/>}
    </Flex>
  );
};

export default Navbar;
