import { Days } from "../constants/days";
import { Months } from "../constants/months";


export const getDay = (date) => Days[date.getDay()];

export const getMonth = (date) => Months[date.getMonth()];