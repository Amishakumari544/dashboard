// Filtering of data is taken placed here with piechart data seperation as well

export const filterData = (data, userId) => {
  return data.filter((post) => post.userId === userId);
};

export const generatePieChartData = (data, userId) => {
  const filteredData = filterData(data, userId);
  const totalPosts = data.length;
  const userPosts = filteredData.length;

  return [
    { label: "User 1 Posts", value: userPosts },
    { label: "Other Posts", value: totalPosts - userPosts },
  ];
};
