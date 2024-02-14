import UploadCard from "@/components/common/Card/UploadCard";

export default function EditAvatar() {
  return (
    <div className="border border-gray-30 rounded-lg">
      <UploadCard
        className="py-4"
        title="Sube una nueva foto de perfil"
        subtitle="PNG o JPG (max. 800x400px)"
        name="avatar"
        accept=".jpg, .png"
      />
    </div>
  );
}
