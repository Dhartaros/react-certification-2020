import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/Auth';
import VideoThumbnail from '../../../components/Video/VideoThumbnail.component';

describe("VideoThumbnail", () => {
    it("renders a video thumbnail with the correct info", () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <VideoThumbnail id="id123" title="title" description="description" thumbnail="https://i.ytimg.com/vi/32FB-gYr49Y/mqdefault.jpg" />
                </AuthProvider>
            </BrowserRouter>
        );
        
        expect(screen.getByTitle("title").style.length); // 1 means it has a background image
        expect(screen.getByText("title").tagName).toBe("H2");
        expect(screen.getByText("description").tagName).toBe("P");
        expect(screen.getAllByRole("button")[1].textContent).toBe("Login to add to your favorites");
    });

    it("renders a video thumbnail without a thumbnail", () => {
        render(
            <BrowserRouter>
                <AuthProvider>
                    <VideoThumbnail id="id456" title="no thumbnail" description="description" thumbnail="https://i.ytimg.com/vi/32FB-gYr49Y/broken_link.jpg" />
                </AuthProvider>
            </BrowserRouter>
        );

        expect(screen.getByTitle("no thumbnail").style.length); // 0 means it has no background image
        expect(screen.getByText("no thumbnail").tagName).toBe("H2");
        expect(screen.getByText("description").tagName).toBe("P");
        expect(screen.getAllByRole("button")[1].textContent).toBe("Login to add to your favorites");
    });
});