import ParaSeparator from "@/components/Shared/ParaSeparator";

const Nucleus = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.10 Nucleus</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Nucleus as a cell organelle was first described by Robert Brown as
          early as 1831.
        </p>
        <p>
          Later the material of the nucleus stained by the basic dyes was given
          the name <strong>chromatin</strong> by Flemming.
        </p>
        <ParaSeparator />
        <p>
          The interphase nucleus (nucleus of a cell when it is not dividing) has
          highly extended and elaborate nucleoprotein fibres called chromatin,
          nuclear matrix and one or more spherical bodies called{" "}
          <strong>nucleoli</strong>
          (sing.: nucleolus) (Figure 8.11).
        </p>
        <div className="flex flex-col items-center gap-4 my-6">
          <img
            src="/biology/structure-of-nucleus.png"
            alt="structure of nucleus"
            className="h-[300px]"
          />
          <p>
            <strong>Figure 8.11</strong> Structure of nucleus
          </p>
        </div>
        <p>
          Electron microscopy has revealed that the nuclear envelope, which
          consists of two parallel membranes with a space between (10 to 50 nm)
          called the <strong>perinuclear space</strong>, forms a barrier between
          the materials present inside the nucleus and that of the cytoplasm.
        </p>
        <p>
          The outer membrane usually remains continuous with the endoplasmic
          reticulum and also bears ribosomes on it.
        </p>
        <p>
          At a number of places the nuclear envelope is interrupted by minute
          pores, which are formed by the fusion of its two membranes.
        </p>
        <p>
          These nuclear pores are the passages through which movement of RNA and
          protein molecules takes place in both directions between the nucleus
          and the cytoplasm.
        </p>
        <p>
          Normally, there is only one nucleus per cell, variations in the number
          of nuclei are also frequently observed.
        </p>
        <p>
          Can you recollect names of organisms that have more than one nucleus
          per cell?
        </p>
        <p>
          Some mature cells even lack nucleus, e.g., erythrocytes of many
          mammals and sieve tube cells of vascular plants.
        </p>
        <p>Would you consider these cells as ‘living’?</p>
        <ParaSeparator />
        <p>
          The nuclear matrix or the <strong>nucleoplasm</strong> contains
          nucleolus and chromatin.
        </p>
        <p>The nucleoli are spherical structures present in the nucleoplasm.</p>
        <p>
          The content of nucleolus is continuous with the rest of the
          nucleoplasm as it is not a membrane bound structure.
        </p>
        <p>It is a site for active ribosomal RNA synthesis.</p>
        <p>
          Larger and more numerous nucleoli are present in cells actively
          carrying out protein synthesis.
        </p>
        <ParaSeparator />
        <p>
          You may recall that the interphase nucleus has a loose and indistinct
          network of nucleoprotein fibres called chromatin.
        </p>
        <p>
          But during different stages of cell division, cells show structured{" "}
          <strong>chromosomes</strong> in place of the nucleus.
        </p>
        <p>
          Chromatin contains DNA and some basic proteins called{" "}
          <strong>histones</strong>, some non-histone proteins and also RNA.
        </p>
        <p>
          A single human cell has approximately two metre long thread of DNA
          distributed among its forty six (twenty three pairs) chromosomes.
        </p>
        <p>
          You will study the details of DNA packaging in the form of a
          chromosome in class XII.
        </p>
        <ParaSeparator />
        <p>
          Every chromosome (visible only in dividing cells) essentially has a
          primary constriction or the <strong>centromere</strong> on the sides
          of which disc shaped structures called <strong>kinetochores</strong>{" "}
          are present (Figure 8.12).
        </p>
        <p>Centromere holds two chromatids of a chromosome.</p>
        <div className="flex flex-col items-center gap-4 my-6">
          <img
            src="/biology/Chromosome with kinetochore.png"
            alt="Chromosome with kinetochore"
            className="h-[300px]"
          />
          <p>
            <strong>Figure 8.12</strong> Chromosome with kinetochore
          </p>
        </div>
        <p>
          Based on the position of the centromere, the chromosomes can be
          classified into four types (Figure 8.13).
        </p>
        <p>
          The <strong>metacentric</strong> chromosome has middle centromere
          forming two equal arms of the chromosome.
        </p>
        <p>
          The <strong>sub-metacentric</strong> chromosome has centromere
          slightly away from the middle of the chromosome resulting into one
          shorter arm and one longer arm.
        </p>
        <p>
          In case of <strong>acrocentric</strong> chromosome the centromere is
          situated close to its end forming one extremely short and one very
          long arm, whereas the <strong>telocentric</strong> chromosome has a
          terminal centromere.
        </p>
        <ParaSeparator />
        <p>
          Sometimes a few chromosomes have non-staining secondary constrictions
          at a constant location.
        </p>
        <p>
          This gives the appearance of a small fragment called the{" "}
          <strong>satellite</strong>.
        </p>
        <div className="flex flex-col items-center gap-4 my-6">
          <img
            src="/biology/Types of chromosomes based on the position of centromere.png"
            alt="Types of chromosomes based on the position of centromere"
            className="h-[350px]"
          />
          <p>
            <strong>Figure 8.13</strong> Types of chromosomes based on the
            position of centromere
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nucleus;
