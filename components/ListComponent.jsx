import { Flex, UnorderedList, ListItem} from "@chakra-ui/react";
import Link from "next/link";

const ListComponent = () => {
  return (
    <Flex flexDirection="row">
          <UnorderedList
            sx={{ listStyle: "none", display: "flex", flexDirection: "row" }}
          >
            <ListItem px="8" fontSize="lg" _hover={{ color: "teal.600" }}>
              <Link href="/">Home</Link>
            </ListItem>
            <ListItem px="8" fontSize="lg" _hover={{ color: "teal.600" }}>
              <Link href="/search">Search</Link>
            </ListItem>
            <ListItem px="8" fontSize="lg" _hover={{ color: "teal.600" }}>
              <Link href="/search?purpose=for-sale">Buy Property</Link>
            </ListItem>
            <ListItem px="8" fontSize="lg" _hover={{ color: "teal.600" }}>
              <Link href="/search?purpose=for-rent">Rent Property</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
  )
}

export default ListComponent