import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,

  } from "@chakra-ui/react";
import ReportsAttendanceDetailsTableRow from "./ReportsAttendanceDetails";
export function ReportsAttendanceDetailsTable(){
  const classes = [{date: "15-02-2024", status: "Present"},
    {date: "15-02-2024", status: "Present"},
    {date: "13-02-2024", status: "Present"},
    {date: "10-02-2024", status: "Absent"},
    {date: "15-02-2024", status: "Present"},
    {date: "08-02-2024", status: "Present"},
    {date: "06-02-2024", status: "Present"},
    {date: "04-02-2024", status: "Absent"},
    {date: "10-02-2024", status: "Present"},
    {date: "08-02-2024", status: "Present"},
    {date: "06-02-2024", status: "Present"},
    {date: "04-02-2024", status: "Present"},
    {date: "10-02-2024", status: "Present"},
    {date: "08-02-2024", status: "Absent"},
    {date: "06-02-2024", status: "Present"},
    {date: "04-02-2024", status: "Present"},
    {date: "10-02-2024", status: "Present"},
    {date: "08-02-2024", status: "Present"},

    
  ]
  return (
    <div>
<TableContainer>
            <Table tableLayout="fixed">
              <Thead>
                <Tr bg="white">
                  <Th fontSize="lg" minWidth="100px" width="200px">Date</Th>
                  <Th fontSize="lg" minWidth="100px" width="200px">Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {classes.map((coursesClass, index) => (
                  <ReportsAttendanceDetailsTableRow
                    key={index}
                    date={coursesClass.date}
                    status={coursesClass.status}

                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
    </div>
  )
}

export default ReportsAttendanceDetailsTable