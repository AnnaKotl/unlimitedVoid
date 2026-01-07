import React from "react";

function StatItem({ icon, value }) {
  return (
    <div className="flex items-center gap-1 lg:gap-[6px]">
      <svg className="w-4 h-4 lg:w-[18px] lg:h-[18px] fill-current text-black">
        <use xlinkHref={`/icons/sprite.svg#${icon}`} />
      </svg>
      <span className="text-sm">{value}</span>
    </div>
  );
}

function TodayBlock({ likes, comments, isRow = false }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <span className="text-[14px] lg:text-[16px] font-medium whitespace-normal break-words">
        Today
      </span>

      <div
        className={
          isRow
            ? "flex flex-col md:flex-row gap-1 md:gap-3 lg:gap-4"
            : "flex flex-col gap-1 pl-1"
        }
      >
        <StatItem icon="like" value={likes} />
        <StatItem icon="comment" value={comments} />
      </div>
    </div>
  );
}

function DateBlock({ title, data, isRow = false }) {
  return (
    <div className="flex flex-col gap-1 lg:gap-2">
      <span className="text-[14px] lg:text-[16px] font-medium whitespace-normal break-words">
        {title}
      </span>

      {data.map((d, idx) => (
        <div
          key={idx}
          className={
            isRow
              ? "flex flex-col md:flex-row gap-1 md:gap-3 lg:gap-6"
              : "flex flex-col gap-1"
          }
        >
          <StatItem icon="like" value={d.likes} />
          <StatItem icon="comment" value={d.comments} />
        </div>
      ))}
    </div>
  );
}

export default function Card({ card, view = "grid" }) {
  const {
    image,
    todayLikes,
    todayComments,
    dateCreated,
    dateData,
    dateUploaded,
    ariaLabel,
  } = card;

  if (view === "grid") {
    return (
      <div
        className="
          flex flex-col w-full bg-white p-0
          pb-2 lg:pb-[18px]
          md:hover:shadow-md md:hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)]
          md:transition-shadow
        "
        aria-label={ariaLabel}
      >
        {/* Image (square) */}
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={image}
            alt={ariaLabel}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Today + Date */}
        <div className="flex justify-between px-2 lg:px-3 mt-2 lg:mt-3">
          <TodayBlock likes={todayLikes} comments={todayComments} />

          <DateBlock title={dateCreated} data={dateData} />
        </div>

        {/* Bottom */}
        <div className="px-2 lg:px-3 pt-2 lg:mt-6 flex flex-col sm:flex-row justify-between">
          <span className="text-[14px] whitespace-normal break-words">
            Image upload
          </span>
          <span className="text-xs">{dateUploaded}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        flex bg-white p-0
        md:hover:shadow-md md:hover:shadow-[0_2px_6px_rgba(0,0,0,0.12)]
        md:transition-shadow
      "
    >
      {/* Image */}
      <img
        src={image}
        alt={ariaLabel}
        className="
          w-[76px] h-[76px]
          md:w-[86px] md:h-[86px]
          object-cover flex-shrink-0
        "
      />

      {/* Content */}
      <div className="flex-1 flex justify-between items-start py-2 md:pt-4 md:pb-6 ml-2 sm:ml-6 lg:ml-[30px]">
        <TodayBlock likes={todayLikes} comments={todayComments} isRow />

        <DateBlock title={dateCreated} data={dateData} isRow />

        {/* Image upload */}
        <div className="flex flex-col justify-center items-start gap-1 lg:gap-2 pr-1 lg:pr-20">
          <span className="text-[14px] lg:text-[16px] font-medium whitespace-normal break-words">
            Image upload
          </span>
          <span className="text-[12px] lg:text-[14px] font-medium">
            {dateUploaded}
          </span>
        </div>
      </div>
    </div>
  );
}
