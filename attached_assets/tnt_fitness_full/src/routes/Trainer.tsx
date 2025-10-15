import React from 'react'
import story from '../content/trainer_story_longform.md?raw'
import { mdToHtml } from '../lib/md'
export default function Trainer(){return (<div className='mx-auto max-w-3xl px-6 py-10'><div className='prose prose-lg' dangerouslySetInnerHTML={{__html: mdToHtml(story)}}/><a href='/assessment' className='button button--primary mt-6 inline-flex'>Book a Free Consult</a></div>) }
