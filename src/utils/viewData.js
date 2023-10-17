exports.difficultyLevelOptionsViewData = (difficultyLevel) => {
  const titles = [
    "Medium (Standard 3x3)",
    "Easy",
    "Intermediate",
    "Expert",
    "Hardcore",
  ];


const options = titles.map((title, index) => {
  const value = index + 1
    return {
        title: `${value} - ${title}`,
        value: index + 1,
        selected: Number(difficultyLevel) === value,
    }
})

return options
};

