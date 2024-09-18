import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Editor } from "primereact/editor";
/* PrimeReact core styles */
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme CSS (you can change the theme)
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS
import "primeicons/primeicons.css"; // PrimeIcons CSS for icons
import TextEditorMenuBar from "../../components/textEditorMenuBar/TextEditorMenuBar";
import "./TaskDetails.css";
import { FileUpload } from "primereact/fileupload";
import FileUploadWithMedia from "../../components/task/FileUploadWithMedia";
import TaskDetailsChatContainer from "../../components/task/TaskDetailsChatContainer";
export function TaskDetails() {
  const location = useLocation(); // Get the location object
  const { coach, title, assignedOn, readDate, status, index } =
    location.state || {};
  let text = "Enter your comment here...";

  const setText = (input) => {
    text = input;
  };
  return (
    <div className="flex flex-col p-6 gap-4 h-full w-full bg-slate-50">
      <div>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          marginBottom="4"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/task">
              <span className="font-semibold text-2xl text-gray-500">Task</span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span className="font-bold text-2xl">{title}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex gap-4">
        <div className="bg-white rounded-lg w-[700px] h-full p-8">
          <TaskDetailsChatContainer />
        </div>

        <div className="w-[500px] h-fit flex flex-col gap-2">
          <div>
            <TextEditorMenuBar />
            <Editor
              value={text}
              onTextChange={(e) => setText(e.htmlValue)}
              style={{ height: "320px", width: "500px", borderRadius: "12px" }}
            />
          </div>

          <FileUploadWithMedia />
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
