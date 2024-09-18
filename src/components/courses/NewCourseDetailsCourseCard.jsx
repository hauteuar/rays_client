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
import { useLocation } from "react-router-dom";

export function NewCourseDetailsCourseCard() {
  const location = useLocation(); // Get the location object
  const { courseName, price } = location.state || {};
  return (
    <Card maxW="sm" boxShadow="xl" cursor="pointer">
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

        <Stack m="3" mt="6" spacing="3" align="start" pb="6">
          <Heading size="md" className="ml-2">
            <span>{courseName}</span>
            <div className="absolute right-0">
              <div className="relative">
                <div className="ribbon text-white"></div>
                <span className="absolute top-1.5 right-2 z-50 text-white text-lg font-bold">
                  ${price}
                </span>
              </div>
            </div>
          </Heading>

          <div className="flex ml-2">
            <span>Courses :&nbsp;</span>
            <span className="font-bold">3</span>
          </div>

          <div className="flex ml-2">
            <span>Start date :&nbsp;</span>
            <span className="font-bold">12 Jan 2024</span>
          </div>

          <hr className="w-full bg-gray-300 h-[1px]" />

          <div className="flex flex-col gap-3 p-2">
            <span className="font-bold text-lg text-left">Added discounts</span>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-300 text-black font-bold p-2 ">
                <span>1</span>
              </div>
              <div className="flex flex-col justify-start">
                <div className="flex">
                  <span>3 months instalment with&nbsp;</span>
                  <span className="font-bold">5% interest.</span>
                </div>
                <div className="flex">
                  <span>Total course fee will be&nbsp;</span>
                  <span className="font-bold">180 CAD</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full bg-gray-300 h-[1px]" />

          <div className="flex flex-col gap-3 p-2">
            <span className="font-bold text-lg text-left">Description</span>
            <span className="text-left">1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse soluta atque amet.</span>
            <span className="text-left">2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi, velit quos sint harum provident!</span>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default NewCourseDetailsCourseCard;
