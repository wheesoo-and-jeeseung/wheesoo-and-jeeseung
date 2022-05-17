import React, { useEffect } from "react";
import useWindowDimensions from "../../utils/utils";
import {renderToString} from "react-dom/server";
import {Avatar, Box, Button, Divider, Grid, Icon, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export const DynamicMap = () => {
    const { height, width } = useWindowDimensions();

    const lat = 37.4576801
    const lng = 126.9538942

    useEffect(() => {
        const initMap = () => {
            const latlng = new naver.maps.LatLng(lat, lng)
            const map = new naver.maps.Map("map", {
                center: latlng,
                zoom: 17,
            });
            const marker = new naver.maps.Marker({
                position: latlng,
                map: map,
                icon: {
                    url: 'images/marker.png',
                    size: new naver.maps.Size(66, 61),
                }
            })

            const contents = renderToString((
                <>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Icon component="a" href={`nmap://route?dlat=${lat}&dlng=${lng}&dname=교수회관`}><img src="images/icon_navermap.png"/></Icon>
                        <Icon component="a" href={`kakaomap://route?ep=${lat},${lng}`}><img src="images/icon_kakaomap.png"/></Icon>
                        <Icon component="a" href={`tmap://route?goalname=교수회관&goaly=${lat}&goalx=${lng}`}><img src="images/icon_tmap.png"/></Icon>
                    </Stack>
                    <Typography>서울시 관악구 관악로1 서울대학교 교수회관(65동)</Typography>
                </>
            ))
            const infowindow = new naver.maps.InfoWindow({
                content: contents
            })
            infowindow.open(map, marker)
        }
        initMap()
    }, [])

    const mapStyle = {
        width: width,
        height: height - 64,
    }

    return (
        <div id="map" style={mapStyle}></div>
    )
}