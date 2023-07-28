import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';

import { SafeListing, SafeUser } from '../types';
import fetchListings, { IListingsParams } from '../actions/fetchListings';

import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = async (id: string) => {
    setDeletingId(id);

    try {
      await axios.delete(`/api/listings/${id}`);
      toast.success('Listing deleted successfully');
      router.reload(); // Use router.reload() to refresh the page
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error ||
        'An unexpected error occurred while deleting the listing. Please try again.';
      toast.error(errorMessage);
    } finally {
      setDeletingId('');
    }
  };

  useEffect(() => {
    // Fetch listings only on the client-side
    const fetchListingsData = async () => {
      try {
        const params: IListingsParams = {
          // Set other query parameters as needed
        };

        const data = await fetchListings(params); // Fetch listings using the fetchListings function
        // Handle the fetched data as needed
        console.log('Fetched listings on the client-side:', data);
      } catch (error: any) {
        console.error(
          'Error while fetching listings on the client-side:',
          error
        );
      }
    };

    // Call the function to fetch listings on the client-side
    fetchListingsData();
  }, []);

  return (
    <Container>
      <Heading
        title="Welcome to Your Properties"
        subtitle="Here you can manage all your properties."
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
        {listings.map((listing: any) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
