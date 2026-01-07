const images = Array.from({ length: 14 }, (_, i) => `/images/${String(i + 1).padStart(3, "0")}.jpg`);

export const cardsData = Array.from({ length: 14 }, (_, i) => {
  const day = String(i + 1).padStart(2, "0");
  const dateCreated = `${day}-01-2026`;
  const dateData = [
    {
      date: dateCreated,
      likes: Math.floor(Math.random() * 30),
      comments: Math.floor(Math.random() * 10),
    },
  ];
  const dateUploaded = `${day}-01-2026`;

  return {
    id: i + 1,
    image: images[i],
    todayLikes: dateData[0].likes,
    todayComments: dateData[0].comments,
    dateCreated,
    dateData,
    dateUploaded,
    ariaLabel: `post-${i + 1}`,
  };
});
