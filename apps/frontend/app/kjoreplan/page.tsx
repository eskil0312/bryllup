import { client } from '@/sanity/client';
import { SanityImageAssetDocument, groq } from 'next-sanity';
import { PortableTextBlock } from '@sanity/types';
import ImageTextBlock from '@/components/ImageTextBlock';

type ProgramPageProps = {
    contentList: {
        content: PortableTextBlock;
        image: {
            asset: SanityImageAssetDocument;
        };
    }[];
};

const programPageGroq = groq`*[_type == "programPage"][0]{
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

export default async function ProgramPage() {
    const page = await client.fetch<ProgramPageProps>(programPageGroq, {
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
