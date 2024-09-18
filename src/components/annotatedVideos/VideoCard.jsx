import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
export function VideoCard() {
  return (
    <Card maxW="sm" boxShadow="xl">
      <CardBody p={0}>
        <Image
          className="w-full"
          src="/src/assets/videoThumbnail.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="md"
          m={0}
        />
        <Stack mt="2" spacing="2" align="start">
          <div className="flex justify-between items-center w-full">
            <span className="text-sm">March 8, 2024</span>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDotsVertical />}
                variant="unstyled" // This removes the default styles
                _focus={{ outline: "none", boxShadow: "none", border: "none" }}
                _hover={{
                  bg: "transparent",
                  outline: "none",
                  boxShadow: "none",
                  border: "none",
                }}
                _active={{
                  bg: "transparent",
                  outline: "none",
                  boxShadow: "none",
                  border: "none",
                }}
                _focusVisible={{
                  outline: "none",
                  boxShadow: "none",
                  border: "none",
                }}
                bg="transparent" // Sets the background to transparent
                transition="none"
                display="flex" // Ensures the button is flex for alignment
                alignItems="center" // Centers items vertically
                justifyContent="center" // Centers items horizontally
                p={0} // Removes any padding that could offset the icon
                m={0} // Removes any margin that could offset the buttonF
              />
              <MenuList minW="140px">
                <div className="flex justify-beteen items-center">
                <MenuItem fontSize="x-small" p={0}>Play</MenuItem>
                <CiPlay1 />
                </div>
                
                <MenuDivider />
                <MenuItem fontSize="x-small" p={0}>Share</MenuItem>
                <MenuDivider />
                <MenuItem fontSize="x-small" p={0}>Edit Title</MenuItem>
                <MenuDivider />
                <MenuItem fontSize="x-small"p={0}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Stack>
      </CardBody>

      <CardFooter p={0}>
        <div className="text-sm font-bold">
          <Text>Coach name</Text>
        </div>
      </CardFooter>
    </Card>
  );
}

export default VideoCard;
