import React from 'react';
import { Dday } from "./Dday";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    component: Dday,
    title: 'Dday',
} as ComponentMeta<typeof Dday>;

const Template: ComponentStory<typeof Dday> = (args) => <Dday {...args}/>

export const Default = Template.bind({});
Default.args = {
    date: new Date("2022-08-20T16:30:00+0900")
}