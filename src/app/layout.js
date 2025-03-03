
// src/app/layout.js
import './styles/global.css'; // Adjust path as needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}