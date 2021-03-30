import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import dayjs from "dayjs";
import { calculateBiorhythms } from "../calculation";
import BiorhythmChart from "./biorhythmChart";

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM YYYY");
}

function biorhythmCard({ birthDate, targetDate }) {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );

  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDate} targetDate={targetDate} />
        <p>Physical:{physical.toFixed(4)} </p>
        <p>Emotional:{emotional.toFixed(4)}</p>
        <p>Intellectual:{intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
}

export default biorhythmCard;
