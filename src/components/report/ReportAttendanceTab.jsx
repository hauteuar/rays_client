import { Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { ReportAttendanceTabTableRow } from "./ReportAttendanceTabTableRow";
export function ReportAttendanceTab() {
  const tableData = [{courseName: "Course Name A", completedSessions: "30", present: "28", absent: "3"},
    {courseName: "Course Name B", completedSessions: "20", present: "17", absent: "3"},
    {courseName: "Course Name C", completedSessions: "15", present: "10", absent: "5"},
    {courseName: "Course Name D", completedSessions: "10", present: "10", absent: "0"}
  ]
  return (
    <div className="bg-white w-full h-full">
      <div className="w-48">
        <Select
          icon={<MdArrowDropDown />}
          placeholder="2024"
          className="mx-5"
        />
      </div>
      <div className="mt-4 ml-5">
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Course name</Th>
                <Th isNumeric>Completed sessions</Th>
                <Th isNumeric>Present</Th>
                <Th isNumeric>Absent</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tr, index) => (<ReportAttendanceTabTableRow key={index} courseName={tr.courseName} completedSessions={tr.completedSessions} present={tr.present} absent={tr.absent}/>))}
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportAttendanceTab;
