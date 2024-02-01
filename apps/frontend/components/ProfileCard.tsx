import { SanityImageAssetDocument } from 'next-sanity';
import Image from 'next/image';

type ProfileCardProps = {
    name: string;
    role: string;
    image: SanityImageAssetDocument;
};

const ProfileCard = ({ image, name, role }: ProfileCardProps) => {
    return (
        <div className="w-72 text-center max-w-72 pt-11 px-6 items-center flex flex-col ">
            <Image
                src={image.url}
                sizes="(max-width: 800px) 100vw, 400px"
                width={150}
                height={150}
                placeholder="blur"
                blurDataURL={image.metadata.lqip}
                alt="Profile picture"
                style={{ borderRadius: '50%' }}
            />
            <div className="font-bold pt-4"> {name}</div>
            <div className="font-normal text-sm"> {role}</div>
        </div>
    );
};
export default ProfileCard;
