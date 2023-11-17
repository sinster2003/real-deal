import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "react-horizontal-scrolling-menu/dist/styles.css";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" cursor="pointer" fontSize="xl" onClick={() => scrollNext()} >
      <Icon as={BsArrowRightCircleFill} />
    </Flex>
  );
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" cursor="pointer" fontSize="xl" onClick={() => scrollPrev()}>
      <Icon as={BsArrowLeftCircleFill} />
    </Flex>
  );
};

const ImageScrollMenu = ({ photos }) => {
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
      {photos.map((photo) => (
        <Box w="900px" key={photo.id} overflow="hidden" sx={{
          "@media screen and (max-width: 600px)": {
            w:"270px",
          },
          "@media screen and (min-width: 600px) and (max-width: 900px)": {
            w:"580px",
          },
        }}>
          <Image
            src={photo.url}
            alt={photo.title}
            placeholder="blur"
            w="900px"
            h="500"
            objectFit="cover"
            sx={{
              "@media screen and (max-width: 600px)": {
                w:"300px",
                h:"200"
              },
              "@media screen and (min-width: 600px) and (max-width: 900px)": {
                w:"600px",
                h:"300"
              },
            }}
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollMenu;
