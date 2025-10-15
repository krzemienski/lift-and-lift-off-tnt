import { marked } from 'marked'
export function mdToHtml(md:string){ marked.setOptions({breaks:true,gfm:true}); return marked.parse(md) as string }
