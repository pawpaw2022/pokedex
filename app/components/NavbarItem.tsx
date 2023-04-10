import Link from 'next/link';
import React from 'react'

interface Props {
    name: string;
    url : string;
}

export default function NavbarItem( { name, url }: Props ) {
  return (
    <div className='text-md uppercase font-semibold m-2 cursor-pointer hover:scale-105 ease-in-out'>
        <Link href={url}>{name}</Link>
    </div>
  )
}
