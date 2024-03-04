import TextField from "@/components/common/TextField";
import { TalentFull } from "@/types/Talent";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useFormContext } from "react-hook-form";

export default function EditSocialNetworks({
  talent,
}: {
  talent?: TalentFull;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-4">
      <TextField
        fullwidth
        defaultValue={talent?.linkedin_url}
        label="Link de LinkedIn"
        placeholder="https://example.com/username"
        inputProps={register("linkedinUrl")}
        {...getErrorMessage(errors, "linkedinUrl")}
      />
      <TextField
        fullwidth
        defaultValue={talent?.github_url}
        label="Link de GitHub"
        placeholder="https://example.com/username"
        inputProps={register("githubUrl")}
        {...getErrorMessage(errors, "githubUrl")}
      />
    </div>
  );
}
