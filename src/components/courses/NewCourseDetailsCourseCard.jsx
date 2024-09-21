import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export function NewCourseDetailsCourseCard() {
  const location = useLocation(); // Get the location object
  const { course_id } = location.state || {}; // Get course_id from state
  const [courseDetails, setCourseDetails] = useState({}); // State for storing course details

  // Fetch course details from API
  const fetchCourseDetails = async () => {
    try {
      const token = localStorage.getItem('booking-token'); // Get token from localStorage
      const response = await axios.post(
        'https://hwzthat.com/api/get_course_details_by_id',
        { course_id }, // Send course_id in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setCourseDetails(response.data); // Store the response in state
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  // Fetch course details when component mounts
  useEffect(() => {
    if (course_id) {
      fetchCourseDetails();
    }
  }, [course_id]);

  return (
    <Card maxW="sm" boxShadow="xl" cursor="pointer">
      <CardBody p={0}>
        <div className="relative">
          <Image
            className="w-full"
            src="/src/assets/sports/sport1.jpg"
            alt="Course Image"
            borderRadius="lg"
            m={0}
          />

          <div className="absolute top-7 left-0 ribbon2 text-white"></div>
          <span className="absolute top-9 left-3 z-50 text-white text-base ">
            Course
          </span>
        </div>

        <Stack m="3" mt="6" spacing="3" align="start" pb="6">
          <Heading size="md" className="ml-2">
            <span>{courseDetails.title}</span>
            <div className="absolute right-0">
              <div className="relative">
                <div className="ribbon text-white"></div>
                <span className="absolute top-1.5 right-2 z-50 text-white text-lg font-bold">
                  ${courseDetails.price}
                </span>
              </div>
            </div>
          </Heading>

          <div className="flex ml-2">
            <span>Category ID: </span>
            <span className="font-bold">{courseDetails.category_id}</span>
          </div>

          <div className="flex ml-2">
            <span>Start date:&nbsp;</span>
            <span className="font-bold">{courseDetails.start_date}</span>
          </div>

          <div className="flex ml-2">
            <span>End date:&nbsp;</span>
            <span className="font-bold">{courseDetails.end_date}</span>
          </div>

          <Divider />

          <div className="flex flex-col gap-3 p-2">
            <Text className="font-bold text-lg text-left">Description</Text>
            <Text className="text-left">{courseDetails.short_description}</Text>
            <Text className="text-left">{courseDetails.description}</Text>
          </div>

          <Divider />

          {courseDetails.discount_flag && (
            <div className="flex flex-col gap-3 p-2">
              <Text className="font-bold text-lg text-left">Discounts</Text>
              <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-300 text-black font-bold p-2 ">
                  <span>1</span>
                </div>
                <div className="flex flex-col justify-start">
                  <Text>
                    3 months installment with <strong>5% interest.</strong>
                  </Text>
                  <Text>
                    Total course fee will be <strong>180 CAD</strong>
                  </Text>
                </div>
              </div>
            </div>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
}

export default NewCourseDetailsCourseCard;
