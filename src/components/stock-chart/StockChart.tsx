import React, { useMemo, useRef } from 'react';
import { scaleBand, scaleLinear, scaleOrdinal, useTooltip, useTooltipInPortal, Group, BarGroup, LegendOrdinal } from '@visx/visx';
import { defaultStyles } from '@visx/tooltip';
import { Grid } from '@visx/grid'
import { SeriesPoint, BarGroupBar } from '@visx/shape/lib/types';
import { localPoint } from '@visx/event';
import { AxisBottom, AxisLeft } from '@visx/axis';
import {QuoteInterval} from '../../shared/types';
import './StockChart.scss';

type AggregateQuotes = 'high' | 'low' | 'avg';

type TooltipData = BarGroupBar<AggregateQuotes>;


export interface StockChartProps {
    data: QuoteInterval[],
    width?: number,
    height?: number,
    displayAverages?: boolean
}
export type BarStackProps = {
    width: number;
    height: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    events?: boolean;
};

const aggregateLabels: Record<AggregateQuotes, string> = {
    avg: 'Average',
    high: 'High',
    low: 'Low'
}

const red = '#cf1322';
const blue = '#1890ff';
const orange = '#fadb14';

const axisStrokeColor = '#cAA8ff';

export const background = '#eaedff';
const margin = { top: 40, right: 0, bottom: 0, left: 0 };
const tooltipStyles = {
    ...defaultStyles,
    minWidth: 60,
    backgroundColor: 'rgba(0,0,0,0.9)',
    color: 'white',
};


const useKeyScales = (displayAverages: boolean) => {
    return useMemo(() => {
        const computedKeys: AggregateQuotes[] = displayAverages ? ['low', 'avg', 'high'] : ['low', 'high'];
        const computedColorScale = scaleOrdinal<AggregateQuotes, string>({
            domain: computedKeys,
            range: displayAverages ? [red, orange, blue] : [red, blue]
        });
        const computedAggregateDataScale = scaleBand<AggregateQuotes>({
            domain: computedKeys,
            padding: 0.1
        });
        return {
            keys: computedKeys,
            colorScale: computedColorScale,
            aggregateDataScale: computedAggregateDataScale
        }
    }, [displayAverages])
}


export default function StockChart({ data, width = 800, height = 600, displayAverages = false }: StockChartProps) {

    const { keys, colorScale, aggregateDataScale } = useKeyScales(displayAverages);
    const tooltipTimeout = useRef<any>(null)

    // scales
    const intervalScale = scaleBand<string>({
        domain: data.map(interval => interval.time),
        padding: 0.2,
    });

    const priceScale = scaleLinear<number>({
        domain: [0, Math.max(...data.map(interval => interval.high))],
        nice: true,
    });


    const {
        tooltipOpen,
        tooltipLeft,
        tooltipTop,
        hideTooltip,
        showTooltip,
        tooltipData
    } = useTooltip<TooltipData>();

    const { containerRef, TooltipInPortal } = useTooltipInPortal({ scroll: true })

    const xMax = width;
    const yMax = height - margin.top - 50
    intervalScale.rangeRound([0, xMax]);
    priceScale.range([yMax, 0]);
    aggregateDataScale.rangeRound([0, intervalScale.bandwidth()])

    return (
        <div className="stock-chart">
            <svg ref={containerRef} width={width} height={height} fill={"white"}>
                <rect x={0} y={0} width={width} height={height} />
                <Group top={margin.top}>
                    <BarGroup
                        data={data}
                        keys={keys}
                        x0={(interval) => interval.time}
                        yScale={priceScale}
                        x0Scale={intervalScale}
                        x1Scale={aggregateDataScale}
                        color={colorScale}
                        height={yMax}
                    >
                        {barGroups =>
                            barGroups.map((barGroup) =>
                                <Group key={`${barGroup.index}`} left={barGroup.x0}>
                                    {
                                        barGroup.bars.map(bar => (
                                            <rect
                                                key={`${barGroup.index}-${bar.x}-${bar.index}-${bar.key}`}
                                                x={bar.x}
                                                y={bar.y}
                                                height={bar.height}
                                                width={bar.width + 5}
                                                fill={bar.color}
                                                onMouseLeave={() => {
                                                    tooltipTimeout.current = setTimeout(() => {
                                                        hideTooltip();
                                                    }, 300);
                                                }}
                                                onMouseMove={event => {
                                                    if (tooltipTimeout.current) clearTimeout(tooltipTimeout.current);
                                                    const eventSvgCoords = localPoint(event);
                                                    const left = bar.x + barGroup.x0 + bar.width / 2;
                                                    showTooltip({
                                                        tooltipData: bar,
                                                        tooltipTop: eventSvgCoords?.y,
                                                        tooltipLeft: left,
                                                    });
                                                }}
                                            />
                                        ))
                                    }
                                </Group>
                            )
                        }
                    </BarGroup>

                </Group>
                <AxisBottom
                    top={yMax + margin.top}
                    scale={intervalScale}
                    stroke={axisStrokeColor}
                    tickStroke={axisStrokeColor}
                    tickLabelProps={() => ({
                        fill: axisStrokeColor,
                        fontSize: 11,
                        textAnchor: 'middle',
                    })}
                />
                <AxisLeft
                    left={margin.left + 30}
                    top={margin.top}
                    scale={priceScale}
                    stroke={axisStrokeColor}
                    tickStroke={axisStrokeColor}
                    hideZero
                />
            </svg>
            <div
                style={{
                    position: 'absolute',
                    top: margin.top / 2 - 10,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '14px',
                }}
            >
                <LegendOrdinal labelFormat={(value) => {
                        return aggregateLabels[value as AggregateQuotes]
                    }} scale={colorScale} direction="row" labelMargin="0 15px 0 0" />
            </div>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                    <div style={{ color: tooltipData.color }}>
                        <strong>{aggregateLabels[tooltipData.key]}</strong>
                    </div>
                    <div>{tooltipData.value.toFixed(2)}$</div>
                </TooltipInPortal>
            )}
        </div >
    )
}