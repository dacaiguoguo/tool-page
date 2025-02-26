import { getDictionary } from "@/app/dictionaries";
import React from "react";
import Header from "@/components/Header";
import TransFooter from "@/components/TransFooter";
import TryForFreeButton from "@/components/TryForFreeButton";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

async function getPageData(lang: string) {
  const dict = await getDictionary(lang);
  return {
    dict,
    lang,
  };
}

export default async function ToolGroupLayout(props: Props) {
  const { children, params } = props;
  const resolvedParams = await params;
  const { dict, lang } = await getPageData(resolvedParams.lang);

  return (
    <>
      <Header currentPathname="" dict={dict} lang={lang} />
      <main className="container mx-auto px-4 py-8">
        {children}
        <div className="text-center mt-8">
          <TryForFreeButton text={dict.tryForFree} />
        </div>
      </main>
      <TransFooter pathname="" dict={dict} lang={lang} />
    </>
  );
}
