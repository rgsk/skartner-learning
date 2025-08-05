interface AspectContainerProps {
  aspectRatio: number;
  children: any;
}
const AspectContainer: React.FC<AspectContainerProps> = ({
  aspectRatio,
  children,
}) => {
  return (
    <div
      className="relative"
      style={{
        paddingBottom: getPaddingBottom(aspectRatio),
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  );
};

export default AspectContainer;

export const AspectContainerWithHeight: React.FC<
  AspectContainerProps & { height: number }
> = ({ aspectRatio, height, children }) => {
  const width = height * aspectRatio;
  return (
    <div style={{ width }}>
      <AspectContainer aspectRatio={aspectRatio}>{children}</AspectContainer>
    </div>
  );
};

export const getPaddingBottom = (aspectRatio: number) => {
  const paddingBottom = (1 / aspectRatio) * 100;
  return `${paddingBottom}%`;
};
