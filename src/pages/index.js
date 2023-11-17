import Link from "next/link";
import Image from "next/image";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { fetchData } from "../../utils/fetchData";
import PropertyCard from "../../components/PropertyCard";

const BannerProduct = ({
  imageURL,
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  LinkName,
  buttonText,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageURL} width={500} height={400} alt="banner-image" />
      <Box py="5" px="10">
        <Text color="gray.500" fontSize="md" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" fontWeight="300" py="3" color="gray.700">
          {desc1}
          <br />
          {desc2}
        </Text>
        <Link href={LinkName}>
          <Button
            bg="teal.500"
            _hover={{ bg: "teal.600" }}
            color="white"
            fontSize="md"
            w={150}
          >
            {buttonText}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

const Home = ({ forSale, forRent }) => {
  return (
    <Box>
      <BannerProduct
        imageURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        purpose="Rent A Home"
        title1="Rental Homes for "
        title2="Everyone"
        desc1="Explore Flats, Villas, Independent Houses"
        desc2="and many more..."
        LinkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={20}
      >
        {forRent.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </Flex>
      <BannerProduct
        imageURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        purpose="Buy A Home"
        title1="Find, Buy and Explore "
        title2="your dream house"
        desc1="Explore Flats, Villas, Independent Houses"
        desc2="and many more..."
        LinkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
      />
      <Flex
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={20}
      >
        {forSale.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
};

export default Home;

export const getStaticProps = async () => {
  const forRent = await fetchData(
    "properties/list?locationExternalIDs=5002&&purpose=for-rent&&hitsPerPage=6"
  );
  const forSale = await fetchData(
    "properties/list?locationExternalIDs=5002&&purpose=for-sale&&hitsPerPage=6"
  );

  return {
    props: {
      forRent: forRent?.hits,
      forSale: forSale?.hits,
    },
  };
};
