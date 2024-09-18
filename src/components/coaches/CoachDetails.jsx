import CoachAbout from "./CoachAbout";
import CoachLanguages from "./CoachLanguages";
import CoachLinks from "./CoachLinks";
import CoachProfileCard from "./CoachProfileCard";
import CoachSocials from "./CoachSocials";
import CoachSpecializations from "./CoachSpecializations";
import CoachStyles from "./CoachStyles";

export function CoachDetails() {
  return (
    <div className="bg-white p-4">
      <div className="flex">
        <CoachProfileCard />
        <div className="flex flex-col flex-1 ">
          <CoachAbout />
          <CoachStyles />

          <div className="w-[80%] flex ml-7 mt-4 gap-28"> {/*for demo purposes, gap-28 to make it align. afterward, figure out what's actually going to be on this page and how we want to lay it out */}
            <CoachLanguages />
            <CoachSpecializations />
          </div>

          <div className="w-[80%] flex ml-7 mt-4 gap-28"> {/*for demo purposes, gap-28 to make it align. afterward, figure out what's actually going to be on this page and how we want to lay it out */}
          <CoachSocials/>
          <CoachLinks/>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

                    
            
                    
*/
export default CoachDetails;
