import ParaSeparator from "@/components/Shared/ParaSeparator";

const CellWall = () => {
  return (
    <div>
      <h3 className="text-2xl">Cell Wall</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          As you may recall, a non-living rigid structure called the cell wall
          forms an outer covering for the plasma membrane of fungi and plants.
        </p>
        <p>
          Cell wall not only gives shape to the cell and protects the cell from
          mechanical damage and infection, it also helps in cell-to-cell
          interaction and provides barrier to undesirable macromolecules.
        </p>
        <p>
          Algae have cell wall, made of cellulose, galactans, mannans and
          minerals like calcium carbonate, while in other plants it consists of
          cellulose, hemicellulose, pectins and proteins.
        </p>
        <p>
          The cell wall of a young plant cell, the primary wall is capable of
          growth, which gradually diminishes as the cell matures and the
          secondary wall is formed on the inner (towards membrane) side of the
          cell.
        </p>
        <ParaSeparator />
        <p>
          The middle lamella is a layer mainly of calcium pectate which holds or
          glues the different neighbouring cells together.
        </p>
        <p>
          The cell wall and middle lamellae may be traversed by plasmodesmata
          which connect the cytoplasm of neighbouring cells.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/plasmodesmata.png"
          alt="plasmodesmata"
          className="h-[600px]"
        />
        <p>
          <strong>Figure - </strong> Plasmodesmata
        </p>
      </div>
    </div>
  );
};

export default CellWall;
