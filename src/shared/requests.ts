import axios from 'axios';
import { retreiveResponse, storeResponse } from "../shared/storage";

import {notification} from 'antd'

function displaySuccess() {
    notification.success({ message: "Success", description: "Stock Market data retreived." })
}

function displayFailure() {
    notification.error({message: "Fail", description: "Something went wrong. Probably the API key expired."})
}

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
        },
        
    }).then((response) => {
        storeResponse(fullParams, response.data);
        return response.data;
    }).catch(() => {
        displayFailure();
        return {
           chart: {
               result: [{
                   timestamp: [],
                   meta: {
                       currency: 'USD',
                       symbol: 'AMD'
                   },
                   indicators: {
                       quote: [{
                           high: [],
                           low: [],
                           open: [],
                           close: [],
                           volume: []
                       }]
                   }
               }]
           } 
        } as QuoteRequestResponse
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

export async function fetchQuotes(params: QuoteRequestParams) {
    const data = get<QuoteRequestParams, QuoteRequestResponse>('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart', params)
    displaySuccess();
    return data;
}


export interface AutocompleteResponse {
    quotes: {
        shortname: string,
        longname: string,
        symbol: string
    }[]
}

export function autocompleteSymbol(searchTerm: string) {
    return get('https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete', {q: searchTerm, region: 'US'});
}