import { Button, ButtonGroup } from "@chakra-ui/react";
export function CoachProfileCard() {
  return (
    <div>
      <div className="relative w-64 h-64">
        <img
          src="https://bit.ly/sage-adebayo"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col items-start pl-5 absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
          <span className="font-bold">Robert Anderson</span>
          <span>Batting coach</span>
        </div>
      </div>
      <div>
        <Button colorScheme="green" className="w-full mt-4">Connect now</Button>
      </div>
    </div>
  );
}

export default CoachProfileCard;
