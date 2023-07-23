import prisma from '@/app/libs/prismadb';

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  const { listingId } = params;

  // Check if listingId is defined and not an empty string
  if (!listingId || listingId.trim() === '') {
    throw new Error('ListingId is required');
  }

  try {
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      throw new Error(`Listing with id ${listingId} could not be found`);
    }

    return {
      ...listing,
      createdAt: listing.createdAt.toString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toString(),
        updatedAt: listing.user.updatedAt.toString(),
        emailVerified: listing.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(
      `An error occurred while fetching the listing: ${error.message || error}`
    );
  }
}
