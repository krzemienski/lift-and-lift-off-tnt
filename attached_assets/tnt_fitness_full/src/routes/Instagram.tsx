import React from 'react'
import copy from '../content/instagram.md?raw'
import { mdToHtml } from '../lib/md'
export default function Instagram(){return (<div className='mx-auto max-w-6xl px-6 py-10'><div className='prose' dangerouslySetInnerHTML={{__html: mdToHtml(copy)}}/><div className='grid md:grid-cols-3 gap-4 mt-4'>{[1,2,3,4,5,6].map(i=>(<div key={i} className='h-48 bg-[color:var(--tnt-indigo)]/10 rounded-xl'/>))}</div><a href='https://instagram.com' className='button button--primary mt-6 inline-flex'>Follow on Instagram</a></div>) }
