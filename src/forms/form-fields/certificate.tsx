import UploadCard from "@/components/common/Card/UploadCard";

export default function AddCertificate() {
  return (
    <div className="border border-gray-30 rounded-lg">
      <UploadCard className="py-4" subtitle="PDF" accept=".pdf" name="certificate"/>
    </div>
  );
}
