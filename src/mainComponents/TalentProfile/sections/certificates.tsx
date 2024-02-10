"use client";
import FileCard from "@/components/common/Card/FileCard";
import UploadCard from "@/components/common/Card/UploadCard";

export default function TalentProfileCertificates() {
  return (
    <section className="col-span-12 flex gap-4">
      <FileCard name="Certificado Frontend" className="flex-1" />
      <FileCard name="Certificado Frontend" className="flex-1" />
      <UploadCard className="flex-1 bg-gray-50" />
    </section>
  );
}
