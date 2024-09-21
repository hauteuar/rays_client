import React, { useEffect, useState } from "react";
import { Select, Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import TaskTotalAssignmentTabTableRow from "./TaskTotalAssignentTabTableRow";
import axios from "axios";
import { MdArrowDropDown } from "react-icons/md";

export function TaskTotalAssignmentTab() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to flatten the assignment data structure
  const flattenAssignments = (assignmentData) => {
    let flattenedAssignments = [];
    for (let date in assignmentData) {
      flattenedAssignments = [
        ...flattenedAssignments,
        ...assignmentData[date].map((assignment) => ({
          ...assignment,
          date,
        })),
      ];
    }
    return flattenedAssignments;
  };

  // Function to fetch tasks from the API
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('booking-token');
      const response = await axios.post(
        'https://hwzthat.com/api/assignments_data',
       {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const data = response.data.result;
      const flattenedTaskList = flattenAssignments(data.assignment_list);
      const flattenedDefaultTaskList = flattenAssignments(data.default_course_assignment_list);

      setTasks([...flattenedTaskList, ...flattenedDefaultTaskList]);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Error fetching tasks. Please try again.");
      setLoading(false);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white w-full h-full">
      <div className="w-full flex gap-4 items-center justify-start">
        <Select icon={<MdArrowDropDown />} placeholder="All Coach" className="mx-5">
          {/* Add options dynamically based on available coaches */}
          {tasks.map((task, index) => (
            <option key={index} value={task.user_name}>{task.user_name}</option>
          ))}
        </Select>

        <Select icon={<MdArrowDropDown />} placeholder="All Year" className="mx-5">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </Select>

        <Select icon={<MdArrowDropDown />} placeholder="2024" className="mx-5" />
        <span className="whitespace-nowrap ml-4">Total&nbsp;Assignment&nbsp;-&nbsp;{tasks.length}</span>
      </div>

      <div className="mt-4 ml-5">
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Coach / Batch name</Th>
                <Th>Assignment title</Th>
                <Th>Assigned on</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tasks.map((task, index) => (
                <TaskTotalAssignmentTabTableRow
                  key={index}
                  id={task.id}
                  coach={task.user_name}
                  title={task.title}
                  assignedOn={task.date}
                  status={task.statusstatus || "Pending"}  // Handle the assignment status
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default TaskTotalAssignmentTab;
