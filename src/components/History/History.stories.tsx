import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {History} from "./History";

export default {
    component: History,
    title: 'History',
} as ComponentMeta<typeof History>

const Template: ComponentStory<typeof History> = (args) => <History {...args}/>

export const Default = Template.bind({});
Default.args = {}