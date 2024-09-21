import CoachesContainerCard from './CoachesContainerCard';

export function CoachesContainer({ coaches, onSelectCoach }) {
  return (
    <div className="flex flex-col ml-5 mt-5 h-[70vh] w-[40%] overflow-auto">
      {coaches.map((coach) => (
        <CoachesContainerCard key={coach.id} coach={coach} onSelect={() => onSelectCoach(coach)} />
      ))}
    </div>
  );
}

export default CoachesContainer;