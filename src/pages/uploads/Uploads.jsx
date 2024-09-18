import UploadsTable from "../../components/uploads/UploadsTable";

export function Uploads() {
  return (
    <div className="p-5 w-full">
      <div className="text-left pl-4">
        <span className="text-2xl font-bold">Uploads</span>
      </div>

      <div className="mt-4">
        <UploadsTable />
      </div>
    </div>
  );
}

export default Uploads;
