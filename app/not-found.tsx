import Box from '@/components/Box';
import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <Box className="h-full flex flex-col items-center justify-center">
      <div className="text-neutral-400 text-xl">
        Could not find requested resource
      </div>
      <Link href={"/"}>
        <Button className="mt-5 max-w-sm">Return Home</Button>
      </Link>
    </Box>
  );
}

export default NotFound;