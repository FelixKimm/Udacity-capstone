import { geoNamesFun, weatherBitFun, pixabayFun } from '../client/js/app.js'

describe("Test the geoNamesFun() function", () => {
    test("Testing the geoNamesFun() function", async () => {
          expect(geoNamesFun).toBeDefined();
    })});

describe("Test the WeatherBitFun() function", () => {
    test("Testing the WeatherBitFun() function", async () => {
            expect(weatherBitFun).toBeDefined();
    })});

describe("Test the pixabayFun() function", () => {
    test("Testing the pixabayFun() function", async () => {
          expect(pixabayFun).toBeDefined();
    })});