import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {useDebouncedCallback} from 'use-debounce';
import { Input, Select } from 'antd';

import { autocompleteSymbol, AutocompleteResponse } from '../../shared/requests'


const initialOptions = [
    {
        value: 'AMD',
        label: 'AMD'
    }
];

interface Option {
    value: string, 
    label: string
}

function insensitiveIncludes(str: string, sub: string) {
    return str.toLowerCase().includes(sub.toLowerCase());
}

const optionExists = (options: Option[], term: string) => {
    return options.find(({value, label}) => insensitiveIncludes(value, term) || insensitiveIncludes(label, term))
}

const autocompleteToOptions = (response: AutocompleteResponse) => {
    return response.quotes.map(({longname, shortname, symbol}) => ({
        value: symbol,
        label: `${shortname || longname} (${symbol})`
    }))
}


const concatOptions = (currentOptions: Option[], newOptions: Option[]): Option[] => {
    const optionMap = new Map();
    for(const option of currentOptions) {
        optionMap.set(option.value, option);
    }
    for(const option of newOptions) {
        optionMap.set(option.value, option);
    }
    return Array.from(optionMap.values());
}

export interface SymbolInputProps extends React.ComponentProps<typeof Select> {

};

export default function SymbolInput(props: SymbolInputProps) {

    const [options, setOptions] = useState(initialOptions)
    const [loading, setLoading] = useState(false);

    const search = (text: string) => {
        if(!loading && !optionExists(options, text)) {
            setLoading(true);
            autocompleteSymbol(
                text,
                ).then((response) => {
                    const newOptions = autocompleteToOptions(response);
                    setOptions((options) => concatOptions(options, newOptions));
                    setLoading(false);
                })
            }

    }

    const {callback: handleSearch} = useDebouncedCallback(search, 1000)

    return (
        <Select 
        showSearch
        placeholder="Type a sock symbol or company name"
        onSearch={handleSearch}
        loading={loading}
        options={options}
        filterOption={(input, option: any) => {
            if(insensitiveIncludes(option.label, input)) {
                return option;
            }
            return false;
        }}
        {...props} 
        />
    )
}