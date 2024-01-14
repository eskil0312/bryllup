import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@sanity/types';
import { SanityImageAssetDocument } from 'next-sanity';
import Image from 'next/image';

type ImageTextBlockProps = {
    indexInList: number;
    imageAsset: SanityImageAssetDocument;
    content: PortableTextBlock;
};

const ImageTextBlock = ({ indexInList, imageAsset, content }: ImageTextBlockProps) => {
    return (
        <div className="pt-16 flex flex-col-reverse items-center overflow-hidden lg:grid lg:grid-cols-2 lg:gap-12 ">
            <div className="flex flex-col mt-6 lg:max-w-xl">
                <PortableText value={content} />
            </div>
            <div
                className="relative h-60 w-screen overflow-hidden sm:h-80 lg:ml-0 lg:h-96 lg:w-full"
                style={indexInList % 2 ? { gridRow: '1' } : undefined}
            >
                <Image
                    src={imageAsset.url}
                    sizes="(max-width: 800px) 100vw, 400px"
                    placeholder="blur"
                    fill
                    blurDataURL={imageAsset.metadata.lqip}
                    alt="Front page wedding image"
                    style={{ objectFit: 'cover', borderRadius: '20px' }}
                />
            </div>
        </div>
    );
};

export default ImageTextBlock;
