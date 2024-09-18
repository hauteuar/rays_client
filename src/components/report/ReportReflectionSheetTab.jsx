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

import {ReportReflectionSheetTabTableRow}  from "./ReportReflectionSheetTabTableRow";
export function ReportReflectionSheetTab() {
  const tableData = [

    {courseName: "Course Name C", courseDuration: "1 year", totalClasses: "60", completedClasses: "20"},
    {courseName: "Course Name D", courseDuration: "6 Months", totalClasses: "50", completedClasses: "26"},
    {courseName: "Course Name B", courseDuration: "6 Months", totalClasses: "55", completedClasses: "20"},
    {courseName: "Course Name A", courseDuration: "1 year", totalClasses: "80", completedClasses: "26"},
    {courseName: "Course Name B", courseDuration: "1 year", totalClasses: "85", completedClasses: "30"},
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
                <Th className="text-left">Course name</Th>
                <Th className="text-left">Course duration</Th>
                <Th className="text-left">Total Classes</Th>
                <Th className="text-left">Completed Classes</Th>
                <Th className="text-left">Reflection Sheet</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tr, index) => (<ReportReflectionSheetTabTableRow key={index} courseName={tr.courseName} courseDuration={tr.courseDuration} totalClasses={tr.totalClasses} completedClasses={tr.completedClasses}/>))}
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportReflectionSheetTab;
