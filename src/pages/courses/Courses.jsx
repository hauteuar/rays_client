import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';
import CourseListView from '../../components/courses/CourseListView';

export function Courses() {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [newPackages, setNewPackages] = useState([]);

  // Function to fetch courses from the API
  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('booking-token');
      const response = await axios.post(
        'https://hwzthat.com/api/get-course-list',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const courses = response.data; // Assuming this contains the course list
      console.log(courses);

      // Separate ongoing courses and new courses/packages
      const ongoing = courses.filter((course) => course.status === 'ongoing');
      const newCoursesData = courses.filter((course) => course.status === 'new');
      const newPackagesData = courses.filter((course) => course.is_package === true);

      setOngoingCourses(ongoing);
      setNewCourses(newCoursesData);
      setNewPackages(newPackagesData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-start">
        <h2 className="text-2xl font-bold">Courses</h2>
      </div>
      <div className="mt-4">
        <Tabs position="relative" variant="unstyled">
          <TabList>
            <Tab
              _selected={{ color: 'blue.500', fontWeight: 'bold' }}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'blue.400' }}
            >
              Ongoing courses
            </Tab>
            <Tab
              _selected={{ color: 'blue.500', fontWeight: 'bold' }}
              _focus={{ outline: 'none' }}
              _hover={{ color: 'blue.400' }}
            >
              New courses & Packages
            </Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
          <TabPanels>
            <TabPanel>
              <CourseListView courses={ongoingCourses} newCourses={[]} newPackages={[]} />
            </TabPanel>
            <TabPanel>
              <CourseListView courses={[]} newCourses={newCourses} newPackages={newPackages} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Courses;
