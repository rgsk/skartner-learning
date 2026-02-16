import ParaSeparator from "@/components/Shared/ParaSeparator";

const Plastids = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.5 Plastids</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>Plastids are found in all plant cells and in euglenoides.</p>
        <p>These are easily observed under the microscope as they are large.</p>
        <p>
          They bear some specific pigments, thus imparting specific colours to
          the plants.
        </p>
        <p>
          Based on the type of pigments plastids can be classified into{" "}
          <strong>chloroplasts</strong>, <strong>chromoplasts</strong> and{" "}
          <strong>leucoplasts</strong>.
        </p>
        <ParaSeparator />
        <p>
          The chloroplasts contain <strong>chlorophyll</strong> and carotenoid
          pigments which are responsible for trapping light energy essential for
          photosynthesis.
        </p>
        <p>
          In the chromoplasts, fat soluble <strong>carotenoid</strong> pigments
          like carotene, xanthophylls and others are present.
        </p>
        <p>This gives the part of the plant a yellow, orange or red colour.</p>
        <p>
          The leucoplasts are the colourless plastids of varied shapes and sizes
          with stored nutrients:
        </p>
        <p>
          <strong>Amyloplasts</strong> store carbohydrates (starch), e.g.,
          potato; <strong>elaioplasts</strong> store oils and fats whereas the{" "}
          <strong>aleuroplasts</strong> store proteins.
        </p>
        <ParaSeparator />
        <p>
          Majority of the chloroplasts of the green plants are found in the
          mesophyll cells of the leaves.
        </p>
        <p>
          These are lens-shaped, oval, spherical, discoid or even ribbon-like
          organelles having variable length (5-10µm) and width (2-4µm).
        </p>
        <p>
          Their number varies from 1 per cell of the Chlamydomonas, a green alga
          to 20-40 per cell in the mesophyll.
        </p>
        <ParaSeparator />
        <p>
          Like mitochondria, the chloroplasts are also double membrane bound.
        </p>
        <p>
          Of the two, the inner chloroplast membrane is relatively less
          permeable.
        </p>
        <p>
          The space limited by the inner membrane of the chloroplast is called
          the stroma.
        </p>
        <p>
          A number of organised flattened membranous sacs called the{" "}
          <strong>thylakoids</strong>, are present in the stroma (Figure 8.8).
        </p>
        <p>
          Thylakoids are arranged in stacks like the piles of coins called grana
          (singular: granum) or the intergranal thylakoids.
        </p>
        <p>
          In addition, there are flat membranous tubules called the stroma
          lamellae connecting the thylakoids of the different grana.
        </p>
        <p>The membrane of the thylakoids enclose a space called a lumen.</p>
        <p>
          The stroma of the chloroplast contains enzymes required for the
          synthesis of carbohydrates and proteins.
        </p>
        <p>
          It also contains small, doublestranded circular DNA molecules and
          ribosomes.
        </p>
        <p>Chlorophyll pigments are present in the thylakoids.</p>
        <p>
          The ribosomes of the chloroplasts are smaller (70S) than the
          cytoplasmic ribosomes (80S).
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/Sectional view of chloroplast.png"
          alt="Sectional view of chloroplast"
          className="h-[250px]"
        />
        <p>
          <strong>Figure 8.8</strong> Sectional view of chloroplast
        </p>
      </div>
    </div>
  );
};

export default Plastids;
