import { Metadata } from "next";
// import { getMetadataDictionary } from "@/app/metaDictionaries";

import React from "react";

// // 添加这个函数来预生成静态页面
// export function generateStaticParams() {
//     return [
//         { lang: 'en' },
//         { lang: 'zh-CN' },
//         { lang: 'zh-TW' },
//         { lang: 'ja' },
//         { lang: 'ko' },
//         { lang: 'fr' },
//         { lang: 'de' },
//         { lang: 'es' },
//         { lang: 'it' },
//         { lang: 'ru' },
//         { lang: 'pt' },
//         { lang: 'nl' },
//         { lang: 'pl' },
//         { lang: 'tr' },
//         { lang: 'ar' },
//         { lang: 'he' },
//         { lang: 'da' },
//         { lang: 'sv' },
//         { lang: 'fi' },
//         { lang: 'el' },
//         { lang: 'hu' },
//         { lang: 'no' },
//         { lang: 'uk' },
//         { lang: 'zh' }
//     ]
// }



// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const resolvedParams = await params;
//     const dict = await getMetadataDictionary(resolvedParams.lang);

//     const pathname = 'academic-audio-transcription';
//     console.log('[generateMetadata111] Current path from pathname:', pathname);

//     const ret = {
//         title: dict.metadata.tools[pathname]?.title,
//         description: dict.metadata.tools[pathname]?.description,
//         keywords: dict.metadata.tools[pathname]?.keywords,
//     };
//     console.log('[generateMetadata111] Current path from pathname:', ret);

//     return ret;
// }

type Props = {
    children: React.ReactNode
    params: Promise<{ lang: string }>
  }



  export default async function ToolLayout(props: Props) {
    const params = await props.params;
    const { children } = props
    return (
        <>
        { children }
        </>
    );
}
