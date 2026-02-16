import ParaSeparator from "@/components/Shared/ParaSeparator";

const CiliaAndFlagella = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.8 Cilia and Flagella</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Cilia (sing.: cilium) and flagella (sing.: flagellum) are hair-like
          outgrowths of the cell membrane.
        </p>
        <p>
          Cilia are small structures which work like oars, causing the movement
          of either the cell or the surrounding fluid.
        </p>
        <p>
          Flagella are comparatively longer and responsible for cell movement.
        </p>
        <p>
          The prokaryotic bacteria also possess flagella but these are
          structurally different from that of the eukaryotic flagella.
        </p>
        <ParaSeparator />
        <p>
          The electron microscopic study of a cilium or the flagellum show that
          they are covered with plasma membrane.
        </p>
        <p>
          Their core called the axoneme, possesses a number of microtubules
          running parallel to the long axis.
        </p>
        <p>
          The axoneme usually has nine doublets of radially arranged peripheral
          microtubules, and a pair of centrally located microtubules.
        </p>
        <p>
          Such an arrangement of axonemal microtubules is referred to as the 9+2
          array (Figure 8.10).
        </p>
        <p>
          The central tubules are connected by bridges and is also enclosed by a
          central sheath, which is connected to one of the tubules of each
          peripheral doublets by a radial spoke.
        </p>
        <p>Thus, there are nine radial spokes.</p>
        <p>The peripheral doublets are also interconnected by linkers.</p>
        <p>
          Both the cilium and flagellum emerge from centriole-like structure
          called the basal bodies.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center">
          <img
            src="/biology/cilia-flagella-electron-micrograph.png"
            alt="cilia flagella electron micrograph"
            className="w-[300px] translate-y-2"
          />

          <img
            src="/biology/cilia-flagella-internal-structure.png"
            alt="cilia flagella internal structure"
            className="h-[500px]"
          />
        </div>
        <p>
          <strong>Figure 8.10</strong> Section of cilia/flagella showing
          different parts : (a) Electron micrograph (b) Diagrammatic
          representation of internal structure
        </p>
      </div>
    </div>
  );
};

export default CiliaAndFlagella;
