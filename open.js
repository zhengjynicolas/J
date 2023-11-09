import open, {openApp, apps} from 'open';
open(process.argv[2], {wait: true, background: true})