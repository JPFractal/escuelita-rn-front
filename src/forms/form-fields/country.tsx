import Select from "@/components/common/Select.tsx";
import useTalents from "@/hooks/useTalents";
import { CityDto } from "@/types/Dtos/CountryDto";
import { getErrorMessage } from "@/utils/get-message-errors";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function FormFieldsCountry() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();


  const { metadata } = useTalents();

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [availableCities, setAvailableCities] = useState<CityDto[]>([]);  
  const handleChangeCountry = (e: any) => {
    let select = e.target as HTMLSelectElement;
    let countryId = select.value;
    setSelectedCountry(countryId);
    setAvailableCities(metadata.cities.filter(city => city.countryId == Number(countryId)));
    setSelectedCity("");
    setValue("cityId", "")
  }
  
  const handleChangeCity = (e: any) => {
    let select = e.target as HTMLSelectElement;
    let cityId = select.value;
    setSelectedCity(cityId);
  }
  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <Select
        className="col-span-12"
        name="pais"
        label="País"
        placeholder="País de residencia"
        fullwidth
        options={metadata?.countries}
        value={selectedCountry}
        onInput={handleChangeCountry}
        inputProps={register("countryId")}
        {...getErrorMessage(errors, "countryId")}
      />
      <Select
        className="col-span-12"
        name="ciudad"
        label="Ciudad"
        placeholder="Ciudad de residencia"
        fullwidth
        onInput={handleChangeCity}
        value={selectedCity}
        options={availableCities}
        inputProps={register("cityId")}
        {...getErrorMessage(errors, "cityId")}
      />
    </div>
  );
}
