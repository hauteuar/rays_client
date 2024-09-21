import CoachAbout from './CoachAbout';
import CoachLanguages from './CoachLanguages';
import CoachLinks from './CoachLinks';
import CoachProfileCard from './CoachProfileCard';
import CoachSocials from './CoachSocials';
import CoachSpecializations from './CoachSpecializations';
import CoachStyles from './CoachStyles';

export function CoachDetails({ coach }) {
  return (
    <div className="bg-white p-4">
      <div className="flex">
        <CoachProfileCard coach={coach} />
        <div className="flex flex-col flex-1">
          <CoachAbout about={coach.detail?.short_description || 'No information available'} />
          <CoachStyles battingStyle={coach.player_info?.batting_style} bowlingStyle={coach.player_info?.bowling_style} />
          <div className="w-[80%] flex ml-7 mt-4 gap-28">
            <CoachLanguages languages={coach.language} />
            <CoachSpecializations specialization="Batting" /> {/* Modify this based on actual data */}
          </div>
          <div className="w-[80%] flex ml-7 mt-4 gap-28">
            <CoachSocials />
            <CoachLinks linkedin={coach.detail?.linkedin_link} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachDetails;