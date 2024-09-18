import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ReportsAttendanceDetailsTable from "./ReportsAttendanceDetailsTable";
export function ReportsAttendanceDetails() {
  const location = useLocation(); // Get the location object
  const { courseName, completedSessions, present, absent } =
    location.state || {};
  console.log("Course Name: ", courseName);
  return (
    <div className="w-full h-full p-8 pl-14 flex flex-col items-start gap-4 bg-gray-50">
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
              <span className="font-bold text-2xl">Attendance | {courseName}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col items-start bg-white p-4 rounded-lg w-60 h-30">
            <span className="text-2xl font-bold">{completedSessions}</span>
            <span>Completed sessions</span>
        </div>
        <div className="flex flex-col items-start bg-white p-4 rounded-lg w-60 h-30">
            <span className="text-2xl font-bold">{present}</span>
            <span>Present</span>
        </div>
        <div className="flex flex-col items-start bg-white p-4 rounded-lg w-60 h-30">
            <span className="text-2xl font-bold">{absent}</span>
            <span>Absent</span>
        </div>
      </div>
      <span className="text-lg">Completed classes - <b>20</b></span>

      <ReportsAttendanceDetailsTable />
    </div>
  );
}

export default ReportsAttendanceDetails;
