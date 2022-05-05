import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Quiz} from "./Quiz";

export default {
    component: Quiz,
    title: 'Quiz',
} as ComponentMeta<typeof Quiz>

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args}/>

export const Default = Template.bind({});
Default.args = {}