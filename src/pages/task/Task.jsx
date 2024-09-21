import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TaskTotalAssignmentTab from "../../components/task/TaskTotalAssignmentTab";

export function Task() {
  const [taskDetails, setTaskDetails] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    shared: 0,
  });

  const fetchTaskDetails = async () => {
    try {
      const token = localStorage.getItem("booking-token");
      const response = await axios.post(
        "https://hwzthat.com/api/assignments_data",
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      setTaskDetails({
        total: data.totalAssignments || 0,
        pending: data.pendingAssignments || 0,
        completed: data.completedAssignments || 0,
        shared: data.sharedAssignments || 0,
      });
    } catch (error) {
      console.error("Error fetching task details:", error);
    }
  };

  useEffect(() => {
    fetchTaskDetails();
  }, []);

  return (
    <div className="p-5">
      <div className="text-left pl-4">
        <span className="text-2xl font-bold">My Task</span>
      </div>

      <div className="mt-4">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span>Total assignment</span>
                <span className="text-3xl font-semibold text-blue-500">
                  {taskDetails.total}
                </span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span>Pending</span>
                <span className="text-3xl font-semibold text-blue-500">
                  {taskDetails.pending}
                </span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span>Completed</span>
                <span className="text-3xl font-semibold text-blue-500">
                  {taskDetails.completed}
                </span>
              </div>
            </Tab>
            <Tab
              _selected={{ borderWidth: "5px" }}
              borderWidth="2px"
              borderColor="blue.300"
              borderRadius="md"
              m="2"
              _focus={{ outline: "none", boxShadow: "none" }}
            >
              <div className="p-4 text-left flex flex-col items-start w-48 rounded-lg">
                <span>Shared</span>
                <span className="text-3xl font-semibold text-blue-500">
                  {taskDetails.shared}
                </span>
              </div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <TaskTotalAssignmentTab />
            </TabPanel>
            <TabPanel>
              <p>Pending Assignments!</p>
            </TabPanel>
            <TabPanel>
              <p>Completed Assignments!</p>
            </TabPanel>
            <TabPanel>
              <p>Shared Assignments!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Task;
