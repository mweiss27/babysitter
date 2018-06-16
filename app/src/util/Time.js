import moment from "moment"

const TIME_FORMAT = "HH:mmA"

/**
 * Converts a string in HH:mmA format to a moment object with zero'd seconds
 */
export const toMoment = s => {
    if (!s)
        return moment()
            .hour(0)
            .minute(0)
            .second(0)

    if (s.constructor !== String) return moment(null) //null is invalid, undefined is the current time

    return moment(s, TIME_FORMAT).second(0)
}

/**
 * Converts a moment object into a string, formatted as HH:mmA
 */
export const toString = m => {
    const defaultReturn = "12:00AM"
    if (!m) return defaultReturn
    if (m.constructor !== moment().constructor) return defaultReturn

    try {
        return m.format(TIME_FORMAT)
    } catch (ex) {
        return defaultReturn
    }
}
