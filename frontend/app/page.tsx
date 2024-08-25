'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { Suspense, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading';

function HomeContent() {
  const { theme, setTheme } = useTheme();
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const placeholders = [
    'Hello there how are you doing',
    'Tell me more about ...',
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('chat');
    setTimeout(() => {}, 1500);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={
            theme === 'dark'
              ? '/images/banner_dark.png'
              : '/images/banner_light.png'
          }
          alt="Image"
          width="1080"
          height="1080"
          className="p-10 md:p-0 md:h-1/5 md:w-1/5 object-contain"
        />
        <div className="w-full md:w-[60] mt-2 md:mt-10 p-4">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            value={inputValue}
            setValue={setInputValue}
          />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}
