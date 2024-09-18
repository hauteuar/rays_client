import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NewCourseDetailsCourseCard } from "../../components/courses/NewCourseDetailsCourseCard";
import { Button } from "@chakra-ui/react";
import NewPackageDetailsPackageCard from "../../components/courses/NewPackageDetailsPackageCard";

export function NewPackageDetails() {
  const location = useLocation(); // Get the location object
  const { packageName, price } = location.state || {};
  return (
    <div className="p-6 bg-slate-100 w-full h-[100vw] gap-6">
      {/* Breadcrumb navigation */}
      <div>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
          marginBottom="4"
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/courses">
              <span className="font-semibold text-2xl text-gray-500">
                Courses
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <span className="font-bold text-2xl">{packageName}</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex gap-2">
        <NewPackageDetailsPackageCard />
        <div className="flex flex-col gap-4 justify-start">
          
          <span className="text-xl font-bold text-left">3 course</span>
          <div className="flex flex-col items-start p-4  bg-white rounded-md w-full">
            
            <div className="flex justify-between w-full ">
              <span className="text-xl font-bold">Course Title 1</span>
              <span>Duration: <b>6 months</b>&nbsp;&nbsp;|&nbsp;&nbsp;Batches: <b>3</b></span>
            </div>
            <hr className="w-full bg-gray-300 h-[1px] my-3 " />
            <span className="font-bold text-l">Select batch</span>
            <form className="py-4 space-y-3 bg-white rounded-lg ">
              <div className="flex gap-4 items-center ">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    10:00 AM-11:00 AM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    02:00 PM-03:00 PM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    03:00 PM-04:00 PM
                  </span>
                </label>
              </div>
            </form>
          </div>


          <div className="flex flex-col items-start p-4  bg-white rounded-md w-full">
            
            <div className="flex justify-between w-full ">
              <span className="text-xl font-bold">Course Title 2</span>
              <span>Duration: <b>3 months</b>&nbsp;&nbsp;|&nbsp;&nbsp;Batches: <b>2</b></span>
            </div>
            <hr className="w-full bg-gray-300 h-[1px] my-3 " />
            <span className="font-bold text-l">Select batch</span>
            <form className="py-4 space-y-3 bg-white rounded-lg ">
              <div className="flex gap-4 items-center ">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    11:00 AM-12:00 PM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    02:00 PM-03:00 PM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    03:00 PM-04:00 PM
                  </span>
                </label>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-start p-4  bg-white rounded-md w-full">
            
            <div className="flex justify-between w-full ">
              <span className="text-xl font-bold">Course Title 3</span>
              <span>Duration: <b>3 months</b>&nbsp;&nbsp;|&nbsp;&nbsp;Batches: <b>3</b></span>
            </div>
            <hr className="w-full bg-gray-300 h-[1px] my-3 " />
            <span className="font-bold text-l">Select batch</span>
            <form className="py-4 space-y-3 bg-white rounded-lg ">
              <div className="flex gap-4 items-center ">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    10:00 AM-11:00 AM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option2"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    02:00 PM-03:00 PM
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="option"
                    value="option3"
                    className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">
                    03:00 PM-04:00 PM
                  </span>
                </label>
              </div>
            </form>
          </div>


          <div className="flex flex-col items-start">
            <span className="font-bold text-xl ml-4">Select one</span>
            <form className="p-4 space-y-3 bg-gray-100 rounded-lg">
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="option2"
                  value="option1"
                  className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium text-left">
                  Full payment <b>20% discount</b>, Total course fee will be{" "}
                  <b>150 CAD</b>
                </span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="option2"
                  value="option2"
                  className="form-radio h-5 w-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700 font-medium text-left">
                  3 months instalment with <b>5% interest</b>. Total course fee
                  will be <b>180 CAD</b>
                </span>
              </label>
            </form>
          </div>

          <div className="flex flex-start gap-4 ml-4">
            <Button
              className="w-40 h-20 py-4"
              colorScheme="blue"
              variant="outline"
            >
              Add to cart
            </Button>
            <Button
              className="w-40 h-20 py-4"
              colorScheme="blue"
              variant="solid"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPackageDetails;
