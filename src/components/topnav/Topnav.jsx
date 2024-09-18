import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
// eslint-disable-next-line react/prop-types
const Topnav = ({ toggleSidebar }) => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="bg-gray-200 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              
              
              <div className="flex-shrink-0 flex items-center">
              <IconButton
                aria-label="Toggle Sidebar"
                icon={<HamburgerIcon />}
                onClick={toggleSidebar}
                className="mr-4"
              />
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <h2 className="ml-2 font-bold text-black">Ray Sports</h2>
              </div>

              <div className="flex space-x-4 items-center">
                <img className="h-6 w-6" src="/src/assets/message.png" alt="Message" />
                <img className="h-6 w-6" src="/src/assets/logout.png" alt="Logout" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topnav;
