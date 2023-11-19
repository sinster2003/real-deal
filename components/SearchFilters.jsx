import { useRef, useState } from "react";
import filterData from "../utils/filterData";
import { Flex, Select, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SearchFilters = ({ value, setValue }) => {
  const router = useRouter();
  const [bool, setBool] = useState(false);
  const optionRef = useRef([]);

  const handleFilter = async (key, value) => {
    setBool(true);
    const path = router.pathname;
    const { query } = router;

    // modify query
    const newQuery = {
      ...query,
      [key]: value,
    };

    // creating the new url
    await router.push({ pathname: path, query: newQuery });
    setBool(false);
  };

  const handleLocation = async (e) => {
    setValue(e.target.value);
  };

  const handleReset = async () => {
    setBool(true);

    // manipulating DOM Select to make the values ""
    optionRef.current.forEach((option) => (option.value = ""));

    await router.push({ pathname: router.pathname, query: {} });
    setBool(false);
  };

  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex
        flexWrap="wrap"
        w="100%"
        alignItems="center"
        justifyContent="center"
        my="4"
        gap="8"
      >
        {filterData.map((data, i) => {
          return (
            <Select
              key={data.name}
              w="50"
              onChange={(e) => handleFilter(data.name, e.target.value)}
              // ref each select element in current array to manipulate DOM
              ref={(ele) => (optionRef.current[i] = ele)}
              disabled={bool}
            >
              {data.items?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.key}
                </option>
              ))}
            </Select>
          );
        })}

        <Button onClick={handleReset} disabled={bool}>
          Reset
        </Button>
      </Flex>
      <Input
        placeholder={"Search By Location..."}
        value={value}
        variant="filled"
        w="auto"
        onChange={handleLocation}
      />
    </Flex>
  );
};

export default SearchFilters;
