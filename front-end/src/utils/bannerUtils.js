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

export const calculateDeadline = (days, hours, seconds) => {
    const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + seconds;
  
    const now = Math.floor(Date.now() / 1000);
  
    let deadline = now + totalSeconds;
  
    return deadline;
  };