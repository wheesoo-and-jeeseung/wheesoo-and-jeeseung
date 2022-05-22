import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {Box} from "@mui/material";

export interface LandingProps {}

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

export const Landing = () => {
    const shuffledImages = images
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    return (
        <Box>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    type: "fade",
                    rewind: true,
                    autoWidth: true,
                    fixedHeight: 460,
                    cover: true,
                    arrows: false,
                    paginationDirection: 'ttb',
                    autoplay: true,
                    drag: false,
                }}
            >
                {shuffledImages.map((url, idx) => (
                    <SplideSlide key={idx}>
                        <img alt="" src={url}/>
                    </SplideSlide>
                ))}
            </Splide>
        </Box>
    )
}