import { Button, Icon } from "@chakra-ui/react";
import { FaThumbsUp } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export function GoalDetailsContainer({handleConfirmGoalCompleteClick}) {
  return (
    <div className="w-[60%] bg-slate-50 ml-3 p-2">
      <div className="flex items-center justify-between p-2 w-full bg-white rounded-lg">
        <div className="flex items-center">
          <span className="text-xl font-semibold"> Goal No 1 |&nbsp;</span>
          <span className="text-orange-500 font-semibold">In progress</span>
        </div>

        <div className="flex items-center h-full">
          <Button
            onClick={handleConfirmGoalCompleteClick}
            p={2}
            colorScheme="white"
            className="w-40"
            variant="outline"
            borderColor="blue.500"
            _hover={{ bg: "blue.50", borderColor: "blue.600" }}
          >
            <Icon as={FaThumbsUp} color="blue.500" mr={2} />
            <span className="text-blue-500">Goal Completed</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 items-start mt-3">
        <div>
          <span className="text-lg font-bold text-left">Description</span>
        </div>
        <div>
          <span className="text-left">
            1. Lorem upsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
        <div className="text-left">
          <span className="text-left">
            2. Mauris pretium ut ligula sit amet pharetra. Cras vitae risus eu
            odio condimentum tincidunt quis et purus. Pallentesque vulputate,
            dui sit amet sodales ornare.
          </span>
        </div>
        <div className="text-left">
          <span className="text-left">
            3. Dapibus ipsum. Phasellus tincidunt diam massa, vitae finibus
            metus rutrum et. Nam ut ornare purus, eget imperdiet felis
          </span>
        </div>
      </div>
    </div>
  );
}

export default GoalDetailsContainer;
