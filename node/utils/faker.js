import { Faker, en_US, pt_BR } from "@faker-js/faker";

export const faker = new Faker({
  locale: [pt_BR, en_US],
});