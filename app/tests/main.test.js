import { test } from "@jest/globals";
import {
  showLoader,
  hideLoader,
  deleteArticles,
  fetchArticles,
} from "../src/Redux/actions";

test("redux should return correct types", () => {
  expect(showLoader().type).toBe("APP/SHOW_LOADER");
  expect(hideLoader().type).toBe("APP/HIDE_LOADER");
  expect(deleteArticles().type).toBe("ARTICLES/DELETE_ARTICLES");
});
