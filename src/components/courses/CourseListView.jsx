import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import NewCourseCard from "./NewCourseCard";
import NewPackageCard from "./NewPackageCard";

export function CourseListView() {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [newPackages, setNewPackages] = useState([]);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);

  // Function to fetch the course list from the API
  const fetchCourseList = async () => {
    try {
      const token = localStorage.getItem("booking-token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "https://hwzthat.com/api/get-course-list",
        {}, // Add necessary body params if required
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming the response structure contains the course list, new courses, and new packages
      setCourses(response.data.courses || []);
      setNewCourses(response.data.newCourses || []);
      setNewPackages(response.data.newPackages || []);
    } catch (error) {
      console.error("Error fetching course list:", error);
    }
  };

  // Function to fetch course details when a course is clicked
  const fetchCourseDetails = async (courseId) => {
    try {
      const token = localStorage.getItem("booking-token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        "https://hwzthat.com/api/get_course_details_by_id",
        { course_id: courseId }, // The body requires course_id
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the selected course details
      setSelectedCourseDetails(response.data);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  // Fetch course list when the component mounts
  useEffect(() => {
    fetchCourseList();
  }, []);

  return (
    <div>
      <div className="flex gap-4">
        {/* Render Courses */}
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.title} // Assuming title is the name of the course
            duration={course.duration}
            batches={course.batches}
            onClick={() => fetchCourseDetails(course.course_id)} // Fetch details on click
          />
        ))}

        {/* Render New Courses */}
        {newCourses.map((course, index) => (
          <NewCourseCard
            key={index}
            courseName={course.title} // Assuming title is the name of the new course
            duration={course.duration}
            batches={course.batches}
            price={course.price}
            onClick={() => fetchCourseDetails(course.course_id)} // Fetch details on click
          />
        ))}

        {/* Render New Packages */}
        {newPackages.map((p, index) => (
          <NewPackageCard
            key={index}
            packageName={p.packageName}
            numCourses={p.numCourses}
            price={p.price}
            originalPrice={p.originalPrice ? p.originalPrice : null}
            onClick={() => fetchCourseDetails(p.packageId)} // Fetch details on click
          />
        ))}
      </div>

      {/* Display Selected Course Details */}
      {selectedCourseDetails && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold">{selectedCourseDetails.title}</h2>
          <p>{selectedCourseDetails.description}</p>
          <p><strong>Price:</strong> {selectedCourseDetails.price}</p>
          <p><strong>Start Date:</strong> {selectedCourseDetails.start_date}</p>
          <p><strong>End Date:</strong> {selectedCourseDetails.end_date}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default CourseListView;
