import ParaSeparator from "@/components/Shared/ParaSeparator";

const RibosomesAndInclusionBodies = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">
        8.4.2 Ribosomes and Inclusion Bodies
      </h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          In prokaryotes, ribosomes are associated with the plasma membrane of
          the cell.
        </p>
        <p>
          They are about 15 nm by 20 nm in size and are made of two subunits –
          50S and 30S units which when present together form 70S prokaryotic
          ribosomes.
        </p>
        <p>Ribosomes are the site of protein synthesis.</p>
        <p>
          Several ribosomes may attach to a single mRNA and form a chain called{" "}
          <strong>polyribosomes</strong> or <strong>polysome</strong>.
        </p>
        <p>The ribosomes of a polysome translate the mRNA into proteins.</p>
        <ParaSeparator />
        <p>
          <strong>Inclusion bodies:</strong> Reserve material in prokaryotic
          cells are stored in the cytoplasm in the form of inclusion bodies.
        </p>
        <p>
          These are not bound by any membrane system and lie free in the
          cytoplasm, e.g., phosphate granules, cyanophycean granules and
          glycogen granules.
        </p>
        <p>
          Gas vacuoles are found in blue green and purple and green
          photosynthetic bacteria.
        </p>
      </div>
    </div>
  );
};

export default RibosomesAndInclusionBodies;
