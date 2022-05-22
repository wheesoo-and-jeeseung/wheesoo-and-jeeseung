import {Navigation} from "./Navigation";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    component: Navigation,
    title: 'Navigation',
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation/>

export const Default = Template.bind({});
Default.args = {}