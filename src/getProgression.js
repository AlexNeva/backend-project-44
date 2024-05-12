const getProgression = (length = 10, step = 2, startNum = 1) => {
  const progression = [startNum];

  for (let i = 1; i < length; i += 1) {
    const newNum = progression[i - 1] + step;

    progression.push(newNum);
  }

  return progression;
};

export default getProgression;
