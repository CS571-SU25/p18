import React, { useEffect, useState } from 'react';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const distance = targetDate - now;
    const seconds = Math.floor((distance / 1000) % 60);
    const minutes = Math.floor((distance / 1000 / 60) % 60);
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</h3>
    </div>
  );
}

export default CountdownTimer;