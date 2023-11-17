import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../../components/SearchFilters";
import { fetchData } from "../../utils/fetchData";
import PropertyCard from "../../components/PropertyCard";

const Search = ({ properties }) => {
  // url ---> /search?
  const router = useRouter();
  const [showSearchFilters, setShowSearchFilters] = useState(false);
  const [locationProperties, setLocationProperties] = useState(properties);

  return (
    <Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        cursor="pointer"
        bg="gray.100"
        p="3"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          onClick={() => {
            setShowSearchFilters((prev) => !prev);
          }}
          color="gray.500"
        >
          <Text fontSize="xl" fontWeight="500">
            Search Properties By Filters
          </Text>
          <Icon as={BsFilter} ml="3" fontSize="lg" />
        </Flex>
        {showSearchFilters && <SearchFilters/>}
      </Flex>
      <Text fontSize="3xl" fontWeight="bold" p="8" color="gray.500" sx={{"@media screen and (max-width: 600px)": {
            textAlign: "center"
          }}}>
        Properties {router.query?.purpose}
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="8">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </Flex>
      {properties.length === 0 && <Text>No match Found</Text>}
    </Box>
  );
};

export default Search;

export const getServerSideProps = async ({ query }) => {
  const purpose = query?.purpose || "for-rent";
  const maxArea = query?.areaMax || 1000;
  const maxPrice = query?.priceMax || 1000000;
  const rooms = query?.roomsMin || 1;
  const baths = query?.bathsMin || 1;

  const data = await fetchData(
    `properties/list?locationExternalIDs=5002&&purpose=${purpose}&&areaMax=${maxArea}&&priceMax=${maxPrice}&&bathsMin=${baths}&&roomsMin=${rooms}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
};
