'use client';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full"
          src={src}
          alt="Avatar"
          width={30}
          height={30}
        />
      ) : (
        <FaUser size={14} color="gray" />
      )}
    </div>
  );
};

export default Avatar;
