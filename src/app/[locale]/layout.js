import "./globals.css";
import {Josefin_Sans} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata = {
  title: "HET SARL",
  description: "Site officiel de HET SARL",
};

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap'
})

export default async function RootLayout({ children,
  params: {locale} }) {
    const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </head>
      <body className={Josef.className}>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
