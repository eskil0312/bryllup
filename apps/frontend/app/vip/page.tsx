import ProfileCard from '@/components/ProfileCard';
import { client } from '@/sanity/client';
import { SanityImageAssetDocument, groq } from 'next-sanity';

type VipPageType = {
    vipContent: {
        name: string;
        role: string;
        image: {
            asset: SanityImageAssetDocument;
        };
    }[];
};
const vipPageGroq = groq`*[_type == "vipPage"][0]{
    ...,
    vipContent[]{
      ...,
      image {
        asset -> {
          ...,
          metadata
        }
      }
    }
  }`;

export default async function VipPage() {
    const data = await client.fetch<VipPageType>(vipPageGroq, {
        next: { revalidate: 60 },
    });
    return (
        <div className="max-w-2xl mx-auto pt-8 pb-20">
            <div className="flex justify-center flex-wrap">
                {data.vipContent.map((data, index) => (
                    <ProfileCard
                        key={`${index}-profile`}
                        image={data.image.asset}
                        name={data.name}
                        role={data.role}
                    />
                ))}
            </div>
        </div>
    );
}
