"use client";

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Adjust based on your icon library
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import FontAwesome's IconDefinition type
import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

interface ListItemProps {
    icon: IconDefinition; // Use IconDefinition type for FontAwesome icons
    name: string;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    icon, name, href
}) => {
    const router = useRouter();
    const { user } = useUser();
    const authModal = useAuthModal();

    const onClick = () => {
        if (!user) {
            authModal.onOpen();
        } else {
            router.push(href);
        }
    };

    return (
        <div 
            onClick={onClick}
            className="
                relative
                group
                flex
                items-center
                rounded-md
                overflow-hidden
                gap-x-1
                bg-transparent
                transition
                p-1
                cursor-pointer
            "
        >
            <div className="
                relative
                min-h-[50px]
                min-w-[50px]
                flex
                hover:bg-neutral-500/35
                rounded-full
                items-center
                p-2
                justify-center
            ">
                <FontAwesomeIcon
                    icon={icon}
                    className="text-4xl text-black"
                />
            </div>
            <p className="font-bold text-black ml-2 truncate py-3">
                {name}
            </p>
        </div>
    );
};

export default ListItem;
