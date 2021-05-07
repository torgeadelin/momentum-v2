// Button.stories.tsx

import React from 'react';

import {Button} from 'components/button'

export const Primary: React.VFC<{}> = () => <Button primary label="Hello"/>;
export const Secondary: React.VFC<{}> = () => <Button label="Hello"/>;
export const Text: React.VFC<{}> = () => <Button label="Another text"/>;

const component = {
  title: 'Button',
  component: Button,
}

export default component;