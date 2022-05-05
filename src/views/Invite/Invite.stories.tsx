import {Component} from "react";
import {ComponentStory} from "@storybook/react";
import {Invite} from "./Invite";

export default {
    component: Invite,
    title: "Invite",
}

const Template: ComponentStory<typeof Invite> = (args) => <Invite {...args}/>

export const Default = Template.bind({});
Default.args = {}