import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default async function getListings(params: IListingsParams) {
  try {
    const {
      userId,
      roomCount,
      guestCount,
      bathroomCount,
      locationValue,
      startDate,
      endDate,
      category,
    } = params;

    // Use an object to store the query conditions
    const query: any = {};

    if (userId) {
      query.userId = userId;
    }

    if (category) {
      query.category = category;
    }

    // Use the "gte" operator only when the count values are positive
    if (roomCount && roomCount > 0) {
      query.roomCount = { gte: roomCount };
    }

    if (guestCount && guestCount > 0) {
      query.guestCount = { gte: guestCount };
    }

    if (bathroomCount && bathroomCount > 0) {
      query.bathroomCount = { gte: bathroomCount };
    }

    if (locationValue) {
      query.locationValue = locationValue;
    }

    if (startDate && endDate) {
      // Use the "some" operator to check if any reservation overlaps with the given dates
      query.reservations = {
        some: {
          OR: [
            {
              endDate: { gte: startDate },
              startDate: { lte: startDate },
            },
            {
              startDate: { lte: endDate },
              endDate: { gte: endDate },
            },
          ],
        },
      };
    }

    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));

    return safeListings;
  } catch (error) {
    console.error('Error while fetching listings:', error);
    return []; // Return an empty array or handle the error case accordingly
  }
}
