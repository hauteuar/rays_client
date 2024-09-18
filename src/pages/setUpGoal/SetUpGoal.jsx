import { Button, Flex, Input } from "@chakra-ui/react";
import GoalsContainer from "../../components/setUpGoals/GoalsContainer";
import GoalDetailsContainer from "../../components/setUpGoals/GoalDetailsContainer";
import { Box, Icon } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Select, Textarea } from "@chakra-ui/react";
import { useState } from "react";
export function SetUpGoal() {
  const [isSetUpNewGoalModalOpen, setIsSetUpNewGoalModalOpen] = useState(false);

  const handleSetUpNewGoalClick = () => {
    setIsSetUpNewGoalModalOpen(true);
  };

  const handleCloseSetUpNewGoalModal = () => {
    setIsSetUpNewGoalModalOpen(false);
  };

  const [isConfirmGoalCompleteModalOpen, setIsConfirmGoalCompleteModalOpen] =
    useState(false);

  const handleConfirmGoalCompleteClick = () => {
    setIsConfirmGoalCompleteModalOpen(true);
  };

  const handleCloseConfirmGoalCompleteModal = () => {
    setIsConfirmGoalCompleteModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full flex justify-between items-center p-4">
          <span className="font-bold text-2xl flex flex-start m-5">
            Set up Goal
          </span>
          <Button
            colorScheme="blue"
            className="w-[15%] mt-4"
            onClick={handleSetUpNewGoalClick}
          >
            Set up New Goal
          </Button>
        </div>

        <div className="flex h-full">
          <GoalsContainer />
          <GoalDetailsContainer
            handleConfirmGoalCompleteClick={handleConfirmGoalCompleteClick}
          />
        </div>
      </div>

      <Modal
        isOpen={isSetUpNewGoalModalOpen}
        onClose={handleCloseSetUpNewGoalModal}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="text-black" style={{ fontWeight: 700 }}>
            Set up New Goal
          </ModalHeader>
          <ModalCloseButton
            border="2px"
            borderColor="gray.300"
            borderRadius="full"
            background="gray.200"
            color="black"
            _hover={{ background: "gray.300" }}
            _focus={{ boxShadow: "none" }}
          />
          <hr className="w-full bg-gray-300 h-[1px]" />
          <div className="w-full p-3 flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">
                Goal Title
              </span>
              <Input
                placeholder="Enter goal title"
                size="md" // Sizes: xs, sm, md, lg
                variant="outline" // Variants: outline, filled, flushed, unstyled
                focusBorderColor="blue.500" // Border color when focused
              />
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">
                Description
              </span>
              <Textarea
                placeholder="Type your message..."
                w="full" // Takes up the full width of the parent container
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md" // Adds rounded borders
              />
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <span className="text-black font-semibold text-lg">
                Select Coach
              </span>
              <Select
                placeholder="Select coach"
                h="42px" // Adjust height to match typical button height
                w="full"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
          </div>
          <ModalBody></ModalBody>
          <ModalFooter>
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
                onClick={handleCloseSetUpNewGoalModal} // Add your cancel handler here if different from close
                size="lg"
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleCloseSetUpNewGoalModal}
                size="lg"
              >
                Submit
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isConfirmGoalCompleteModalOpen}
        onClose={handleCloseConfirmGoalCompleteModal}
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <div className="w-full p-3 flex flex-col items-center gap-4">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="red.400"
              color="white"
              borderRadius="full"
              width="100px" // Adjust size as needed
              height="100px" // Adjust size as needed
            >
              <Icon as={QuestionIcon} w={16} h={16} />{" "}
              {/* Icon size inside the circle */}
            </Box>
            <div className="flex flex-col items-center gap-2 w-full">
              <span className="text-black font-bold text-xl text-center ">
                Are you sure you&apos;ve completed your goal?
              </span>
            </div>
          </div>
          <ModalBody></ModalBody>
          <ModalFooter>
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
                onClick={handleCloseConfirmGoalCompleteModal} // Add your cancel handler here if different from close
                size="lg"
              >
                No
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleCloseConfirmGoalCompleteModal}
                size="lg"
              >
                Yes
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SetUpGoal;
