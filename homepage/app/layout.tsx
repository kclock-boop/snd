import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SND | 항공·방산 정밀가공 파트너',
  description:
    'SND는 항공·방산 부품 가공과 치공구 제작을 수행하는 정밀 제조 파트너입니다. 핵심 공정, 품질 체계, 스마트 제조 확장 방향을 소개합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
