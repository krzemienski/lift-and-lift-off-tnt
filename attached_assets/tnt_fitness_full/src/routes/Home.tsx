import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
export default function Home(){return (<div><Hero/><section className='mx-auto max-w-7xl px-6 py-10'><h2 className='text-2xl font-extrabold mb-4'>Programs</h2><div className='grid md:grid-cols-3 gap-6'><Link to='/programs/calisthenics' className='card p-6'>Calisthenics — Control your body.</Link><Link to='/programs/flexibility' className='card p-6'>Flexibility — Move pain‑free.</Link><Link to='/programs/boxing' className='card p-6'>Boxing — Conditioning + technique.</Link><Link to='/programs/strength' className='card p-6'>Strength — Durable gains.</Link><Link to='/programs/fat-loss' className='card p-6'>Fat Loss — Nutrition + conditioning.</Link></div></section></div>) }
