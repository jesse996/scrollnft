'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider, createEmotionCache } from '@mantine/core';
import { useServerInsertedHTML } from 'next/navigation';
import { NotificationsProvider } from '@mantine/notifications';


export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  const myCache = createEmotionCache({
    key: 'mantine',
    prepend: false
  });

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS
      // emotionCache={myCache}
      >
        <NotificationsProvider>
          {children}
        </NotificationsProvider>
      </MantineProvider>
    </CacheProvider>
  );
}