import { format } from "date-fns";

const LocalTime = () => {
  const localTime = format(new Date(), "dd-MM-yyyy HH:mm:ss");
  console.log(localTime)
};

export default LocalTime;

