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



// eslint-disable-next-line react/prop-types
export function CourseCard({courseName, duration, batches, }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses/courseDetails', {
      state: { courseName, duration, batches }, // Passing data as state
    });
  }

  return (
    <Card maxW="sm" boxShadow='xl' cursor="pointer" onClick={handleClick}>
      <CardBody p={0}>
        <Image
          className="w-full"
          src="/src/assets/sports/sport1.jpg"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          m={0}
        />
        <Stack mt="6" spacing="3" align="start">
          <Heading size="md" className="ml-2">{courseName}</Heading>
          <div className="ml-2">
            Duration: <span className="font-bold">{duration}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;Batches:{" "}
            <span className="font-bold">{batches}</span>
          </div>
        </Stack>
      </CardBody>

      <CardFooter p={0}>
        <div className="ml-2 mt-2">
          <a>
            <Text color="blue.400" _hover={{ color: "blue.200", cursor: "pointer" }}>View course details</Text>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
