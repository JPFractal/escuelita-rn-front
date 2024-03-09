import { CityDto } from "./Dtos/CountryDto";

export class FooDto {
    id: number | undefined;
    name: string | undefined;
}

export default interface RegisterMetadata {
    languages: FooDto[];
    languagesLevels: FooDto[];
    currency: FooDto[];
    countries: FooDto[];
    cities: CityDto[];
    technicalProfiles: FooDto[];
};
  