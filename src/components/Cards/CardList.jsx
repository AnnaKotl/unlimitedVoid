import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import Card from "./Card";
import { cardsData } from "../../data/mockData";

const GRID_LIMIT = 8;
const LIST_LIMIT = 8;

export default function CardList({ dateRange }) {
  const [view, setView] = useState("list");
  const [visibleCount, setVisibleCount] = useState(LIST_LIMIT);
  const containerRef = useRef(null);

  const filteredCards = useMemo(() => {
    const fromDate = dateRange.from ? new Date(dateRange.from) : null;
    const toDate = dateRange.to ? new Date(dateRange.to) : null;

    return cardsData.filter((card) => {
      const [yyyy, mm, dd] = card.dateCreated.split("-");
      const cardDate = new Date(`${yyyy}-${mm}-${dd}`);
      if (fromDate && cardDate < fromDate) return false;
      if (toDate && cardDate > toDate) return false;
      return true;
    });
  }, [dateRange]);

  const handleLoadMore = () => {
    const increment = view === "grid" ? GRID_LIMIT : LIST_LIMIT;
    setVisibleCount((prev) => Math.min(prev + increment, filteredCards.length));
  };

  const toggleView = (mode) => setView(mode);

  return (
    <div
      className="w-full mx-auto relative z-20 min-h-[250px]"
      ref={containerRef}
    >
      {filteredCards.length > 0 ? (
        <>
          <div className="flex justify-end mb-3 lg:mb-6 gap-5">
            <ViewToggleButton
              icon="grid"
              active={view === "grid"}
              onClick={() => toggleView("grid")}
            />
            <ViewToggleButton
              icon="list"
              active={view === "list"}
              onClick={() => toggleView("list")}
            />
          </div>

          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4"
                : "flex flex-col gap-4"
            }
          >
            {filteredCards.slice(0, visibleCount).map((card) => (
              <CardWrapper key={card.id}>
                <Card card={card} view={view} />
              </CardWrapper>
            ))}
          </div>

          {visibleCount < filteredCards.length && (
            <div className="flex justify-center mt-6 relative">
              <button
                onClick={handleLoadMore}
                className="button-loadmore transition-all duration-500"
              >
                Load More
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex justify-center items-center h-[200px] text-lg font-medium text-gray-400 italic">
          Oops, no data!
        </div>
      )}
    </div>
  );
}

function CardWrapper({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(10px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  return <div ref={ref}>{children}</div>;
}

function ViewToggleButton({ icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={`${icon} view`}
      className={`${
        active ? "text-[#3D8EDA]" : "text-[#C8C7C7]"
      } hover:text-[#3D8EDA] transition-colors`}
    >
      <svg className="w-5 h-5 xl:w-6 xl:h-6 fill-current">
        <use xlinkHref={`/icons/sprite.svg#${icon}`} />
      </svg>
    </button>
  );
}
