/* eslint-disable @next/next/no-img-element */
export const Football = ({ size }: { size: number }) => {
  return (
    <img
      src="/probability/football.png"
      alt="football"
      style={{ width: size }}
    />
  );
};
export const Cross = ({ size }: { size: number }) => {
  return (
    <img src="/probability/red-cross.png" alt="cross" style={{ width: size }} />
  );
};

export const useSlideMaker = (counter: number) => {
  const happenAt = (v: number) => {
    return counter >= v;
  };
  const showAt = (v: number) => {
    return counter >= v ? "opacity-100" : "opacity-0";
  };
  const showOnlyAt = (v: number) => {
    return counter === v;
  };

  return { happenAt, showAt, showOnlyAt };
};
