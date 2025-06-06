import { DemoArea, DemoAreaProps } from '../DemoArea';
import { DemoCode, DemoCodeProps } from '../DemoCode';
import { DemoRoot } from '../DemoRoot';

export interface CodeDemoProps extends DemoCodeProps, DemoAreaProps {}

export function CodeDemo({
  code,
  children,
  withPadding,
  centered,
  defaultExpanded = true,
  maxWidth,
  minHeight,
  dimmed,
  striped,
  maxCollapsedHeight,
  overflow,
}: CodeDemoProps) {
  return (
    <DemoRoot>
      <DemoArea
        withPadding={withPadding}
        centered={centered}
        maxWidth={maxWidth}
        minHeight={minHeight}
        dimmed={dimmed}
        striped={striped}
        overflow={overflow}
      >
        {children}
      </DemoArea>
      <DemoCode
        code={code}
        defaultExpanded={defaultExpanded}
        maxCollapsedHeight={maxCollapsedHeight}
      />
    </DemoRoot>
  );
}
