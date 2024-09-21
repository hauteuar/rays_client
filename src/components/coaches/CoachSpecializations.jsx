export function CoachSpecializations({ specialization }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-light">Coaching specialization</span>
      <span className="text-base font-semibold">{specialization}</span>
    </div>
  );
}

export default CoachSpecializations;