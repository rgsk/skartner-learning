import ParaSeparator from "@/components/Shared/ParaSeparator";

const Intro = () => {
  return (
    <div>
      <h1 className="text-4xl text-[#0074bd]">Chapter 8</h1>
      <h2 className="text-4xl text-[#0074bd]">Cell: The Unit of Life</h2>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>When you look around, you see both living and non-living things.</p>
        <p>
          You must have wondered and asked yourself – ‘what is it that makes an
          organism living, or what is it that an inanimate thing does not have
          which a living thing has’ ?
        </p>
        <p>
          The answer to this is the presence of the basic unit of life – the
          cell in all living organisms.
        </p>
        <ParaSeparator />
        <p>All organisms are composed of cells.</p>
        <p>
          Some are composed of a single cell and are called unicellular
          organisms while others, like us, composed of many cells, are called
          multicellular organisms.
        </p>
      </div>
    </div>
  );
};

export default Intro;
