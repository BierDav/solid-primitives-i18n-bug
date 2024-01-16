// @refresh reload
import { Suspense } from 'solid-js';
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from 'solid-start';
import App from './App';

export default function Root() {
  return (
    <Html>
      <Head>
        <Title>CTOnline</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'anonymous'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Body>
        <ErrorBoundary>
          <Suspense>
            <App />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
