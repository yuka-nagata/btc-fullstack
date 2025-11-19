import { render, screen } from "@testing-library/react";
import App from "../components/App";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, beforeEach } from "vitest";
import { vi } from "vitest";

describe("App", () => {
  // fetch をモック化（stub/spy）
  beforeEach(() => {
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );
  });

  test("Appの初期画面にSearchCountryボタンがある", async () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("AppのSearchCountryを押すと、検索画面が表示される", async () => {
    render(<App />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    const el = screen.getByText("Select Country");
    expect(el).toBeInTheDocument();
  });
});
