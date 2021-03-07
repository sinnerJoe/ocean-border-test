import axios from 'axios';
import { retreiveResponse, storeResponse } from "../shared/storage";



function get<P = any, R = any>(url: string, params: P) {
    const fullParams = { ...params, url };
    const storedResponse = retreiveResponse(fullParams);

    if (storedResponse) {
        return Promise.resolve(storedResponse as R);
    }

    return axios.get<P, { data: R }>(url, {
        params,
        headers: {
            "x-rapidapi-key": "ddac0762b2mshf2a1e97a045686ep1ee811jsn9c89f803eddf",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        }
    }).then((response) => {
        storeResponse(fullParams, response.data);
        return response.data;
    })
}

interface QuoteRequestParams {
    region?: string,
    period1?: number,
    period2?: number,
    symbol: string,
}

export interface QuoteRequestResponse {
    chart: {
        result: {
            timestamp: number[],
            meta: {
                currency: string,
                symbol: string,
            },
            indicators: {
                quote: {
                    high: number[],
                    low: number[],
                    open: number[],
                    close: number[],
                    volume: number[],
                }[],
            }
        }[]
    }
}

export function fetchQuotes(params: QuoteRequestParams) {
    return get<QuoteRequestParams, QuoteRequestResponse>('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart', params)
}


export interface AutocompleteResponse {
    quotes: {
        shortname: string,
        longname: string,
        symbol: string
    }[]
}

export function autocompleteSymbol(searchTerm: string) {
    return get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete', {q: searchTerm, region: 'US'})
}