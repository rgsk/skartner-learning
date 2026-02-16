import ParaSeparator from "@/components/Shared/ParaSeparator";

const Ribosomes = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.6 Ribosomes</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Ribosomes are the granular structures first observed under the
          electron microscope as dense particles by George Palade (1953).
        </p>
        <p>
          They are composed of ribonucleic acid (RNA) and proteins and are not
          surrounded by any membrane.
        </p>
        <ParaSeparator />
        <p>
          The eukaryotic ribosomes are 80S while the prokaryotic ribosomes are
          70S.
        </p>
        <p>
          Each ribosome has two subunits, larger and smaller subunits (Fig
          8.9).
        </p>
        <p>
          The two subunits of 80S ribosomes are 60S and 40S while that of 70S
          ribosomes are 50S and 30S.
        </p>
        <p>
          Here ‘S’ (Svedberg’s Unit) stands for the sedimentation coefficient;
          it is indirectly a measure of density and size.
        </p>
        <p>Both 70S and 80S ribosomes are composed of two subunits.</p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img src="/biology/ribosome.png" alt="ribosome" className="h-[200px]" />
        <p>
          <strong>Figure 8.9</strong> Ribosome
        </p>
      </div>
    </div>
  );
};

export default Ribosomes;
