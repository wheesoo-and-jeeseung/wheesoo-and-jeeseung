import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {LandingInfo} from "./LandingInfo";

export default {
    component: LandingInfo,
    title: 'LandingInfo',
} as ComponentMeta<typeof LandingInfo>

const Template: ComponentStory<typeof LandingInfo> = (args) => <LandingInfo {...args}/>

export const Default = Template.bind({});
Default.args = {}