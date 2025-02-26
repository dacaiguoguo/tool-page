修改app目录下有个[lang]文件夹，页面都在这里面 我需要用react-i18next 实现国际化支持 ，所有页面都是SSR的，注意layout里有hedader 和 footer 组件，page.tsx里直接就是main 页面内容，页面用到的字符串需要生成在 public/en/这样的目录里 区分不同国语言。
next.js 用15版本

export type PageProps = {
  params: Promise<{ lang: string }>
}

export async function getPageData(lang: string) {
  const dict = await getDictionary(lang)
  return { dict, lang }
}

// 定义页面组件
export default async function HomePage(props: PageProps) {
const params = await props.params;
const { dict, lang } = await getPageData(params.lang);
注意 页面PageProps 需要await，这是next 15的正确用法


工具页面在 app/[lang]/(toolgroup) 下面 有个公用的layout 
内容如下
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
      <main>
        {children}
        <TryForFreeButton text={dict.tryForFree} />
        </main>
      <TransFooter pathname="" dict={dict} lang={lang} />
    </>
  );
}

---
里面每个工具页面有自己单独的 layout文件 

