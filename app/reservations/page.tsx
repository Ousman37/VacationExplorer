import React from 'react';
import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';
import ReservationsClient from './ReservationsClient';

import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Access Denied"
          subtitle="Please log in to view your reservations."
        />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Reservations Found"
          subtitle="You haven't made any reservations yet. Start exploring now!"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ReservationsPage;
