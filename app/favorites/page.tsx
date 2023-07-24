import React from 'react';

import EmptyState from '../components/EmptyState';
import ClientOnly from '../components/ClientOnly';

import FavoritesClient from './FavoritesClient';

import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';

const favoritesPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="Oops, we're having trouble loading your favorites"
          subtitle="Make sure you're online and please try again. If the problem persists, contact our support team."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      {/* Replace favoritesClient with your actual component name */}
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};
export default favoritesPage;
