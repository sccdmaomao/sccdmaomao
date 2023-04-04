import moment from 'moment'

const getEmploymentLength = (start: string, end?: string) => {
    const startTime = moment(start)
    const endTime = moment(end)
    const years = endTime.diff(startTime, 'years', true)
    return `${Math.ceil(years / 10)} yrs ${
        Math.ceil((years * 10) % 10) + 1
    } mons`
}

export default getEmploymentLength
