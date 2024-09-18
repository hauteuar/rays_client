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


import ReportPurchasedCoursesTabTableRow from "./ReportPurchasedCoursesTabTableRow";
import { m } from "framer-motion";
export function ReportPurchasedCoursesTab() {
  const tableData = [

    {courseName: "Course Name C", courseDuration: "1 year", totalClasses: "60", courseFee: "$300"},
    {courseName: "Course Name D", courseDuration: "6 Months", totalClasses: "50", courseFee: "$250"},
    {courseName: "Course Name B", courseDuration: "6 Months", totalClasses: "55", courseFee: "$250"},
    {courseName: "Course Name A", courseDuration: "1 year", totalClasses: "80", courseFee: "$300"},
    {courseName: "Course Name B", courseDuration: "1 year", totalClasses: "85", courseFee: "$250"},
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
                <Th className="text-left">Course Fee</Th>
                <Th className="text-left">Reflection Sheet</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tr, index) => (<ReportPurchasedCoursesTabTableRow key={index} courseName={tr.courseName} courseDuration={tr.courseDuration} totalClasses={tr.totalClasses} courseFee={tr.courseFee}/>))}
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportPurchasedCoursesTab;
