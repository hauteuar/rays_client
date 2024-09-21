import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function ReportsReflectionSheetDetails() {
  const location = useLocation(); // Get the location object
  const { courseName } = location.state || {};
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const navigate = useNavigate();

  // Fetch the submitted assignments from the API
  const fetchSubmittedAssignments = async () => {
    try {
      const token = localStorage.getItem('booking-token');
      const response = await axios.post(
        'https://hwzthat.com/api/get_lms_assignment_submitted_list?master_id=29', // Use dynamic master_id if necessary
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSubmittedAssignments(response.data || []); // Assuming the response is a list of assignments
    } catch (err) {
      console.error("Error fetching submitted assignments:", err);
    }
  };

  // Fetch the assignments when the component mounts
  useEffect(() => {
    fetchSubmittedAssignments();
  }, []);

  // Handle click to get assignment feedback and navigate
  const handleFeedbackClick = (submittedAssignmentId, submittedFileId) => {
    navigate(`/feedback/${submittedAssignmentId}/${submittedFileId}`);
  };

  return (
    <div className="pl-4 bg-slate-100 w-full h-[100vw]">
      {/* Breadcrumb navigation */}
      <div>
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} marginBottom="4">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/reports">
              <span className="font-semibold text-2xl text-gray-500">Reports</span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span className="font-bold text-2xl">Reflection | {courseName}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex flex-col gap-4 mt-3">
        <span className="font-bold">Submitted Assignments</span>
        <div className="flex flex-col gap-2 w-full">
          {submittedAssignments.length > 0 ? (
            submittedAssignments.map((assignment) => (
              <div
                key={assignment.submitted_assignment_id}
                className="px-4 py-2 bg-white cursor-pointer hover:bg-blue-50"
                onClick={() => handleFeedbackClick(assignment.submitted_assignment_id, assignment.submitted_file_id)}
              >
                <span className="text-blue-500">
                  {assignment.submitted_date || 'Unknown Date'} - {assignment.title || 'Untitled Assignment'}
                </span>
              </div>
            ))
          ) : (
            <span>No assignments submitted yet.</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReportsReflectionSheetDetails;
