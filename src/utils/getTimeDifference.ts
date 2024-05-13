const getTimeDifference = (createdAt: Date) => {
  const currentDate = new Date();
  const changedCreatedAt = new Date(createdAt);
  const diff = currentDate.getTime() - changedCreatedAt.getTime();

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  } else if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  } else {
    return `${Math.floor(days)}일 전`;
  }
};

export default getTimeDifference;
