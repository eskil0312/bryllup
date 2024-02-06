import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@sanity/types';
import clsx from 'clsx';
import { SanityImageAssetDocument } from 'next-sanity';
import Image from 'next/image';

type ImageTextBlockProps = {
    indexInList: number;
    imageAsset: SanityImageAssetDocument;
    content: PortableTextBlock;
    topPadding?: boolean;
};

const ImageTextBlock = ({ indexInList, imageAsset, content, topPadding }: ImageTextBlockProps) => {
    return (
        <div
            className={clsx(
                'flex flex-col-reverse overflow-hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-16 ',
                { ['pt-16 ']: topPadding },
            )}
        >
            <div className="flex flex-col mt-6 lg:max-w-xl px-8">
                <PortableText value={content} />
            </div>
            <div className="lg:px-8 " style={indexInList % 2 ? { gridRow: '1' } : undefined}>
                <div className="relative h-60 w-screen overflow-hidden sm:h-80 lg:ml-0 lg:h-96 lg:w-full ">
                    <Image
                        src={imageAsset.url}
                        sizes="(max-width: 800px) 100vw, 400px"
                        placeholder="blur"
                        fill
                        blurDataURL={imageAsset.metadata.lqip}
                        alt="Front page wedding image"
                        className="lg:rounded-3xl "
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageTextBlock;
