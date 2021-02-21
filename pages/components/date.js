import { format, parseISO } from 'date-fns'

export default function Date({ dateString }) {
    return dateString ? <time dateTime={dateString}>{format(parseISO(dateString), 'LLLL d, yyyy')}</time> : ''
}