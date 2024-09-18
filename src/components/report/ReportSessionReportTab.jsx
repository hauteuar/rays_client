import { Flex, Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { ReportSessionReportTabTableRow } from "./ReportSessionReportTabTableRow";
export function ReportSessionReportTab() {
  const tableData = [

    {courseName: "Course Name C", courseDuration: "1 year", batting: "25 hr 20 min", bowling: "20 hr 30 min", fielding: "20 hr 30 min", fitness: "20 hr 30 min"},
    {courseName: "Course Name D", courseDuration: "6 Months", batting: "20 hr 10 min", bowling: "10 hr 20 min", fielding: "30 hr 30 min", fitness: "10 hr 20 min"},
    {courseName: "Course Name B", courseDuration: "6 Months", batting: "15 hr 15 min", bowling: "15 hr 20 min", fielding: "15 hr 20 min", fitness: "15 hr 20 min"},

  ]


  return (
    <>
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
                <Th className="text-left">Batting</Th>
                <Th className="text-left">Bowling</Th>
                <Th className="text-left">Fielding</Th>
                <Th className="text-left">Fitness</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tr, index) => (<ReportSessionReportTabTableRow key={index} courseName={tr.courseName} courseDuration={tr.courseDuration} batting={tr.batting} bowling={tr.bowling} fielding={tr.fielding} fitness={tr.fitness}/>))}
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>

   
    </>
    
  );
}

export default ReportSessionReportTab;
