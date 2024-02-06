import { client } from '@/sanity/client';
import { SanityImageAssetDocument, groq } from 'next-sanity';
import { PortableTextBlock } from '@sanity/types';
import ImageTextBlock from '@/components/ImageTextBlock';

type AboutUsPageType = {
    contentList: {
        content: PortableTextBlock;
        image: {
            asset: SanityImageAssetDocument;
        };
    }[];
};

const aboutUsGroq = groq`*[_type == "aboutUsPage"][0]{
  ...,
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

export default async function AboutUs() {
    const page = await client.fetch<AboutUsPageType>(aboutUsGroq, {
        next: { revalidate: 60 },
    });
    return (
        <main>
            {page.contentList.map((contentListItem, index) => (
                <ImageTextBlock
                    content={contentListItem.content}
                    imageAsset={contentListItem.image.asset}
                    indexInList={index}
                    key={`img-block-${index}`}
                    topPadding={index !== 0}
                />
            ))}
        </main>
    );
}
