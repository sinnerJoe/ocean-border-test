import moment, { Moment } from 'moment'
import { QuoteRequestResponse } from './requests';
import {QuoteInterval} from './types';

function sum(values: number[]) {
    return values.reduce((acc, v) => acc + v, 0);
}

function getDayStart(date: Moment) {
    return moment(date).set('s', 0).set('m', 0).set('h', 0);
}

function getDayEnd(date: Moment) {
    return moment(date).set('s', 59).set('m', 59).set('h', 23);
}

function generateRange(start: Moment, end: Moment) {
    let day = getDayEnd(start);
    const days = [];
    while (day.isBefore(end)) {
        day = moment(day).add(1, 'day');
        days.push(day);
    }

    return days;
}

interface DayStats {
    sells: number[],
    highs: number[],
    lows: number[],
    volume: number[],
    time: string
}

function separateDataByDays(startDate: Moment, endDate: Moment, data: QuoteRequestResponse): DayStats[] {
    const range = generateRange(startDate, endDate);
    const { timestamp, indicators: { quote: [{ high, low, open, close, volume }] } } = data.chart.result[0];

    const dayStatistics: DayStats[] = [];

    let timestampIndex = 0;
    for (const day of range) {
        const statistics: DayStats = {
            lows: [],
            sells: [],
            highs: [],
            volume: [],
            time: day.format('DD MMM')
        }
        while (timestampIndex < timestamp.length && day.unix() > timestamp[timestampIndex]) {
            statistics.lows.push(low[timestampIndex]);
            statistics.sells.push(open[timestampIndex]);
            statistics.highs.push(high[timestampIndex]);
            statistics.volume.push(volume[timestampIndex]);
            timestampIndex++;
        }
        // remove days without any tradings
        if(Object.values(statistics).some(val => Array.isArray(val) && val.length)) {
            if(statistics.volume.every(v => v == 0)) {
                for(const index in statistics.volume) {
                    statistics.volume[index] = 1;
                }
            }
            dayStatistics.push(statistics);
        }
    }

    return dayStatistics
}

function aggregateStatistics(volume: number[], sells: number[], lows: number[], highs: number[]) {

    const tradedAmounts = volume.map((v, index) => sells[index] * v);

    const totalTrades = sum(volume)

    const averagePrice = sum(tradedAmounts) / totalTrades;

    const minimumPrice = Math.min(...lows);
    const maximumPrice = Math.max(...highs);

    return {
        low: minimumPrice,
        high: maximumPrice,
        avg: averagePrice
    }
}

export function aggregateData(startDate: Moment, endDate: Moment, data: QuoteRequestResponse): QuoteInterval[] {

    const dailyStats = separateDataByDays(startDate, endDate, data);

    const aggregatedDailyStats = dailyStats.map(({ highs, lows, sells, volume, time }) => ({
        ...aggregateStatistics(volume, sells, lows, highs),
        time
    }));


    return aggregatedDailyStats;
}
