import React from "react";
import {Header} from "./Header";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    component: Header,
    title: 'Header',
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>

export const Default = Template.bind({});
Default.args = {
    title: "휘수 ❤️ 지승"
}