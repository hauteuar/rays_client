
export function CoachLinks({ linkedin }) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-light">LinkedIn</span>
      <a className="text-base font-semibold" href={linkedin} target="_blank" rel="noopener noreferrer">
        {linkedin || 'No LinkedIn profile'}
      </a>
    </div>
  );
}

export default CoachLinks;