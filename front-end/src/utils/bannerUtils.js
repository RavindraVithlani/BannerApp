export const getTimeComponents = (timeRemaining) => {
    if (timeRemaining <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

export const calculateDeadline = (days, hours, minutes, seconds) => {
    const daysInMs = days * 24 * 60 * 60 * 1000;
    const hoursInMs = hours * 60 * 60 * 1000;
    const minutesInMs = minutes * 60 * 1000;
    const secondsInMs = seconds * 1000;
  
    const now = new Date().getTime(); // current time in milliseconds
  
    const totalTimeInMs = daysInMs + hoursInMs + minutesInMs + secondsInMs;
    const deadlineTimestamp = now + totalTimeInMs;
  
    return deadlineTimestamp;
  };