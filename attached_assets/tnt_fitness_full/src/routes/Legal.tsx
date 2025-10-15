import React from 'react'
export default function Legal({kind}:{kind:'privacy'|'terms'}){return (<div className='mx-auto max-w-3xl px-6 py-10'><h1 className='text-3xl font-extrabold mb-4'>{kind==='privacy'?'Privacy Policy':'Terms of Service'}</h1><p className='text-[color:var(--tnt-navy)]/80'>Replace with counsel-reviewed content.</p></div>) }
