import LaneContainerAthleteCard from "./LaneContainerAthleteCard";

// eslint-disable-next-line react/prop-types
export function LaneContainer({ laneName, laneNumber, timeslot, athletes }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-semibold">{laneName}</span>
          <span>&nbsp;|&nbsp; {laneNumber}</span>
        </div>
        <span>{timeslot}</span>
      </div>

      <hr className="mt-2"/>
      <div className="flex flex-wrap gap-4 mt-2">
        {
             athletes.map((name, index) => (
                <LaneContainerAthleteCard name={name} key={index}/>
              ))
        }
      </div>
    </div>
  );
}

export default LaneContainer;
