import {Component} from "react";
import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Box, Container, Grid, Typography} from "@mui/material";

interface LandingProps {}
interface LandingState {
    items: LandingItem[]
}

interface LandingItem {
    title: string
    text: string
}

const images: string[] = [
    "images/carousel001.jpeg",
    "images/carousel002.jpeg",
]

export class Landing extends Component<LandingProps, LandingState> {
    constructor(props: LandingProps) {
        super(props);
        this.state = {
            items: [
                { title: "Item 1", text: "hi"},
            ]
        }
    }

    render() {
        return (
            <Box>
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: "fade",
                        rewind: true,
                        autoWidth: true,
                        fixedHeight: 400,
                        cover: true,
                        arrows: false,
                        paginationDirection: 'ttb',
                        autoplay: true,
                        drag: false,
                    }}
                >
                    {images.map((url, idx) => (
                        <SplideSlide key={idx}>
                            <img src={url}/>
                        </SplideSlide>
                    ))}
                </Splide>

            </Box>
        )
    }
}