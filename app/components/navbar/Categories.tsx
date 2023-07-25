'use client';
import React from 'react';
import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBoatFishing,
  GiButterflyWarning,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';

import { IconType } from 'react-icons';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing } from 'react-icons/fa';
import { WiSnowflakeCold } from 'react-icons/wi';
import { RiVipDiamondFill } from 'react-icons/ri';

interface Category {
  label: string;
  icon: IconType;
  description: string;
}

export const categories: Category[] = [
  {
    label: 'Beach',
    icon: TbBeach,
    description:
      'This property is 1 minute walk from the beach. Located in the heart of the city, this elegant, 5-star hotel offers stylish rooms with classic-style interiors. It features a sauna, swimming pool and private parking on site.',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description:
      'This charming property features beautiful windmills in the garden, creating a picturesque and serene atmosphere.',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description:
      'This property features sleek and contemporary designs with open-concept layouts, floor-to-ceiling windows, and cutting-edge amenities.',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description:
      'This property is located in the beautiful countryside surrounded by lush green fields and picturesque landscapes.',
  },
  {
    label: 'Pool',
    icon: TbPool,
    description:
      'This property has a swimming pool that contains a state-of-the-art water purification system.',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description:
      'This property is nestled amidst picturesque islands and features a stunning swimming pool equipped with a state-of-the-art water purification system.',
  },
  {
    label: 'Lakefront',
    icon: GiBoatFishing,
    description:
      'This property offers a scenic lakefront location, providing breathtaking views. It also features a stunning swimming pool equipped with a state-of-the-art water purification system for a refreshing swim.',
  },
  {
    label: 'Ski Resort',
    icon: FaSkiing,
    description:
      'This property is located in a popular ski resort, offering easy access to pristine slopes and thrilling winter activities. After a day of skiing, guests can unwind in the property',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description:
      'This property embodies the charm and grandeur of castles. With its majestic architecture and regal interiors, guests can experience a truly enchanting stay reminiscent of a bygone era.',
  },
  {
    label: 'Nature Retreat',
    icon: GiForestCamp,
    description:
      'This property offers a serene camping experience nestled in the midst of picturesque nature. With its tranquil surroundings and cozy accommodations, guests can immerse themselves in the beauty of the outdoors and enjoy a rejuvenating getaway.',
  },
  {
    label: 'Winter Wonderland',
    icon: WiSnowflakeCold,
    description:
      'This property offers a magical winter wonderland experience with snowy landscapes and cozy accommodations.',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description:
      'This property offers a magical winter wonderland experience with snowy landscapes and cozy accommodations.',
  },
  {
    label: 'Desert Oasis',
    icon: GiCactus,
    description:
      'This property is nestled in the heart of a breathtaking desert landscape. Guests can experience the enchantment of the desert with its vast dunes, starry nights, and tranquil ambiance, creating an unforgettable oasis retreat.',
  },
  {
    label: 'Rustic Farmstay',
    icon: GiButterflyWarning,
    description:
      'This property offers a charming farmstay experience nestled in the countryside. Guests can immerse themselves in the rustic ambiance of barns, scenic landscapes, and the serenity of rural life, creating unforgettable memories in a peaceful farm retreat.',
  },
  {
    label: 'Lux',
    icon: RiVipDiamondFill,
    description:
      'This property offers a luxurious experience with elegant amenities and impeccable services, ensuring a memorable and indulgent stay.',
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');

  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon} // Add the 'icon' prop
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
