import {Component} from "react";
import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Box, Container, Grid, Typography} from "@mui/material";
import useWindowDimensions from "../../utils/utils";

export interface LandingProps {}
export interface LandingState {}

const images: string[] = [
    "images/carousel001.jpg",
    "images/carousel002.jpg",
    "images/carousel003.jpg",
    "images/carousel005.jpg",
    "images/carousel006.jpg",
    "images/carousel007.jpg",
    "images/carousel008.jpg",
    "images/carousel009.jpg",
    "images/carousel010.jpg",
    "images/carousel011.jpg",
]

export const Landing = (props: LandingProps, state: LandingState) => {
    return (
        <Box>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    type: "fade",
                    rewind: true,
                    // width: width,
                    // height: height - 64,
                    autoWidth: true,
                    fixedHeight: 460,
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

// export class Landing extends Component<LandingProps, LandingState> {
//     constructor(props: LandingProps) {
//         super(props);
//         this.state = {
//             items: [
//                 { title: "Item 1", text: "hi"},
//             ]
//         }
//     }
//
//     render() {
//
//
//     }
// }