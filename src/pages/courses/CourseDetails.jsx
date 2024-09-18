// CourseDetails.jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Searchbar from "../../components/searchbar/Searchbar";

import ReactAudioPlayer from "react-audio-player";

export function CourseDetails() {
  const location = useLocation(); // Get the location object
  const { courseName, duration, batches } = location.state || {};

  return (
    <div className="pl-4 bg-slate-100 w-full h-[100vw]">
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
                Course
              </span>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>
              <div className="flex flex-col justify-end items-start pt-6">
                <span className="font-bold text-2xl">{courseName}</span>
                <div>
                  <span className="text-sm">Duration :&nbsp;</span>
                  <span className="text-sm font-bold">{duration}</span>
                  <span className="text-sm">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <span className="text-sm">Batch :&nbsp;</span>
                  <span className="text-sm font-bold">{batches}</span>
                </div>
              </div>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="flex flex-col justify-start items-start gap-4">
        <span className="font-semibold">Total session summary</span>
        <div className="flex gap-8">
          <div className="flex flex-col items-start justify-start bg-white rounded-lg p-4">
            <span className="font-bold text-xl">4</span>
            <span className="text-gray-500">Sessions completed</span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col items-start justify-start bg-white rounded-lg p-4">
              <span className="font-bold text-xl">80 min</span>
              <span className="text-gray-500">Batting</span>
            </div>
            <div className="flex flex-col items-start justify-start bg-white rounded-lg p-4">
              <span className="font-bold text-xl">65 min</span>
              <span className="text-gray-500">Bowling</span>
            </div>
            <div className="flex flex-col items-start justify-start bg-white rounded-lg p-4">
              <span className="font-bold text-xl">60 min</span>
              <span className="text-gray-500">Fielding</span>
            </div>
            <div className="flex flex-col items-start justify-start bg-white rounded-lg p-4">
              <span className="font-bold text-xl">50 min</span>
              <span className="text-gray-500">Fitness</span>
            </div>
          </div>
        </div>
        <hr className="w-full bg-gray-300 h-[1px]" />
      </div>
      <div className="flex justify-start items-start gap-4 mt-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <span className="font-bold">Completed sessions</span>
          <Searchbar marginLeft={0} />
          <div className="flex flex-col gap-1 w-full">
            <div className="px-4 py-2 bg-blue-500">
              <span className="text-white">09/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">07/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">05/02/2024</span>
            </div>
            <div className="px-4 py-2 bg-white">
              <span className="text-blue-500">01/02/2024</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-2">
          <span className="font-bold">Daily session report</span>
          <div className="flex flex-col bg-white w-full h-fit rounded-lg p-4 gap-4">
            <div className="flex gap-8">
              <div className="flex">
                <span className="text-lg">Total session time :&nbsp;</span>
                <span className="text-lg font-bold">1hr</span>
              </div>
              <div>
                <span className="text-lg">Total received :&nbsp;</span>
                <span className="text-lg font-bold">45min</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">20 min</span>
                <span>Batting</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">15 min</span>
                <span>Bowling</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">Not received</span>
                <span>Fielding</span>
              </div>
              <div className="p-4 rounded-md bg-slate-100 flex flex-col ">
                <span className="text-lg font-bold">10 min</span>
                <span>Fitness</span>
              </div>
            </div>
            <hr className="w-full bg-gray-300 h-[1px]" />
            <span className="font-bold text-left">Player performance</span>
            <div className="flex gap-3">
              <div className="border-2 border-blue-300 rounded-md">
                <img
                  className=""
                  src="/src/assets/playerPerformance/NeedsImprovement.jpg"
                />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Satisfactory.jpg" />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Good.jpg" />
              </div>
              <div className="border-2 border-blue-700 rounded-md shadow-2xl">
                <img src="/src/assets/playerPerformance/Excellent.jpg" />
              </div>
              <div className="border-2 border-blue-300 rounded-md">
                <img src="/src/assets/playerPerformance/Outstanding.jpg" />
              </div>
            </div>
            <hr className="w-full bg-gray-300 h-[1px] mt-2" />
            <span className="text-sm font-bold text-left">Batting</span>
            <span className="text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ipsum quidem ducimus excepturi deleniti, repellat
              aliquam unde facilis doloremque quasi eius possimus fuga! Vero.
            </span>
            <ReactAudioPlayer
              src=""
              controls
              style={{ width: "100%" }}
            />
            <ReactAudioPlayer
              src=""
              controls
              style={{ width: "100%" }}
            />
            <span className="text-sm font-bold text-left">Bowling</span>
            <span className="text-left text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, ipsum quidem ducimus excepturi deleniti, repellat
              aliquam unde facilis doloremque quasi eius possimus fuga! Vero.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
