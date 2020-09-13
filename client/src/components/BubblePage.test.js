import React from "react";
import { render, screen, waitFor,fireEvent } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchBubbles as mockFetchBubbles} from "../api/fetchBubbles"


jest.mock("../api/fetchBubbles.js")

test("Fetches data and renders the bubbles", async () => {
  mockFetchBubbles.mockResolvedValueOnce(colors);
    const { findByText } = render(<BubblePage />);
      findByText("Bubbles");
      findByText("ColorList");
});


const colors = {
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff"
        },
        id: 1
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc"
        },
        id: 2
      },
      {
        color: "aqua",
        code: {
          hex: "#00ffff"
        },
        id: 3
      }
    ]
}