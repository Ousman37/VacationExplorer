'use client';

import { toast } from 'react-hot-toast';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SafeReservation, SafeUser } from '../types';

import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled');
          router.refresh();
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // You can pick up the message from error.response.data
            toast.error(
              `Error: ${
                error.response.data.message ||
                'We encountered a problem processing your request. Please try again later.'
              }`
            );
          } else if (error.request) {
            // The request was made but no response was received
            toast.error(
              'No response received from server. Please try again later.'
            );
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error(`Error: ${error.message}`);
          }
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, toast]
  );

  return (
    <Container>
      <Heading
        title="Your Reservations"
        subtitle="Manage all your bookings at one place. Enjoy a seamless hosting experience."
      />
      <div
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {reservations.map((reservation: any) => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel guest reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
