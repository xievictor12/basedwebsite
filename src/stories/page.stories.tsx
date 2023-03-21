import React from 'react';
import Page from "../components/page";
import {Meta, Story} from "@storybook/react";

export default {
  title: 'Page',
  component: Page,
};

export const Landing = () => <Page contentType="Landing"/>;
export const Bio     = () => <Page contentType="Bio"/>;
export const Music   = () => <Page contentType="Music"/>;
export const Blog    = () => <Page contentType="Blog"/>;
export const Contact = () => <Page contentType="Contact"/>;