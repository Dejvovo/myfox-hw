import { useEffect, useState } from "react";
import { getReservationsPart } from "../GraphQL/queries";
import { Calendar } from "../GraphQL/types";
import { Reservation } from "../Components/Reservation";

export const MyReservationPage = () => {
  const [reservations, setReservations] = useState<Calendar[] | undefined>();

  useEffect(() => {
    getReservationsPart({
      take: 10,
    }).then((data) => {
      setReservations(data);
    });
  }, []);

  return (
    <div>
      {reservations?.map((reservation) => (
        <Reservation reservation={reservation}></Reservation>
      ))}
    </div>
  );
};
