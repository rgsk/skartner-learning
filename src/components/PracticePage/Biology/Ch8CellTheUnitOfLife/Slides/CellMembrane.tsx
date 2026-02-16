import ParaSeparator from "@/components/Shared/ParaSeparator";

const CellMembrane = () => {
  return (
    <div>
      <h3 className="text-2xl">Cell Membrane</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          The detailed structure of the membrane was studied only after the
          advent of the electron microscope in the 1950s.
        </p>
        <p>
          Meanwhile, chemical studies on the cell membrane, especially in human
          red blood cells (RBCs), enabled the scientists to deduce the possible
          structure of plasma membrane.
        </p>
        <ParaSeparator />
        <p>
          These studies showed that the cell membrane is mainly composed of
          lipids and proteins.
        </p>
        <p>
          The major lipids are phospholipids that are arranged in a bilayer.
        </p>
        <p>
          Also, the lipids are arranged within the membrane with the polar head
          towards the outer sides and the hydrophobic tails towards the inner
          part.
        </p>
        <p>
          This ensures that the nonpolar tail of saturated hydrocarbons is
          protected from the aqueous environment (Figure 8.4).
        </p>
        <p>In addition to phospholipids membrane also contains cholesterol.</p>
        <ParaSeparator />
        <p>
          Later, biochemical investigation clearly revealed that the cell
          membranes also possess protein and carbohydrate.
        </p>
        <p>
          The ratio of protein and lipid varies considerably in different cell
          types.
        </p>
        <p>
          In human beings, the membrane of the erythrocyte has approximately 52
          per cent protein and 40 per cent lipids.
        </p>
        <ParaSeparator />
        <p>
          Depending on the ease of extraction, membrane proteins can be
          classified as integral and peripheral.
        </p>
        <p>
          Peripheral proteins lie on the surface of membrane while the integral
          proteins are partially or totally buried in the membrane.
        </p>
        <ParaSeparator />
        <p>
          An improved model of the structure of cell membrane was proposed by
          Singer and Nicolson (1972) widely accepted as{" "}
          <strong>fluid mosaic model</strong>
          (Figure 8.4).
        </p>
        <p>
          According to this, the quasi-fluid nature of lipid enables lateral
          movement of proteins within the overall bilayer.
        </p>
        <p>
          This ability to move within the membrane is measured as its fluidity.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/fluid-mosaic-model-of-plasma-membrane.png"
          alt="fluid mosaic model of plasma membrane.png"
          className="h-[500px]"
        />
        <p>
          <strong>Figure 8.4</strong> Fluid mosaic model of plasma membrane
        </p>
      </div>
      <div className="h-8"></div>
      <div className="space-y-2">
        <p>
          The fluid nature of the membrane is also important from the point of
          view of functions like cell growth, formation of intercellular
          junctions, secretion, endocytosis, cell division etc.
        </p>
        <ParaSeparator />
        <p>
          One of the most important functions of the plasma membrane is the
          transport of the molecules across it.
        </p>
        <p>
          The membrane is selectively permeable to some molecules present on
          either side of it.
        </p>
        <p>
          Many molecules can move briefly across the membrane without any
          requirement of energy and this is called the{" "}
          <strong>passive transport</strong>.
        </p>
        <p>
          Neutral solutes may move across the membrane by the process of simple
          diffusion along the concentration gradient, i.e., from higher
          concentration to the lower.
        </p>
        <p>
          Water may also move across this membrane from higher to lower
          concentration.
        </p>
        <p>
          Movement of water by diffusion is called <strong>osmosis</strong>.
        </p>
        <p>
          As the polar molecules cannot pass through the nonpolar lipid bilayer,
          they require a carrier protein of the membrane to facilitate their
          transport across the membrane.
        </p>
        <p>
          A few ions or molecules are transported across the membrane against
          their concentration gradient, i.e., from lower to the higher
          concentration.
        </p>
        <p>
          Such a transport is an energy dependent process, in which ATP is
          utilised and is called <strong>active transport</strong>, e.g., Na
          <sup>+</sup>/K<sup>+</sup> Pump.
        </p>
      </div>
    </div>
  );
};

export default CellMembrane;
