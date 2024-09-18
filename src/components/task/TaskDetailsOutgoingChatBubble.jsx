import { Avatar } from "@chakra-ui/react";

export function TaskDetailsOutgoingChatBubble() {
  return (
    <div className="flex flex-col items-start gap-4">
      <img
        src="/src/assets/TaskDetailChatBubbleAttachment.jpg"
        className="rounded-lg"
      />
      <div className="flex gap-2 items-center justify-end w-full">
        <span>
          Today, 17 April | 11.45 am | <b>Michael</b>
        </span>
        <Avatar
          size="sm"
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
          bg="transparent"
          className="bg-transparent"
        />
      </div>
      <span className="ml-10 text-right">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, labore
        expedita! Ratione id cupiditate quibusdam doloribus laboriosam, culpa
        laborum!
      </span>
      <hr className="w-full bg-gray-300 h-[1px]" />
    </div>
  );
}

export default TaskDetailsOutgoingChatBubble;
