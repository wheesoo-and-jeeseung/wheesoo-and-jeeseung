import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Landing} from "./Landing";
import React from "react";

export default {
    component: Landing,
    title: 'Landing',
} as ComponentMeta<typeof Landing>

const Template: ComponentStory<typeof Landing> = (args) => <Landing {...args}/>

export const Default = Template.bind({});
Default.args = {}