import React from 'react';
import Container from '../Container';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from '../CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: <TbBeach />,
    description:
      'This property is 1 minute walk from the beach. Located in the heart of the city, this elegant, 5-star hotel offers stylish rooms with classic-style interiors. It features a sauna, swimming pool and private parking on site.',
  },
  {
    label: 'Windmills',
    icon: <GiWindmill />,
    description: 'This property has windmills in the garden.',
  },
  {
    label: 'Modern',
    icon: <MdOutlineVilla />,
    description: 'This property has modern architectures.',
  },
];

const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map((category, index) => (
          <CategoryBox key={index} {...category} />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
