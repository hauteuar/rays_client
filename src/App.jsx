import React, { useState } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Topnav from './components/topnav/Topnav';
import Sidebar from './components/sidebar/Sidebar';
import MySchedule from './pages/mySchedule/MySchedule';
import Courses from './pages/courses/Courses';
import Coaches from './pages/coaches/Coaches';
import SetUpGoal from './pages/setUpGoal/SetUpGoal';
import Reports from './pages/reports/Reports';
import AnnotatedVideos from './pages/annotatedVideos/AnnotatedVideos';
import Task from './pages/task/Task';
import Uploads from './pages/uploads/Uploads';
import CourseDetails from './pages/courses/CourseDetails';
import NewCourseDetails from './pages/courses/NewCourseDetails';
import NewPackageDetails from './pages/courses/NewPackageDetails';
import TaskDetails from './pages/task/TaskDetails';
import ReportsAttendanceDetails from './pages/reports/ReportsAttendanceDetails';
import ReportsReflectionSheetDetails from './pages/reports/ReportsReflectionSheetDetails';
import Login from './pages/login/Login'; // Login component

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem('booking-token');

  // Get the current location to check if it's the login page
  const location = useLocation();

  // Hide the sidebar on login page
  const hideSidebar = location.pathname === '/login';

  return (
    <ChakraProvider>
      {!hideSidebar && isAuthenticated && <Topnav toggleSidebar={toggleSidebar} />}
      <div className="app-container">
        {!hideSidebar && isAuthenticated && isSidebarOpen && <Sidebar />}
        <div className={`main-content ${!hideSidebar && isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <Routes>
            {!isAuthenticated ? (
              <Route path="*" element={<Navigate to="/login" />} />
            ) : (
              <>
                <Route path="/" element={<MySchedule />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/task" element={<Task />} />
                <Route path="/uploads" element={<Uploads />} />
                <Route path="/coaches" element={<Coaches />} />
                <Route path="/setupgoal" element={<SetUpGoal />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/annotatedvideos" element={<AnnotatedVideos />} />
                <Route path="/courses/courseDetails" element={<CourseDetails />} />
                <Route path="/courses/newCourseDetails" element={<NewCourseDetails />} />
                <Route path="/courses/newPackageDetails" element={<NewPackageDetails />} />
                <Route path="/task/taskDetails" element={<TaskDetails />} />
                <Route path="/reports/reportsAttendanceDetails" element={<ReportsAttendanceDetails />} />
                <Route path="/reports/reportsReflectionSheetDetails" element={<ReportsReflectionSheetDetails />} />
              </>
            )}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
