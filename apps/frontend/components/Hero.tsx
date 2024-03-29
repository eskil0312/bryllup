import { SanityImageAssetDocument } from 'next-sanity';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import clsx from 'clsx';

const inter = Playfair_Display({ weight: '400', subsets: ['latin'] });
type HeroProps = {
    image: {
        asset: SanityImageAssetDocument;
    };
    title: string;
    subTitle?: string;
};

const Hero = ({ image, title, subTitle }: HeroProps) => {
    return (
        <div className="h-96 relative">
            <Image
                src={image.asset.url}
                sizes="(max-width: 800px) 100vw, 800px"
                placeholder="blur"
                fill
                blurDataURL={image.asset.metadata.lqip}
                alt="Front page wedding image"
                style={{ objectFit: 'cover' }}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden rounded-t-3xl bg-slate-50 opacity-10"></div>
            <div
                className={clsx(
                    'absolute left-0 right-0 mr-auto ml-auto w-120 text-white text-center top-24',
                    inter.className,
                )}
            >
                <h1 className={'text-5xl md:text-6xl '}>{title}</h1>
                <h3 className="text-xl">{subTitle}</h3>
            </div>
        </div>
    );
};
export default Hero;
