import ParaSeparator from "@/components/Shared/ParaSeparator";

const EukaryoticCells = () => {
  return (
    <div>
      <h3 className="text-3xl text-purple-500">8.5 Eukaryotic Cells</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          The eukaryotes include all the protists, plants, animals and fungi.
        </p>
        <p>
          In eukaryotic cells there is an extensive compartmentalisation of
          cytoplasm through the presence of membrane bound organelles.
        </p>
        <p>
          Eukaryotic cells possess an organised nucleus with a nuclear envelope.
        </p>
        <p>
          In addition, eukaryotic cells have a variety of complex locomotory and
          cytoskeletal structures.
        </p>
        <p>Their genetic material is organised into chromosomes.</p>
        <ParaSeparator />
        <p>All eukaryotic cells are not identical.</p>
        <p>
          Plant and animal cells are different as the former possess cell walls,
          plastids and a large central vacuole which are absent in animal cells.
        </p>
        <p>
          On the other hand, animal cells have centrioles which are absent in
          almost all plant cells (Figure 8.3).
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <div className="border p-4">
          <img
            src="/biology/plant-cell.png"
            alt="plant cell"
            className="h-[500px]"
          />
        </div>

        <div className="border p-4">
          <img
            src="/biology/animal-cell.png"
            alt="animal cell"
            className="h-[500px]"
          />
        </div>
        <p>
          <strong>Figure 8.3</strong> Diagram showing : (a) Plant cell (b)
          Animal cell
        </p>
      </div>
      <div className="h-8"></div>
      <div className="space-y-2">
        <p>
          Let us now look at individual cell organelles to understand their
          structure and functions.
        </p>
      </div>
    </div>
  );
};

export default EukaryoticCells;
