import ParaSeparator from "@/components/Shared/ParaSeparator";

const WhatIsACell = () => {
  return (
    <div>
      <h3 className="text-2xl">What is a Cell?</h3>
      <div className="h-4"></div>
      <div className="space-y-2">
        <p>Unicellular organisms are capable of:</p>
        <ol className="list-decimal pl-6">
          <li>independent existence</li>
          <li>performing the essential functions of life</li>
        </ol>
        <p>
          Anything less than a complete structure of a cell does not ensure
          independent living.
        </p>
        <p>
          Hence, cell is the fundamental structural and functional unit of all
          living organisms.
        </p>
        <ParaSeparator />
        <p>Antonie Von Leeuwenhoek first saw and described a live cell.</p>
        <p>Robert Brown later discovered the nucleus.</p>
        <p>
          The invention of the microscope and its improvement leading to the
          electron microscope revealed all the structural details of the cell.
        </p>
      </div>
    </div>
  );
};

export default WhatIsACell;
