import { GridChartBaseProps } from './../types';

interface PointLabelProps {
  x?: number;
  y?: number;
  value?: number;
  valueFormatter?: GridChartBaseProps['valueFormatter'];
}

export function PointLabel({ x, y, value, valueFormatter }: PointLabelProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-8}
        dx={-10}
        textAnchor="top"
        fill="var(--chart-text-color, var(--mantine-color-dimmed))"
        fontSize={8}
      >
        {(value && valueFormatter?.(value)) || value}
      </text>
    </g>
  );
}
