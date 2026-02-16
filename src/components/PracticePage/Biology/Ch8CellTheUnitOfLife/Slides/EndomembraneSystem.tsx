import ParaSeparator from "@/components/Shared/ParaSeparator";

const EndomembraneSystem = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.3 Endomembrane System</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          While each of the membranous organelles is distinct in terms of its
          structure and function, many of these are considered together as an
          endomembrane system because their functions are coordinated.
        </p>
        <p>
          The endomembrane system include endoplasmic reticulum (ER), golgi
          complex, lysosomes and vacuoles.
        </p>
        <ParaSeparator />
        <p>
          Since the functions of the mitochondria, chloroplast and peroxisomes
          are not coordinated with the above components, these are not
          considered as part of the endomembrane system.
        </p>
      </div>
    </div>
  );
};

export default EndomembraneSystem;
