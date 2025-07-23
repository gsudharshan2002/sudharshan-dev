import { Achievements as achievementsData } from '../constants/index.js';

const TrophyIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400 inline-block mr-2"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M6 2a1 1 0 00-1 1v2a3 3 0 00-2 2.83V9a4 4 0 004 4v1H6a1 1 0 000 2h8a1 1 0 000-2h-1v-1a4 4 0 004-4V7.83A3 3 0 0015 5V3a1 1 0 00-1-1H6zm1 3h6v1a1 1 0 001 1h.01A1 1 0 0116 7v2a2 2 0 01-4 0V7a1 1 0 00-1-1H9a1 1 0 00-1 1v2a2 2 0 01-4 0V7a1 1 0 01.99-1H7a1 1 0 001-1V5z" />
  </svg>
);

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Achievements</h1>
      <div>
        {achievementsData.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold flex items-center">
                <TrophyIcon />
                {item.title}
              </h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 text-sm font-medium text-green-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
