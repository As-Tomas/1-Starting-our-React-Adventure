

const justDate = ({ dateTime }) => {
  const date = new Date(dateTime);
  const formattedDate = date.toDateString();

  return <div>{formattedDate}</div>;
};

export default justDate;
