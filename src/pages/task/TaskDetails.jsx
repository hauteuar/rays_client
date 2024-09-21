import React, { useEffect, useState } from "react";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Image, Heading, Text, Avatar, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import TextEditorMenuBar from "../../components/textEditorMenuBar/TextEditorMenuBar";
import { Editor } from "primereact/editor";
import TaskDetailsChatContainer from "../../components/task/TaskDetailsChatContainer";
import "./TaskDetails.css";

export function TaskDetails() {
  const location = useLocation();
  const { id, coach, title } = location.state || {}; // Ensure the id is passed correctly
  const [assignmentData, setAssignmentData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Check if id is available
  useEffect(() => {
    console.log("TaskDetails id:", id);
  }, [id]);

  // Fetch assignment data based on the id from the API
  const fetchAssignmentData = async (assignmentId) => {
    if (!assignmentId) {
      console.error("No assignment ID provided!");
      return;
    }

    try {
      const token = localStorage.getItem("booking-token");
      console.log("Fetching assignment with ID:", assignmentId);

      const response = await axios.post(
        `https://hwzthat.com/api/view_assignments_api?id=${assignmentId}`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Destructure the response data to extract relevant sections
      const { result } = response.data;
      console.log("API Response:", result); // Add log to see API response

      setAssignmentData(result.masterdata || {});
      setUserDetails(result.selected_user_details || {});
      setVideos(result.master_video || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching assignment data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAssignmentData(id); // Only call the API if the id is present
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col p-6 gap-4 h-full w-full bg-slate-50">
      {/* Breadcrumb for navigation */}
      <div>
        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />} marginBottom="4">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/task">
              <span className="font-semibold text-2xl text-gray-500">Task</span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span className="font-bold text-2xl">{assignmentData.title || title}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      {/* Assignment details */}
      <div className="flex gap-4">
        <div className="bg-white rounded-lg w-[700px] h-full p-8">
          <Heading size="lg">{assignmentData.title}</Heading>
          <Text mt={2} dangerouslySetInnerHTML={{ __html: assignmentData.description }} />

          <TaskDetailsChatContainer />

          {/* User details */}
          <Box mt={4}>
            <Heading size="md">Assigned to:</Heading>
            <Flex mt={2} align="center">
              <Avatar src={userDetails.image} />
              <Box ml={4}>
                <Text>{userDetails.first_name} {userDetails.last_name}</Text>
                <Text>{userDetails.email}</Text>
              </Box>
            </Flex>
          </Box>
        </div>

        {/* Video section */}
        <div className="w-[500px] h-fit flex flex-col gap-2">
          <Heading size="md">Videos:</Heading>
          <Box mt={4}>
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <Flex key={index} className="video-item" mb={4} align="center">
                  <Avatar size="md" src={video.image} mr={4} />
                  <Box>
                    <Text>{video.first_name} {video.last_name}</Text>
                    <a href={video.getfile} target="_blank" rel="noopener noreferrer">
                      <Image src={video.getfile} alt="Video thumbnail" width="200px" />
                    </a>
                  </Box>
                </Flex>
              ))
            ) : (
              <Text>No videos available.</Text>
            )}
          </Box>

          <div>
            <TextEditorMenuBar />
            <Editor
              value={assignmentData.description || "Enter your comment here..."}
              style={{ height: "320px", width: "500px", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
