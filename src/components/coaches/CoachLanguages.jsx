export function CoachLanguages({ languages }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-light">Coaching Languages</span>
      <span className="text-base font-semibold">{languages || 'Not provided'}</span>
    </div>
  );
}

export default CoachLanguages;
