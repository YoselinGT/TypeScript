import {subDays, format} from 'date-fns'

const date = new Date(1997,1,28);

const rta = subDays(date, 30)
const str = format(rta,'yyyy/MM/dd')
console.log(rta)
console.log(str)
