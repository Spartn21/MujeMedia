// components/LogoContainer.js
import Image from 'next/image';

export default function LogoContainer({ logo }) {
  return (
    <div className="bg-white p-2 rounded shadow-md flex justify-center items-center w-[120px] h-[60px]">
      <Image src={`/logos/${logo}`} alt="Customer Logo" width={120} height={60} className="object-contain" />
    </div>
  );
}
