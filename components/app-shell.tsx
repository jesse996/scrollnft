'use client';

import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
} from '@mantine/core';
import Link from 'next/link';
import FootNav from './foot-nav';

export default function MyAppShell({
  children,
}: {
  children: React.ReactNode,
}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      // navbar={
      //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
      //     <Text>Application navbar</Text>
      //   </Navbar>
      // }
      // aside={
      //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
      //       <Text>Application sidebar</Text>
      //     </Aside>
      //   </MediaQuery>
      // }
      footer={
        <Footer height={60} p="md">
          <FootNav></FootNav>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Button component={Link} href='/' variant='subtle' size='lg' compact color={'dark'}>
              数字藏品</Button>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}