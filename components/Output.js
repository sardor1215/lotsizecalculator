export default function Output() {
  return (
    <div className="grid grid-cols-1">
      <div className="border-b pb-2">
        <p className="text-4xl">Results</p>
      </div>
      <div className="border-b pb-2">
        <p className="">Amount at Risk</p>
        <p>0 USD</p>
      </div>
      <div className="border-b pb-2">
        <p className="">Position Size(units)</p>
        <p>0 </p>
      </div>
      <div className="border-b pb-2">
        <p className="">Standard Lots</p>
        <p>0.01</p>
      </div>
      <div className="border-b pb-2">
        <p className="">Mini Lots</p>
        <p>0.1 </p>
      </div>
      <div className="border-b pb-2">
        <p className="">Micro Lots</p>
        <p>1</p>
      </div>
    </div>
  );
}
