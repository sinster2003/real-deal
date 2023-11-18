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
  const [value, setValue] = useState("");
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const filterLocationData = properties.filter(property => {

      const {location} = property;

      console.log("location",location)

      // some checks at least one case being true then returns true
      const isLocated = location.some(item => item.name?.toString().toLowerCase().includes(value.toString().toLowerCase()))

      return isLocated && property
    })

    setLocationData(filterLocationData);

  }, [value, properties])
  
  // filtering out land properties
  let filterProperties;

  if(value === "") {
    filterProperties = properties;
  }
  else if(value !== "" && locationData) {
    filterProperties = locationData;
  }
  else {
    filterProperties=[];
  }

  if(!locationData) {
    return <Text>Loading...</Text>
  }

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
        {showSearchFilters && <SearchFilters value={value} setValue={setValue}/>}
      </Flex>
      <Text fontSize="3xl" fontWeight="bold" p="8" color="gray.500" sx={{"@media screen and (max-width: 600px)": {
            textAlign: "center"
          }}}>
        Properties {router.query?.purpose}
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="8">
        {filterProperties?.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </Flex>
      {filterProperties.length === 0 && <Text textAlign="center">No match Found</Text>}
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
