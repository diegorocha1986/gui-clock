import { useEffect, useState } from "react";
import styled from "styled-components";
import ClockBars from "./ClockBars";
import GuiHour from '../img/gui-01.png';
import GuiMinute from '../img/gui-02.png';

const ClockWrapper = styled.div`
  width: 70vw;
  height: 70vw;
  background: white;
  border: 4px solid white;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2vw 4vw -1vw rgba(0,0,0,0.8);

  @media(min-width: 1024px) {
    width: 70vh;
    height: 70vh;
  }
`;

const ClockPointer = styled.img`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center bottom;
  transform: translate(-50%, -100%) rotate(${props => props.angle ? props.angle + 'deg' : 0});
`;

const ClockHourPointer = styled(ClockPointer)`
  height: 26vw;

  @media(min-width: 1024px) {
    height: 26vh;
  }
`;

const ClockMinutePointer = styled(ClockPointer)`
  height: 26vw;

  @media(min-width: 1024px) {
    height: 30vh;
  }
`;

const ClockSecondPointer = styled.div`
  width: 8px;
  height: 26vw;
  display: block;
  background: white;
  border: 1px solid black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center bottom;
  transform: translate(-50%, -100%) rotate(${props => props.angle ? props.angle + 'deg' : 0});

  @media(min-width: 1024px) {
    height: 26vh;
  }
`;

const ClockDot = styled.div`
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 9999px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px -1px black;

  @media(min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

const ClockDisplay = styled.p`
  font-size: 2rem;
  color: white;
  margin: 0;
`;

function hourToAngle(hour) {
  let hourInAMPM = hour % 12;
  
  hourInAMPM = hourInAMPM ? hourInAMPM : 12;

  return hourInAMPM * (360 / 12);
}

function minuteToAngle(minute) {
  return minute * (360 / 60);
}

function secondToAngle(second) {
  return second * (360 / 60);
}

function leftPad(value) {
  if (value < 10) {
    return '0' + String(value);
  }

  return value;
}

function Clock() {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <ClockWrapper>
        <ClockBars />
        <ClockHourPointer src={GuiHour} angle={hourToAngle(hour)} />
        <ClockMinutePointer src={GuiMinute} angle={minuteToAngle(minutes)} />
        <ClockSecondPointer angle={secondToAngle(seconds)} />
        <ClockDot />
      </ClockWrapper>
      <ClockDisplay>{hour}:{leftPad(minutes)}:{leftPad(seconds)}</ClockDisplay>
    </>
  );
}

export default Clock;