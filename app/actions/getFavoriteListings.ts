import prisma from '@/app/libs/prismadb';
import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favorites = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
    });

    const safeFavorites = favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
    }));

    return safeFavorites;
  } catch (error: any) {
    // Rethrow the error with a custom message for better error information
    throw new Error(
      'Error while fetching favorite listings: ' + (error as any).message
    );
  }
}

// import prisma from '@/app/libs/prismadb';

// import getCurrentUser from './getCurrentUser';

// export default async function getFavoriteListings() {
//   try {
//     const currentUser = await getCurrentUser();

//     if (!currentUser) {
//       return [];
//     }

//     const favorites = await prisma.listing.findMany({
//       where: {
//         id: {
//           in: [...(currentUser.favoriteIds || [])],
//         },
//       },
//     });

//     const safeFavorites = favorites.map((favorite) => ({
//       ...favorite,
//       createdAt: favorite.createdAt.toString(),
//     }));

//     return safeFavorites;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// }
