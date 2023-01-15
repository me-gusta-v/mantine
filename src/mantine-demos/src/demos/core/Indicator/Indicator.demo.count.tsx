import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Avatar, Indicator, Flex } from '@mantine/core';

const code = `
import { Avatar, Indicator, Flex } from '@mantine/core';

function Demo() {
  return (
    <Flex gap={48}>
      <Indicator label={99} inline size={16}>
        <Avatar size="lg" src="./avatar.png"/>
      </Indicator>

      <Indicator label={100} inline size={16}>
        <Avatar size="lg" src="./avatar.png"/>
      </Indicator>

      <Indicator label={1000} overflowCount={999} inline size={16}>
        <Avatar size="lg" src="./avatar.png"/>
      </Indicator>
    </Flex>
  );
}
`;

function Demo() {
  return (
    <Flex gap={48}>
      <Indicator label={99} inline size={16}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
      <Indicator label={100} inline size={16}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
      <Indicator label={1000} overflowCount={999} inline size={16}>
        <Avatar
          size="lg"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        />
      </Indicator>
    </Flex>
  );
}

export const count: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
