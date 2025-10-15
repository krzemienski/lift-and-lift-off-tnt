import React from 'react'
import { Link } from 'react-router-dom'
const items=[{slug:'calisthenics',title:'Calisthenics'},{slug:'flexibility',title:'Flexibility'},{slug:'boxing',title:'Boxing'},{slug:'strength',title:'Strength Training'},{slug:'fat-loss',title:'Fat Loss'}]
export default function Programs(){return (<div className='mx-auto max-w-7xl px-6 py-10'><h1 className='text-3xl font-extrabold mb-4'>Programs</h1><div className='grid md:grid-cols-2 gap-6'>{items.map(it=>(<Link key={it.slug} to={`/programs/${it.slug}`} className='card p-6 hover:shadow-2xl transition'><div className='text-xl font-bold'>{it.title}</div><div className='text-[color:var(--tnt-navy)]/80'>Learn more</div></Link>))}</div></div>) }
