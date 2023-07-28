'use client';
import { useRouter } from 'next/router'; // correct import from 'next/router' not 'next/navigation'
import { useCallback, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

import { SafeReservation, SafeUser } from './../types';

import Heading from './../components/Heading';
import Container from './../components/Container';
import ListingCard from './../components/listings/ListingCard';
import React from 'react';

interface TripsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
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
          router.replace(router.asPath); // replace refresh() with replace(router.asPath) as refresh() is deprecated
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId('');
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Your Journeys"
        subtitle="Your past adventures and upcoming voyages"
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
        {reservations.map(
          (
            reservation: SafeReservation // make sure to type reservation as SafeReservation
          ) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              reservation={reservation}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel="Cancel reservation"
              currentUser={currentUser}
            />
          )
        )}
      </div>
    </Container>
  );
};

export default TripsClient;
