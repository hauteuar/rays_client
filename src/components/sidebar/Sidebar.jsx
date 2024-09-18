import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import {
  CalendarIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClipboardIcon,
  FlagIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
  VideoCameraIcon,
  BellAlertIcon,
  Bars3Icon, // For the hamburger icon
} from "@heroicons/react/24/solid";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const [profile, setProfile] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Track if the sidebar is open or not
  const navigate = useNavigate();

  // Function to fetch profile from the API
  const fetchProfile = async () => {
    try {
      // Retrieve token from local storage
      const token = localStorage.getItem("booking-token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.post(
        'https://hwzthat.com/api/get-user-profile',
        {},
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Save profile data to local storage
      localStorage.setItem("profile", JSON.stringify(response.data));
      setProfile(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Check local storage for profile on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      fetchProfile();
    }
  }, []);

  const handleNavigate = (route) => () => {
    navigate(route);
  };

  // Toggle sidebar visibility on hamburger menu click
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="fixed top-5 left-5 z-50 md:hidden">
        <button onClick={toggleSidebar}>
          <Bars3Icon className="h-8 w-8 text-gray-800" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`} // Show sidebar always on larger screens
      >
        <Card className="h-screen w-full p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col items-center overflow-y-auto">
          {/* Display ProfileCard only if profile exists */}
          {profile && <ProfileCard profile={profile} />}
          <List className="flex flex-col w-full">
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/")}>
              <ListItemPrefix>
                <CalendarIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">My Schedules</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/courses")}>
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Course</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/task")}>
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Task</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/uploads")}>
              <ListItemPrefix>
                <BookOpenIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Uploads</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/coaches")}>
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Coaches</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/reports")}>
              <ListItemPrefix>
                <ClipboardIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Report</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/setupgoal")}>
              <ListItemPrefix>
                <FlagIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Set up Goal</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50">
              <ListItemPrefix>
                <ChatBubbleBottomCenterTextIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Chat</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50">
              <ListItemPrefix>
                <CreditCardIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Payments</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50" onClick={handleNavigate("/annotatedvideos")}>
              <ListItemPrefix>
                <VideoCameraIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Annotated Videos</span>
            </ListItem>
            <hr />
            <ListItem className="hover:bg-slate-50">
              <ListItemPrefix>
                <BellAlertIcon className="h-5 w-5 mr-3" />
              </ListItemPrefix>
              <span className="text-xl">Notifications</span>
            </ListItem>
          </List>
        </Card>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && <div className="fixed inset-0 z-30 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Sidebar;
