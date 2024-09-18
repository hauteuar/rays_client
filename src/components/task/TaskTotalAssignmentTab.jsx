import { Select } from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";
import TaskTotalAssignmentTabTableRow from "./TaskTotalAssignentTabTableRow";
export function TaskTotalAssignmentTab() {
  const tasks = [
    {
      coach: "Michael Jessica",
      title: "Batting Lineup Optimization",
      assignedOn: "14 Jan 2024",
      readDate: "20 Jan 2024",
      status: "Read",
    },
    {
        coach: "Fundamentals of Cricket",
        title: "Pitch Performance Analysis",
        assignedOn: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
      },
      {
        coach: "Emily Smith",
        title: "Stadium Seating Capacity Analysis",
        assignedOn: "20 Nov 2023",
        readDate: "-",
        status: "Pending",
      },
      {
        coach: "Fundamentals of Cricket",
        title: "Pitch Performance Analysis",
        assignedOn: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
      },
      {
        coach: "Ava Williams",
        title: "Fielding Positioning Optimization",
        assignedOn: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
      },
    {
        coach: "Ethan Anderson",
        title: "Player Injury Risk Assessment",
        assignedOn: "14 Jan 2024",
        readDate: "20 Jan 2024",
        status: "Read",
      },
      
      {
        coach: "Wilson",
        title: "Fielding Positioning Optimization",
        assignedOn: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
      },
      {
        coach: "Ava Williams",
        title: "Fielding Positioning Optimization",
        assignedOn: "06 Dec 2023",
        readDate: "-",
        status: "Pending",
      },
    {
        coach: "Ethan Anderson",
        title: "Player Injury Risk Assessment",
        assignedOn: "14 Jan 2024",
        readDate: "20 Jan 2024",
        status: "Read",
      },
      
      {
        coach: "Wilson",
        title: "Fielding Positioning Optimization",
        assignedOn: "10 Nov 2023",
        readDate: "13 Nov 2023",
        status: "Read",
      },
  ];
  return (
    <div className="bg-white w-full h-full">
      <div className="w-full flex gap-4 items-center justify-start">
        <Select
          icon={<MdArrowDropDown />}
          placeholder="All Coach"
          className="mx-5"
        >
          <option value="coach1">Coach Name 1</option>
          <option value="coach2">Coach Name 2</option>
          <option value="coach2">Coach Name 3</option>
        </Select>

        <Select
          icon={<MdArrowDropDown />}
          placeholder="All Year"
          className="mx-5"
        >
          <option value="coach1">Monthly</option>
          <option value="coach2">Quarterly</option>
          <option value="coach2">Yearly</option>
        </Select>

        <Select
          icon={<MdArrowDropDown />}
          placeholder="2024"
          className="mx-5"
        />
        <span className="whitespace-nowrap ml-4">
          Total&nbsp;Assignment&nbsp;-&nbsp;35
        </span>
      </div>
      <div className="mt-4 ml-5">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Coach / Batch name</Th>
                <Th>Assignment title</Th>
                <Th>Assigned on</Th>
                <Th>Read date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              
              {tasks.map((task, index) => (
                <TaskTotalAssignmentTabTableRow key={index} coach={task.coach} title={task.title} assignedOn={task.assignedOn} readDate={task.readDate} status={task.status}/>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TaskTotalAssignmentTab;
