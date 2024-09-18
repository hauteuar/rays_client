import TaskDetailsIncomingChatBubble from "./TaskDetailsIncomingChatBubble"
import TaskDetailsOutgoingChatBubble from "./TaskDetailsOutgoingChatBubble"


export function TaskDetailsChatContainer(){
  return (
    <div className="w-full h-full flex flex-col gap-4">
        <TaskDetailsIncomingChatBubble />
        <TaskDetailsOutgoingChatBubble />
    </div>
  )
}

export default TaskDetailsChatContainer