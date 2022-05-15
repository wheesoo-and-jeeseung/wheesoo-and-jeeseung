import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Landing, LandingProps} from "./Landing";
import React from "react";

export default {
    component: Landing,
    title: 'Landing',
}

const Template = (props: LandingProps) => <Landing {...props}/>

export const Default = Template.bind({});
// Default.props = {}