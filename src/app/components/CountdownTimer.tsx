"use client";
import React, { useEffect, useRef, useState } from "react";
import { CountdownTimerProps } from "../types";

const CountdownTimer = ({ date }: { date: string }) => {
  const [timerDays, setTimerDays] = useState<number | string>("00");
  const [timerHours, setTimerHours] = useState<number | string>("00");
  const [timerMinutes, setTimerMinutes] = useState<number | string>("00");
  const [timerSeconds, setTimerSeconds] = useState<number | string>("00");

  let interval = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    const countdownDate = new Date(date).getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 24 * 60 * 60));
      const hours = Math.floor(
        (distance % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current as NodeJS.Timeout);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  });

  return { timerDays, timerHours, timerMinutes, timerSeconds };
};

export default CountdownTimer;
