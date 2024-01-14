import Hero from '@/components/Hero';
import { client } from '@/sanity/client';
import { PortableText } from '@portabletext/react';
import { SanityImageAssetDocument, groq } from 'next-sanity';
import { PortableTextBlock } from '@sanity/types';
import ImageTextBlock from '@/components/ImageTextBlock';

type FrontPageType = {
    heroBlock: {
        title: string;
        subTitle?: string;
        image: {
            asset: SanityImageAssetDocument;
        };
    };
    introBlock: {
        title: string;
        body: PortableTextBlock;
    };
    contentList: {
        content: PortableTextBlock;
        image: {
            asset: SanityImageAssetDocument;
        };
    }[];
};

const frontPageGroq = groq`*[_type == "frontPage"][0]{
  ...,
  heroBlock{
    ...,
    image {
      asset -> {
        ...,
        metadata
      }
    }
  },
  contentList[]{
    ...,
    image {
      asset -> {
        ...,
        metadata
      }
    }
  }
}`;

export default async function Home() {
    const page = await client.fetch<FrontPageType>(frontPageGroq);
    return (
        <main>
            <Hero
                image={page.heroBlock.image}
                title={page.heroBlock.title}
                subTitle={page.heroBlock.subTitle}
            />
            <div className="flex p-8 flex-col">
                <div className="flex flex-col items-center pt-14">
                    <h2 className="text-2xl md:text-3xl">{page.introBlock.title}</h2>
                    <div className="m-auto max-w-2xl text-center pt-8">
                        <PortableText value={page.introBlock.body} />
                    </div>
                </div>
                {page.contentList.map((contentListItem, index) => (
                    <ImageTextBlock
                        content={contentListItem.content}
                        imageAsset={contentListItem.image.asset}
                        indexInList={index}
                        key={`img-block-${index}`}
                    />
                ))}
            </div>
        </main>
    );
}