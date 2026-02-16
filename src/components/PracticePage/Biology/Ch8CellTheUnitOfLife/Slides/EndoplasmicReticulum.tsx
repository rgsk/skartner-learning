import ParaSeparator from "@/components/Shared/ParaSeparator";

const EndoplasmicReticulum = () => {
  return (
    <div>
      <h3 className="text-xl text-gray-700">
        8.5.3.1 The Endoplasmic Reticulum (ER)
      </h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Electron microscopic studies of eukaryotic cells reveal the presence
          of a network or reticulum of tiny tubular structures scattered in the
          cytoplasm that is called the endoplasmic reticulum (ER) (Figure 8.5).
        </p>
        <p>
          Hence, ER divides the intracellular space into two distinct
          compartments, i.e., luminal (inside ER) and extra luminal (cytoplasm)
          compartments.
        </p>
        <ParaSeparator />
        <p>
          The ER often shows ribosomes attached to their outer surface. The
          endoplasmic reticulun bearing ribosomes on their surface is called
          rough endoplasmic reticulum (RER).
        </p>
        <p>
          In the absence of ribosomes they appear smooth and are called smooth
          endoplasmic reticulum (SER).
        </p>
        <ParaSeparator />
        <p>
          RER is frequently observed in the cells actively involved in protein
          synthesis and secretion.
        </p>
        <p>
          They are extensive and continuous with the outer membrane of the
          nucleus.
        </p>
        <ParaSeparator />
        <p>
          The smooth endoplasmic reticulum is the major site for synthesis of
          lipid.
        </p>
        <p>
          In animal cells lipid-like steroidal hormones are synthesised in SER.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/Endoplasmic Reticulum.png"
          alt="Endoplasmic Reticulum"
          className="h-[500px]"
        />
        <p>
          <strong>Figure 8.5</strong> Endoplasmic reticulum
        </p>
      </div>
    </div>
  );
};

export default EndoplasmicReticulum;
