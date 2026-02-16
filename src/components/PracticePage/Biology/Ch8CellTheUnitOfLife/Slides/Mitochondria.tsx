import ParaSeparator from "@/components/Shared/ParaSeparator";

const Mitochondria = () => {
  return (
    <div>
      <h3 className="text-2xl text-blue-500">8.5.4 Mitochondria</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>
          Mitochondria (sing.: mitochondrion), unless specifically stained, are
          not easily visible under the microscope.
        </p>
        <p>
          The number of mitochondria per cell is variable depending on the
          physiological activity of the cells.
        </p>
        <p>
          In terms of shape and size also, considerable degree of variability
          is observed.
        </p>
        <p>
          Typically it is sausage-shaped or cylindrical having a diameter of
          0.2-1.0µm (average 0.5µm) and length 1.0-4.1µm.
        </p>
        <p>
          Each mitochondrion is a double membrane-bound structure with the
          outer membrane and the inner membrane dividing its lumen distinctly
          into two aqueous compartments, i.e., the outer compartment and the
          inner compartment.
        </p>
        <p>
          The inner compartment is filled with a dense homogeneous substance
          called the matrix.
        </p>
        <p>
          The outer membrane forms the continuous limiting boundary of the
          organelle.
        </p>
        <p>
          The inner membrane forms a number of infoldings called the cristae
          (sing.: crista) towards the matrix (Figure 8.7).
        </p>
        <p>The cristae increase the surface area.</p>
        <p>
          The two membranes have their own specific enzymes associated with the
          mitochondrial function.
        </p>
        <p>Mitochondria are the sites of aerobic respiration.</p>
        <p>
          They produce cellular energy in the form of ATP, hence they are
          called ‘power houses’ of the cell.
        </p>
        <p>
          The matrix also possesses single circular DNA molecule, a few RNA
          molecules, ribosomes (70S) and the components required for the
          synthesis of proteins.
        </p>
        <p>The mitochondria divide by fission.</p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/mitochondria.png"
          alt="mitochondria"
          className="h-[300px]"
        />
        <p>
          <strong>Figure 8.7</strong> Structure of mitochondrion (Longitudinal
          section)
        </p>
      </div>
    </div>
  );
};

export default Mitochondria;
