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
import useAuth from "@/hooks/useAuth";

export default function TalentProfileCertificates({
  items = [],
}: {
  items: Certificate[];
}) {
  const { isAdmin } = useAuth();

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
    <section className="col-span-12 flex overflow-auto pb-2">
      {isAdmin() && (
        <div className="shrink-0 w-1/3">
          <UploadCard
            className="flex-1 bg-gray-50 h-full mr-4"
            onClick={onAddCertificate}
          />
        </div>
      )}

      {items.map((item) => (
        <div key={`certificate-${item.id}`} className="shrink-0 w-1/3">
          <FileCard
            src={item.src}
            name={`Certificado en ${item.name}`}
            className="cursor-pointer mr-4"
            onClick={() => handleClick(item.src)}
          />
        </div>
      ))}

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
