import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import CourseListView from "../../components/courses/CourseListView";
import NewCourseCard from "../../components/courses/NewCourseCard";

export function Courses() {
  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-start">
        <h2 className="text-2xl font-bold">Course</h2>
      </div>
      <div className="mt-4">
        <Tabs position="relative" variant="unstyled">
          <TabList>
          <Tab
      _selected={{ color: 'blue.500', fontWeight: 'bold', border: 'none !important' }}
      _focus={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
      _hover={{ border: 'none !important', outline: 'none !important', boxShadow: 'none !important', color: 'blue.400' }}
      border='none'
      _focusVisible={{ outline: 'none !important' }}  // Additional to handle focus-visible
    >
      Ongoing courses
    </Tab>
    <Tab
      _selected={{ color: 'blue.500', fontWeight: 'bold', border: 'none !important' }}
      _focus={{ outline: 'none !important', boxShadow: 'none !important', border: 'none !important' }}
      _hover={{ border: 'none !important', outline: 'none !important', boxShadow: 'none !important', color: 'blue.400' }}
      border='none'
      _focusVisible={{ outline: 'none !important' }}  // Additional to handle focus-visible
    >
      New courses & Packages
    </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <CourseListView courses={[{courseName: "Fielding and Fitness", duration: "6 months", batches: "10:00 AM-11:00 AM"}]} newCourses={[]} newPackages={[]}/>
            </TabPanel>
            <TabPanel>
              <CourseListView courses={[]} newCourses={[{courseName: "Fundamentals of Cricket", duration: "1 Year", batches: 3, price: 200}, {courseName: "Fielding and Fitness", duration: "6 Months", batches: 3, price: 150}]} newPackages={[{packageName: "Summer Package", numCourses: 3, price: 150, originalPrice: 200}]}/>
        
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default Courses;
