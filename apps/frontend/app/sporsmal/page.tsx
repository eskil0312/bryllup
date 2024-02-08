import { client } from '@/sanity/client';
import { SanityImageAssetDocument, groq } from 'next-sanity';
import { PortableTextBlock } from '@sanity/types';
import ImageTextBlock from '@/components/ImageTextBlock';

type QuestionsPageProps = {
    contentList: {
        content: PortableTextBlock;
        image: {
            asset: SanityImageAssetDocument;
        };
    }[];
};

const questionsPageGroq = groq`*[_type == "questionsPage"][0]{
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

export default async function SleeppverPage() {
    const page = await client.fetch<QuestionsPageProps>(questionsPageGroq, {
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
