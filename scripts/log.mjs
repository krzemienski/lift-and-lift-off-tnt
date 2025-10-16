#!/usr/bin/env node
import { format } from 'util';

const timestamp = new Date().toISOString();
const args = process.argv.slice(2);
const message = args.length > 0 ? args.join(' ') : 'Log event';

console.log(`[${timestamp}] ${message}`);