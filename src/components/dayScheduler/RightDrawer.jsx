import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa6";
import { Button, Icon } from "@chakra-ui/react";
import LaneContainer from "./LaneContainer";
// eslint-disable-next-line react/prop-types
function RightDrawer({ isOpen, onClose, headerColour }) {
  console.log("headerColour in drawer: ", headerColour);
  return (
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent w="600px" minW="400px" maxW="620px">
          <DrawerCloseButton />
          <DrawerHeader
            className={`${
              headerColour === "white" ? "text-black" : "text-white"
            } ${headerColour}`}
          >
            <span className="font-bold">
              Fundamentals of Cricket&nbsp;|&nbsp;
            </span>
            <span>10:00 am-11:00 am</span>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Players 20</span>
              <Button
                p={2}
                display="flex" // Use Flexbox to align items
                alignItems="center"
                className="w-40"
                variant="unstyled" // Removes default border, background, and padding
                sx={{
                  border: "none", // No border by default
                  outline: "none", // Removes outline across all states
                  _hover: {
                    border: "none",
                    background: "none",
                  },
                  _focus: {
                    border: "none",
                    boxShadow: "none", // Ensures no outline or shadow when focused
                  },
                  _active: {
                    border: "none",
                    background: "none",
                  },
                  _focusVisible: {
                    outline: "none", // Ensures no outline when focus is visible
                    boxShadow: "none",
                  },
                }}
              >
                <Icon as={FaRegBell} color="blue.500" mr={2} mt={1} />
                <span className="text-blue-500">Goal Completed</span>
              </Button>
            </div>
            <div className="flex flex-col gap-8 justify-start items-center">
              <LaneContainer
                laneName="Batting"
                laneNumber="Lane 1"
                timeslot="10:00 am - 10:30 am"
                athletes={[
                  "David",
                  "James",
                  "Robert",
                  "Christopher",
                  "William",
                  "Matthew",
                ]}
              />
              <LaneContainer
                laneName="Bowling"
                laneNumber="Lane 1"
                timeslot="10:30 am - 11:00 am"
                athletes={[
                  "David",
                  "James",
                  "Robert",
                  "Christopher",
                  "William",
                ]}
              />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default RightDrawer;
