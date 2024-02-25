import CustomFieldSetRadio from "@/components/common/Container/CustomFieldSetRadio";
import TextField from "@/components/common/TextField";
import { TalentFull } from "@/types/Talent";

export default function EditSocialNetworks({ talent }: { talent: TalentFull }) {
  return (
    <div className="flex flex-col gap-4">
      <TextField
        fullwidth
        defaultValue={talent?.linkedin_url}
        label="Link de LinkedIn"
        placeholder="https://example.com/username"
      />
      <TextField
        fullwidth
        defaultValue={talent?.github_url}
        label="Link de GitHub"
        placeholder="https://example.com/username"
      />
    </div>
  );
}
