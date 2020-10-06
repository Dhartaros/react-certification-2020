import React from "react";
import { render, screen } from "@testing-library/react";
import Video from '../../../components/Video/Video.component';

describe("Video", () => {
    it("renders a video", () => {
        const videoId = "nmXMgqjQzls";
        render(<Video id={videoId} />);

        expect(screen.getByTitle("video").src).toBe(`https://www.youtube.com/embed/${videoId}`);
    });
});