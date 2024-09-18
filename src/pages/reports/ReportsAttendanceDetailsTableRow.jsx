import { Td, Tr } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export function ReportsAttendanceDetailsTableRow({date, status}) {
  return (
    <>
      <Tr bg="white">
        <Td fontSize="lg" minWidth="100px" width="200px">{date}</Td>
        <Td fontSize="lg" minWidth="100px" width="200px">
          
            <span
              className={`${
                status === "Present" ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {status}
            </span>
 
        </Td>
      </Tr>
    </>
  );
}

export default ReportsAttendanceDetailsTableRow;
