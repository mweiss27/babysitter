import moment from "moment"

const TIME_FORMAT = "HH:mmA"

export const toMoment = s => {
    return moment(s, TIME_FORMAT).second(0)
}

export const toString = m => {
    return m.format(TIME_FORMAT)
}
