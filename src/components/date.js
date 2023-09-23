const currentDate = new Date();

// Get the current day of the week
const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
const currentDay = dayFormatter.format(currentDate);

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
});
const formattedDate = dateFormatter.format(currentDate);

const getDate = () => {
    return [currentDay, formattedDate];
}

export default getDate;