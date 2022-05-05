import {Navigation} from "./Navigation";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    component: Navigation,
    title: 'TabButton',
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args}/>

export const Default = Template.bind({});
Default.args = {}