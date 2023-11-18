import Link from "next/link";
import { Box, Image, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { BsGridFill } from "react-icons/bs";
import millify from "millify";

const PropertyCard = ({
  property: {
    externalID,
    title,
    rooms,
    baths,
    area,
    isVerified,
    rentFrequency,
    price,
    type,
    agency,
    coverPhoto,
    product,
  },
}) => {

  return (
    <Link href={`/property/${externalID}`}>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        bg="gray.100"
        p="8"
        minHeight="400"
        borderRadius="10"
        transition= "transform 0.6s ease"
        _hover={{transform: "scale(1.1, 1.1)"}}
        sx={{
          "@media screen and (max-width: 600px)": {
            mx: "2px",
            p:"6",
          }
        }}
      >
        <Box>
          <Image
            src={coverPhoto?.url}
            alt={`${product} ${type}`}
            width={300}
            height={200}
            objectFit="cover"
            borderRadius="10"
          />
        </Box>
        <Flex flexDirection="column" alignItems="flex-start" justifyContent="center" mt="8">
          <Flex flexDirection="row" alignItems="center" justifyContent="space-between" fontWeight="600" w="100%">
            <Flex flexDirection="row" alignItems="center">
              <Box color="green.400">{isVerified && <GoVerified/>}</Box>
              <Text mx="2">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
            </Flex> 
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} objectFit="cover"/>
            </Box>
          </Flex>
          <Flex alignItems="center" gap="5" color="teal.400" mt="2">
            {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)}sqft <BsGridFill/>
          </Flex>
          <Text mt="2" fontSize="md">{title?.length > 30 ? `${title?.substring(0,30)}...` : title}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PropertyCard;
