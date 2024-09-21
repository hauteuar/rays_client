import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import NewCourseCard from './NewCourseCard';
import NewPackageCard from './NewPackageCard';

export function CourseListView() {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch ongoing courses
  const fetchOngoingCourses = async () => {
    try {
      const response = await axios.get('https://hwzthat.com/api/get-course-list', {}, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      });
      setCourses(response.data.course_list || []);
    } catch (error) {
      console.error("Error fetching ongoing courses:", error);
      setError("Error fetching ongoing courses");
    }
  };

  // Fetch new courses
  const fetchNewCourses = async () => {
    try {
      const token = localStorage.getItem('booking-token'); // Assuming you're using a token from localStorage
      const response = await axios.post(
        'https://hwzthat.com/api/get-course-list',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        }
      );
      setNewCourses(response.data.course_list || []);
    } catch (error) {
      console.error("Error fetching new courses:", error);
      setError("Error fetching new courses");
    }
  };

  useEffect(() => {
    // Fetch both courses and new courses in parallel
    const fetchCoursesData = async () => {
      setLoading(true);
      await Promise.all([fetchOngoingCourses(), fetchNewCourses()]);
      setLoading(false);
    };
    fetchCoursesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="flex gap-4">
        {/* Render Ongoing Courses */}
        {courses.length > 0 && courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.title}
            duration={course.duration || 'N/A'} // Assuming duration is part of the data
            batches={course.batches || []} // Adjust this according to your data structure
          />
        ))}

        {/* Render New Courses */}
        {newCourses.length > 0 && newCourses.map((course, index) => (
          <NewCourseCard
            key={index}
            courseName={course.title}
            duration={course.duration || 'N/A'}
            batches={course.batches || []}
            price={course.price || 'N/A'}
          />
        ))}

        {/* Render New Packages - assuming the new packages are part of new courses */}
        {newCourses.length > 0 && newCourses.map((p, index) => (
          <NewPackageCard
            key={index}
            packageName={p.packageName || 'Package'} // Assuming you have packageName in data
            numCourses={p.numCourses || 0}
            price={p.price || 'N/A'}
            originalPrice={p.originalPrice || null}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseListView;
