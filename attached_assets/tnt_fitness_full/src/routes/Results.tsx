import React from 'react'
import copy from '../content/results.md?raw'
import { mdToHtml } from '../lib/md'
export default function Results(){return (<div className='mx-auto max-w-5xl px-6 py-10'><div className='prose' dangerouslySetInnerHTML={{__html: mdToHtml(copy)}}/><div className='grid md:grid-cols-3 gap-6 mt-6'>{[1,2,3,4,5,6].map(i=>(<div key={i} className='card h-40'/>))}</div></div>) }
