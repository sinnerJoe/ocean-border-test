
export function storeResponse<T = any>(params: any, data: T) {
    const value = JSON.stringify(data, undefined, 2);
    const key = JSON.stringify(params);
    
    localStorage.setItem(key, value);
}

export function retreiveResponse<T = any>(params: any): T | null {
    const storedValue = localStorage.getItem(JSON.stringify(params));
    if(!storedValue) {
        return null;
    }
    return JSON.parse(storedValue);
}