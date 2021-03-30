import { calculateBiorhythms } from "./calculation";

it("calculate the biorhythm", () => {
  const { physical } = calculateBiorhythms("2000-12-08", "2021-03-27");
  expect(physical).toBeCloseTo(0.817);
});

it("calculate the biorhythm", () => {
  const { emotional } = calculateBiorhythms("2000-12-08", "2021-03-27");
  expect(emotional).toBeCloseTo(-0.9749);
});

it("calculate the biorhythm", () => {
  const { intellectual } = calculateBiorhythms("2000-12-08", "2021-03-27");
  expect(intellectual).toBeCloseTo(-0.8660);
});
