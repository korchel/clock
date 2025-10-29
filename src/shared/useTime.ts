import { useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  // const hours = time.getHours().toString().padStart(2, "0");
  // const minutes = time.getMinutes().toString().padStart(2, "0");
  // const seconds = time.getSeconds().toString().padStart(2, "0");
  const timeString = time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const [hours, minutes, seconds] = timeString.split(":");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return { hours, minutes, seconds };
};
