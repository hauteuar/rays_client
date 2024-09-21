import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import './NewCourseCard.css';

// eslint-disable-next-line react/prop-types
export function NewPackageCard({ packageName, numCourses, price, originalPrice }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses/newPackageDetails', {
      state: { packageName, price },
    });
  };

  return (
    <Card maxW="sm" boxShadow="xl" cursor="pointer" onClick={handleClick}>
      <CardBody p={0}>
        <div className="relative">
          <Image
            className="w-full"
            src="/src/assets/sports/sport1.jpg"
            alt="Package Image"
            borderRadius="lg"
            m={0}
          />
          <div className="absolute top-7 left-0 packageRibbon text-white"></div>
          <span className="absolute top-9 left-3 z-50 text-white text-base">
            Package
          </span>
        </div>

        <Stack mt="6" spacing="3" align="start" pb="6">
          <Heading size="md" className="ml-2">{packageName}</Heading>
          <div className="flex justify-between items-center w-full">
            <div className="ml-2">
              Courses: <span className="font-bold">{numCourses}</span>
            </div>
            <div className="flex items-center gap-1 justify-start">
              {originalPrice && <span className="font-bold text-lg text-[rgb(206,55,143)] line-through">${originalPrice}</span>}
              <div className="relative">
                <div className="ribbon text-white"></div>
                <span className="absolute top-1.5 right-2 z-50 text-white text-lg font-bold">
                  ${price}
                </span>
              </div>
            </div>
          </div>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default NewPackageCard;
