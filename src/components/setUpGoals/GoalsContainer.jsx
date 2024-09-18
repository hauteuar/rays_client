import CoachesContainerCard from "../coaches/CoachesContainerCard";
import Searchbar from "../searchbar/Searchbar";
import GoalsContainerCard from "./GoalsContainerCard";

export function GoalsContainer() {
  return (
    <div className="w-[30%] h-full rounded-md bg-slate-50 p-1 ml-4">
      <div className="flex justify-start w-full">
        {/*Make this button reusable */}
        <div className="pt-2 relative mx-auto text-gray-600 w-full ml-6 pr-4">
          <input
            className="border-2 border-gray-300 bg-white h-10 w-full px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-4 top-0 mt-4 mr-2">
            <img src="/src/assets/icons/search.png" />
          </button>
        </div>
        {/*Make this button reusable */}
      </div>

      <div className="flex flex-col m-5 h-[70vh] w-full overflow-auto">
        {/*For Demo */}
        <div className="w-[90%] flex flex-col rounded-lg border-b-2 border-gray-200 p-2 bg-blue-100">
          <div className="flex justify-start">
            <span className="font-semibold">Goal No 1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs">10&nbsp;Jan</span>
            <span className="text-xs text-orange-400">In&nbsp;progress</span>
          </div>
        </div>

        <GoalsContainerCard />
        <GoalsContainerCard />
        <GoalsContainerCard />
        {/*For Demo */}
      </div>
    </div>
  );
}

export default GoalsContainer;
