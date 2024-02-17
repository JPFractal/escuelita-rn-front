import RatingStars from "@/components/RatingStars";
import TextArea from "@/components/common/TextArea";
import TextField from "@/components/common/TextField";

export default function FormFieldsFeedback() {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <RatingStars name="score" formControl />
      </div>
      <TextArea
        className="col-span-12"
        label="Comentario"
        placeholder="Comentarios"
        name="comment"
      />
    </div>
  );
}
