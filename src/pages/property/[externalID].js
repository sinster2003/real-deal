import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { fetchData } from "../../../utils/fetchData";
import ImageScrollMenu from "../../../components/ImageScrollMenu";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";

const PropertyDetails = ({
  properties: {
    photos,
    amenities,
    baths,
    rooms,
    agency: { logo },
    description,
    title,
    area,
    isVerified,
    price,
    rentFrequency,
    furnishingStatus,
    completionStatus,
  },
}) => {
  return (
    <Flex flexWrap="wrap" flexDirection="column">

      {/* image scrolling */}
      <Box
        w="900px"
        m="auto"
        mt="10"
        sx={{
          "@media screen and (max-width: 600px)": {
            w: "300px",
          },
          "@media screen and (min-width: 600px) and (max-width: 900px)": {
            w: "600px",
          },
        }}
      >
        {photos && <ImageScrollMenu photos={photos} />}
      </Box>

      {/* description */}
      <Box mx="40px"
        sx={{
          "@media screen and (max-width: 600px)": {
            mx: "20px",
          },
          "@media screen and (min-width: 600px) and (max-width: 900px)": {
            mx: "30px",
          },
        }}>
      <Box my="5">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          mt="8"
        >
          <Text mt="2" fontSize="xl" fontWeight="bold" py="6">
            {title}
          </Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            fontWeight="600"
            w="20%"
            sx={{
              "@media screen and (max-width: 600px)": {
                w: "50%",
                fontSize: "sm",
              },
              "@media screen and (min-width: 600px) and (max-width: 900px)": {
                w: "30%",
                fontSize: "md",
              },
            }}
          >
            <Flex flexDirection="row" alignItems="center">
              <Box color="green.400">{isVerified && <GoVerified />}</Box>
              <Text mx="2">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={logo?.url} objectFit="cover" />
            </Box>
          </Flex>
          <Flex alignItems="center" gap="5" color="teal.400" mt="6" mb="5">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}sqft{" "}
            <BsGridFill />
          </Flex>
        </Flex>
      </Box>
      <Text fontSize="lg" color="gray.600" mt="4"  mb="10">
        {description}
      </Text>
      <Box my="7">
        <Flex w="100%" alignItems="center" justifyContent="space-around">
          <Text fontSize="lg" fontWeight="bold">
            Furnishing Status
          </Text>
          <Text>{furnishingStatus && furnishingStatus}</Text>
        </Flex>
      </Box>
      <Box mb="7" mt="4">
        <Flex w="100%" alignItems="center" justifyContent="space-around">
          <Text fontSize="lg" fontWeight="bold">
            Completion Status
          </Text>
          <Text>{completionStatus && completionStatus}</Text>
        </Flex>
      </Box>
      <Box my="4">
        <Flex w="100%" alignItems="center" justifyContent="space-around">
          <Text fontSize="lg" fontWeight="bold">
            Amenities
          </Text>
          <Text>{amenities ? "Yes" : "No"}</Text>
        </Flex>
      </Box>
      {amenities && (
        <Box my="10">
          <Text fontSize="2xl" fontWeight="bold" mb="10">
            Amenities
          </Text>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap="5"
          >
            {amenities.map((amenity) =>
              amenity.amenities.map((item) => {
                return (
                  <Box
                    key={item.externalID}
                    bg="gray.200"
                    cursor="pointer"
                    fontSize="md"
                    borderRadius="2"
                    fontWeight="bold"
                    p="4"
                    width="fit-content"
                    _hover={{ bg: "gray.400" }}
                  >
                    {item.text}
                  </Box>
                );
              })
            )}
          </Flex>
        </Box>
      )}
      </Box>
    </Flex>
  );
};

export default PropertyDetails;

export const getServerSideProps = async ({ params: { externalID } }) => {
  // PROPERTY DETAILS

  const data = await fetchData(`properties/detail?externalID=${externalID}`);

  console.log(data);

  return {
    props: {
      properties: data,
    },
  };
};
