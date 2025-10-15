import React from 'react'
import copy from '../content/contact.md?raw'
import { mdToHtml } from '../lib/md'
export default function Contact(){return (<div className='mx-auto max-w-3xl px-6 py-10'><div className='prose' dangerouslySetInnerHTML={{__html: mdToHtml(copy)}}/><form className='mt-6 space-y-3'><input className='w-full border rounded-xl px-4 py-3' placeholder='Your name' required/><input className='w-full border rounded-xl px-4 py-3' placeholder='Email or Instagram' required/><textarea className='w-full border rounded-xl px-4 py-3' rows={4} placeholder='Your message' required/><button className='button button--primary'>Send</button></form></div>) }
