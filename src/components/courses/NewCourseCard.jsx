import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "./NewCourseCard.css";
// eslint-disable-next-line react/prop-types
export function NewCourseCard({courseName, duration, batches, price}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses/newCourseDetails', {
      state: { courseName, duration, batches, price }, // Passing data as state
    });
  }
  return (
    <Card maxW="sm" boxShadow="xl" cursor="pointer" onClick={handleClick}>
      <CardBody p={0}>
        <div className="relative">
          <Image
            className="w-full"
            src="/src/assets/sports/sport1.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            m={0}
          />
          
              <div className="absolute top-7 left-0 ribbon2 text-white"></div>
              <span className="absolute top-9 left-3 z-50 text-white text-base ">
                Course
              </span>
            
        </div>

        <Stack mt="6" spacing="3" align="start" pb="6">
          <Heading size="md" className="ml-2">
            {courseName}
          </Heading>
          <div className="flex justify-between items-center w-full">
            <div className="ml-2">
              Duration: <span className="font-bold">{duration}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;Batches:{" "}
              <span className="font-bold">{batches}</span>
            </div>
            <div className="relative">
              <div className="ribbon text-white"></div>
              <span className="absolute top-1.5 right-2 z-50 text-white text-lg font-bold">
                ${price}
              </span>
            </div>
          </div>
        </Stack>
      </CardBody>

    </Card>
  );
}

export default NewCourseCard;
