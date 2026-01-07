const images = Array.from({ length: 15 }, (_, i) => `/images/${String(i + 1).padStart(3, "0")}.jpg`);

const startDate = new Date("2026-01-01");
const endDate = new Date("2026-01-07");

const getDateForCard = (index) => {
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
  const dayOffset = index % totalDays;
  const date = new Date(startDate.getTime() + dayOffset * 24 * 60 * 60 * 1000);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export const cardsData = Array.from({ length: 15 }, (_, i) => {
  const dateCreated = getDateForCard(i);
  const dateData = [
    {
      date: dateCreated,
      likes: Math.floor(Math.random() * 30),
      comments: Math.floor(Math.random() * 10),
    },
  ];

  return {
    id: i + 1,
    image: images[i],
    todayLikes: dateData[0].likes,
    todayComments: dateData[0].comments,
    dateCreated,
    dateData,
    dateUploaded: dateCreated,
    ariaLabel: `post-${i + 1}`,
  };
});
