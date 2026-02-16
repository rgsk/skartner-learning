const DifferentCellSizeAndShapes = () => {
  return (
    <div>
      <h3 className="text-2xl text-cyan-600">
        Different Cell Sizes and Shapes
      </h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>Cells differ greatly in size, shape and activities (Figure 8.1).</p>
        <p>
          For example, Mycoplasmas, the smallest cells, are only 0.3 mm in
          length while bacteria could be 3 to 5 µm.
        </p>
        <p>The largest isolated single cell is the egg of an ostrich.</p>
        <p>
          Among multicellular organisms, human red blood cells are about 7.0 µm
          in diameter.
        </p>
        <p>Nerve cells are some of the longest cells.</p>
        <p>Cells also vary greatly in their shape.</p>
        <p>
          They may be disc-like, polygonal, columnar, cuboid, thread like, or
          even irregular.
        </p>
        <p>The shape of the cell may vary with the function they perform.</p>
      </div>
      <div className="h-8"></div>
      <div className="flex flex-col items-center gap-4">
        <img
          src="/biology/different-shapes-of-cells-2.png"
          alt="different shapes of cells"
          className="h-[500px]"
        />
        <p>
          <strong>Figure 8.1</strong> Diagram showing different shapes of the
          cells
        </p>
      </div>
    </div>
  );
};

export default DifferentCellSizeAndShapes;
