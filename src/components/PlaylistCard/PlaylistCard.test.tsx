import React from "react";
import { render, fireEvent, waitFor, RenderResult } from "@testing-library/react";
import PlaylistCard from "./PlaylistCard";

describe("Tests for Playlist card", () => {
    const defaultProps = {
        name: 'test',
        description: 'test description',
        external_urls: 'url_test',
        images: [],
        tracks: 1,
        id: '12312szdas'
    };

    const renderFilter = (
        props: { [key: string]: any } = {}
    ): RenderResult => {
        return render(
            <PlaylistCard {...defaultProps} {...props} />
        );
    }

    it("Should match snapshot", async () => {
        const { container } = renderFilter();

        expect(container).toMatchSnapshot();
    });
});
