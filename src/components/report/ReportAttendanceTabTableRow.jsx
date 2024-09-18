import { Tr, Td } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function ReportAttendanceTabTableRow({courseName, completedSessions, present, absent,}) {
    const navigate = useNavigate();
    console.log("tablerow courseName: ", courseName)
    const handleClick = () => {
        navigate("/reports/reportsAttendanceDetails", {state: {
            courseName: courseName,
            completedSessions: completedSessions,
            present: present,
            absent: absent
        }});
    }
  
    return (
    

    <Tr
      onClick={handleClick}
      className="cursor-pointer"
      sx={{
        _hover: {
          bg: "gray.100", // Adjust color as needed
        },
      }}
    >
      <Td>{courseName}</Td>
      <Td isNumeric>{completedSessions}</Td>
      <Td isNumeric>{present}</Td>
      <Td isNumeric>{absent}</Td>
    </Tr>
  );
}
