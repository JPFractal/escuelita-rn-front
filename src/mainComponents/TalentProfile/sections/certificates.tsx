"use client";

import FileCard from "@/components/common/Card/FileCard";
import UploadCard from "@/components/common/Card/UploadCard";
import ModalContent from "@/components/common/Container/ModalContent";
import Modal from "@/components/common/Modal";
import useToogle from "@/hooks/useToogle";
import Certificate from "@/types/Certificate";
import Image from "next/image";
import { useState } from "react";
import AddCertificate from "@/forms/form-fields/certificate";

export default function TalentProfileCertificates({
  items = [],
}: {
  items: Certificate[];
}) {
  const [src, setSRC] = useState<string>(items[0].src);
  const { flag, on, off } = useToogle();

  const {
    flag: certificateFlag,
    on: onAddCertificate,
    off: onCloseCertificate,
  } = useToogle();

  const handleClick = (_src: string | undefined) => {
    on();
    setSRC(_src ?? "");
  };

  return (
    <section className="col-span-12 flex gap-4">
      {items.map((item) => (
        <FileCard
          src={item.src}
          name="Certificado Frontend"
          className="flex-1 cursor-pointer"
          key={`certificate-${item.id}`}
          onClick={() => handleClick(item.src)}
        />
      ))}
      <UploadCard className="flex-1 bg-gray-50" onClick={onAddCertificate} />

      <Modal open={flag} onClose={off}>
        <Image src={src} alt="certificate detailed" width={480} height={200} />
      </Modal>

      <Modal open={certificateFlag} onClose={onCloseCertificate}>
        <ModalContent
          onCancel={onCloseCertificate}
          title="Agrega un archivo"
          subtitle="Sube tu nuevo certificado, diploma o algún archivo que respalde tus aptitudes."
          confirmButtonText="Subir"
        >
          <AddCertificate />
        </ModalContent>
      </Modal>
    </section>
  );
}
