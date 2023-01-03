/* eslint-disable @next/next/no-head-element */

import Header from "./Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
          <title>Bug Reproduction</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
