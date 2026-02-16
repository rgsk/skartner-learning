const ProkaryoticCells = () => {
  return (
    <div>
      <h3 className="text-2xl">Prokaryotic Cells</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          The prokaryotic cells are represented by bacteria, blue-green algae,
          mycoplasma and PPLO (Pleuro Pneumonia Like Organisms).
        </p>
        <p>
          They are generally smaller and multiply more rapidly than the
          eukaryotic cells (Figure 8.2).
        </p>
        <p>They may vary greatly in shape and size.</p>
        <p>The four basic shapes of bacteria are:</p>
        <ol className="list-decimal pl-6">
          <li>bacillus (rod like)</li>
          <li>coccus (spherical)</li>
          <li>vibrio (comma shaped)</li>
          <li>spirillum (spiral)</li>
        </ol>
        <p>
          The organisation of the prokaryotic cell is fundamentally similar
          even though prokaryotes exhibit a wide variety of shapes and
          functions.
        </p>
        <p>
          All prokaryotes have a cell wall surrounding the cell membrane except
          in mycoplasma.
        </p>
        <p>The fluid matrix filling the cell is the cytoplasm.</p>
        <p>There is no well-defined nucleus.</p>
        <p>
          The genetic material is basically naked, not enveloped by a nuclear
          membrane.
        </p>
        <p>
          In addition to the genomic DNA (the single chromosome/circular DNA),
          many bacteria have small circular DNA outside the genomic DNA.
        </p>
        <p>These smaller DNA are called plasmids.</p>
        <p>
          The plasmid DNA confers certain unique phenotypic characters to such
          bacteria.
        </p>
        <p>One such character is resistance to antibiotics.</p>
        <p>
          In higher classes you will learn that this plasmid DNA is used to
          monitor bacterial transformation with foreign DNA.
        </p>
        <p>Nuclear membrane is found in eukaryotes.</p>
        <p>
          No organelles, like the ones in eukaryotes, are found in prokaryotic
          cells except for ribosomes.
        </p>
        <p>Prokaryotes have something unique in the form of inclusions.</p>
        <p>
          A specialised differentiated form of cell membrane called mesosome
          is the characteristic of prokaryotes.
        </p>
        <p>They are essentially infoldings of cell membrane.</p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/comparison-of-eukaryotic-cell-with-other-organisms.png"
          alt="comparison of eukaryotic cell with other organisms.png"
          className="h-[500px]"
        />
        <p>
          Figure 8.2 Diagram showing comparison of eukaryotic cell with other
          organisms
        </p>
      </div>
    </div>
  );
};

export default ProkaryoticCells;
