import { filterMovies } from "./filterMovies";
import { movieArray } from "./__mocks__/movieArray";

describe("filterMovies", () => {
  test("basic filter", () => {
    expect(filterMovies(movieArray, [8, 10], [18])).toStrictEqual([
      {
        genres: [53, 18],
        id: 484468,
        overview:
          "In the near future, a French submarine finds itself in a crisis situation.",
        posterPath: "/fDyCvNWaFkkrgf0QjhHqpCGVc8p.jpg",
        title: "The Wolf's Call",
        voteAverage: 8.2
      }
    ]);
  });
  test("basic filter multiple genres", () => {
    expect(filterMovies(movieArray, [8, 10], [18, 53])).toStrictEqual([
      {
        genres: [53, 18],
        id: 484468,
        overview:
          "In the near future, a French submarine finds itself in a crisis situation.",
        posterPath: "/fDyCvNWaFkkrgf0QjhHqpCGVc8p.jpg",
        title: "The Wolf's Call",
        voteAverage: 8.2
      }
    ]);
  });
  test("basic filter empty genres", () => {
    expect(filterMovies(movieArray, [0, 10], [])).toStrictEqual(movieArray);
  });

  test("basic filter no rating", () => {
    expect(filterMovies(movieArray, [0, 0], [])).toStrictEqual([]);
  });

  test("basic filter wrong rating order", () => {
    expect(filterMovies(movieArray, [8, 4], [])).toStrictEqual([]);
  });
});
