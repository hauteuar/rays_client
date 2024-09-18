// CourseDetails.jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa"; // Make sure you have react-icons installed

import ReactAudioPlayer from "react-audio-player";

export function ReportsReflectionSheetDetails() {
  const location = useLocation(); // Get the location object
  const { courseName } = location.state || {};

  const handleRecord = () => {
    // Function to handle audio recording
    alert("Recording audio...");
  };



  return (
    <div className="pl-4 bg-slate-100 w-full h-[100vw]">
      {/* Breadcrumb navigation */}
      <div>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          marginBottom="4"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/reports">
              <span className="font-semibold text-2xl text-gray-500">
                Reports
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span className="font-bold text-2xl">
                Reflection | {courseName}
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex justify-start items-start gap-4 mt-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <span className="font-bold">
            Completed sessions - <b>20</b>
          </span>
          <div className="flex flex-col gap-1 w-full">
            <div className="px-4 py-2 bg-blue-500">
              <span className="text-white">09/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">07/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">05/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">01/02/2024</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex flex-col bg-white w-full h-fit rounded-lg p-4 gap-4">
            <div className="flex gap-8">
              <div className="flex">
                <span className="text-lg">Total session time :&nbsp;</span>
                <span className="text-lg font-bold">1hr</span>
              </div>
              <div>
                <span className="text-lg">Total received :&nbsp;</span>
                <span className="text-lg font-bold">45min</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">20 min</span>
                <span>Batting</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">15 min</span>
                <span>Bowling</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">Not received</span>
                <span>Fielding</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">10 min</span>
                <span>Fitness</span>
              </div>
            </div>
            <hr className="w-full bg-gray-300 h-[1px]" />
            <span className="font-bold text-left">Player performance</span>
            <div className="flex gap-3">
              <div className="border-2 border-blue-300 rounded-md">
                <img
                  className=""
                  src="/src/assets/playerPerformance/NeedsImprovement.jpg"
                />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Satisfactory.jpg" />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Good.jpg" />
              </div>
              <div className="border-2 border-blue-700 rounded-md shadow-2xl">
                <img src="/src/assets/playerPerformance/Excellent.jpg" />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Outstanding.jpg" />
              </div>
            </div>
            <hr className="w-full bg-gray-300 h-[1px] mt-2" />
            <span className="text-sm font-bold text-left">Batting</span>
            <span className="text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ipsum quidem ducimus excepturi deleniti, repellat
              aliquam unde facilis doloremque quasi eius possimus fuga! Vero.
            </span>
            <ReactAudioPlayer src="" controls style={{ width: "100%" }} />
            <ReactAudioPlayer src="" controls style={{ width: "100%" }} />
            <span className="text-sm font-bold text-left">Bowling</span>
            <span className="text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ipsum quidem ducimus excepturi deleniti, repellat
              aliquam unde facilis doloremque quasi eius possimus fuga! Vero.
            </span>
            <InputGroup size="md">
      <Input
        placeholder="Type something..."
        borderRadius="full"
        variant="outline"
        borderColor="gray.300"
        focusBorderColor="blue.500"
        height="48px" // Adjust this value to increase the height
      />
      <InputRightElement height="100%" pr={4}>
        <IconButton
          aria-label="Record audio"
          icon={<FaMicrophone color="white" size="20px" />} // Adjust the size here
          size="md" // You can change this to 'lg' if you want it even bigger
          borderRadius="full"
          colorScheme="blue"
          onClick={handleRecord}
          bg="blue.500"
          _hover={{ bg: "blue.600" }} // Optional: adds a hover effect to the button
          _active={{ bg: "blue.700" }}
          padding={2} // Adjust padding to center the icon
        />
      </InputRightElement>
    </InputGroup>

    <Flex
              direction="row"
              justify="center"
              align="center"
              w="full"
              gap={1} // Adjust gap between buttons as needed
            >
              <Button
                variant="outline" // Makes the button have an outline style
                borderColor="blue.500" // Sets the border color to blue
                color="blue.500" // Sets the text color to blue
                mr={3}
                
                size="lg"
              >
                Save as draft
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                
                size="lg"
              >
                Submit
              </Button>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsReflectionSheetDetails;
