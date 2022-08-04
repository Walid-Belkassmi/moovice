import moment from "moment";

const Weekly = () => {
  console.log(moment().subtract(7, "d").format("YYYY-MM-DD"));
  return (
    <>
      <h1>Weekly</h1>
    </>
  );
};

export default Weekly;
