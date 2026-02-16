import ParaSeparator from "@/components/Shared/ParaSeparator";

const Vacuoles = () => {
  return (
    <div>
      <h3 className="text-xl text-gray-700">8.5.3.4 Vacuoles</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          The vacuole is the membrane-bound space found in the cytoplasm. It
          contains water, sap, excretory product and other materials not useful
          for the cell.
        </p>
        <p>The vacuole is bound by a single membrane called tonoplast.</p>
        <p>
          In plant cells the vacuoles can occupy up to 90 per cent of the volume
          of the cell.
        </p>
        <ParaSeparator />
        <p>
          In plants, the tonoplast facilitates the transport of a number of ions
          and other materials against concentration gradients into the vacuole,
          hence their concentration is significantly higher in the vacuole than
          in the cytoplasm.
        </p>
        <ParaSeparator />
        <p>
          In Amoeba, the <strong>contractile vacuole</strong> is important for
          osmoregulation and excretion.
        </p>
        <p>
          In many cells, as in protists, <strong>food vacuoles</strong> are
          formed by engulfing the food particles.
        </p>
      </div>
    </div>
  );
};

export default Vacuoles;
