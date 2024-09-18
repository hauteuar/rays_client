import { Tr, Td } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ReportPurchasedCoursesTabTableRow({courseName, courseDuration, totalClasses, courseFee,}) {
    //const navigate = useNavigate();
    console.log("tablerow courseName: ", courseName)
    /*const handleClick = () => {
        navigate("/reports/reportsAttendanceDetails", {state: {
            courseName: courseName,
            completedSessions: completedSessions,
            present: present,
            absent: absent
        }});
    }
  */
    return (
    

    <Tr
      //onClick={handleClick}
      className="cursor-pointer"
      sx={{
        _hover: {
          bg: "gray.100", // Adjust color as needed
        },
      }}
    >
      <Td className="text-left">{courseName}</Td>
      <Td className="text-left">{courseDuration}</Td>
      <Td className="text-left">{totalClasses}</Td>
      <Td className="text-left">{courseFee}</Td>
      <Td className="text-left"><span className="font-semibold text-blue-400 cursor-pointer">View</span></Td>
    </Tr>
  );
}

export default ReportPurchasedCoursesTabTableRow;