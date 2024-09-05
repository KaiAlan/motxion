
export type SidebarNavItemType = {
    title: string;
    items: {
        title: string;
        href: string;
        disabled?: boolean;
    }[];
};

export type MainNavbarItemsType = {
    title: string;
    href: string;
    disabled?: string;
}
