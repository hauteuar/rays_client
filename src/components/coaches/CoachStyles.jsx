export function CoachStyles({ battingStyle, bowlingStyle }) {
    return (
      <div className="w-[80%] flex ml-7 mt-4 gap-32">
        <div className="flex flex-col items-start">
          <span className="text-sm font-light">Batting style</span>
          <span className="text-base font-semibold">{battingStyle || 'Not provided'}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-light">Bowling style</span>
          <span className="text-base font-semibold">{bowlingStyle || 'Not provided'}</span>
        </div>
      </div>
    );
  }
  
  export default CoachStyles;