import ParaSeparator from "@/components/Shared/ParaSeparator";

const GolgiApparatus = () => {
  return (
    <div>
      <h3 className="text-xl text-gray-700">8.5.3.2 Golgi apparatus</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Camillo Golgi (1898) first observed densely stained reticular
          structures near the nucleus. These were later named Golgi bodies after
          him.
        </p>
        <p>
          They consist of many flat, disc-shaped sacs or cisternae of 0.5µm to
          1.0µm diameter (Figure 8.6).
        </p>
        <p>These are stacked parallel to each other.</p>
        <p>Varied number of cisternae are present in a Golgi complex.</p>
        <p>
          The Golgi cisternae are concentrically arranged near the nucleus with
          distinct convex cis or the forming face and concave trans or the
          maturing face.
        </p>
        <p>
          The cis and the trans faces of the organelle are entirely different,
          but interconnected.
        </p>
        <ParaSeparator />
        <p>
          The golgi apparatus principally performs the function of packaging
          materials, to be delivered either to the intra-cellular targets or
          secreted outside the cell.
        </p>
        <p>
          Materials to be packaged in the form of vesicles from the ER fuse with
          the cis face of the golgi apparatus and move towards the maturing
          face.
        </p>
        <p>
          This explains, why the golgi apparatus remains in close association
          with the endoplasmic reticulum.
        </p>
        <p>
          A number of proteins synthesised by ribosomes on the endoplasmic
          reticulum are modified in the cisternae of the golgi apparatus before
          they are released from its trans face.
        </p>
        <p>
          Golgi apparatus is the important site of formation of glycoproteins
          and glycolipids.
        </p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/Golgi apparatus.png"
          alt="Golgi apparatus"
          className="h-[300px]"
        />
        <p>
          <strong>Figure 8.6</strong> Golgi apparatus
        </p>
      </div>
    </div>
  );
};

export default GolgiApparatus;
