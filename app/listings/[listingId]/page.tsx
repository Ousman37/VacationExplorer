// This is server component that will be rendered on the server side of the application.
import React from 'react';
import getCurrentUser from '../../actions/getCurrentUser';
import getListingById from '../../actions/getListingById';
import getReservations from '../../actions/getReservations';

import ClientOnly from '../../components/ClientOnly';
import EmptyState from '../../components/EmptyState';

import ListingClient from './ListingClient';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const { listingId } = params;

  if (!listingId || listingId.trim() === '') {
    throw new Error('ListingId is required');
  }

  const listing = await getListingById({ listingId });
  const reservations = await getReservations({ listingId });
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
