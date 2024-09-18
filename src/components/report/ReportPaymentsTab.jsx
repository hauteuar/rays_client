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

import { Progress } from "@chakra-ui/react";

import ReportPaymentsTabTableRow from "./ReportPaymentsTabTableRow";
export function ReportPaymentsTab() {
  const tableData = [

    {courseName: "Course Name C", courseFee: "$300", batch: "10 am - 11 am", paymentType: "6 month instalment", paymentDueDate: "14-04-2024", remaining: 90},
    {courseName: "Course Name D", courseFee: "$150", batch: "11 am - 12 pm", paymentType: "6 month instalment", paymentDueDate: "25-04-2024", remaining: 70},
    {courseName: "Course Name B", courseFee: "$80", batch: "2 pm - 3 pm", paymentType: "One time", paymentDueDate: "-", remaining: 0},
    {courseName: "Course Name A", courseFee: "$200", batch: "2 pm - 3 pm", paymentType: "One time", paymentDueDate: "-", remaining: 0},
    {courseName: "Course Name B", courseFee: "$80", batch: "2 pm - 3 pm", paymentType: "One time", paymentDueDate: "-", remaining: 0},
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
                <Th className="text-left">Course Fee</Th>
                <Th className="text-left">Batch</Th>
                <Th className="text-left">Payment Type</Th>
                <Th className="text-left">Payment Due date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((tr, index) => (<ReportPaymentsTabTableRow key={index} courseName={tr.courseName} courseFee={tr.courseFee} batch={tr.batch} paymentType={tr.paymentType} paymentDueDate={tr.paymentDueDate} remaining={tr.remaining}/>))}
            </Tbody>

              

          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ReportPaymentsTab;
