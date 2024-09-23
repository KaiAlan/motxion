

export type InstructionType = {
    instruction: string;
    instructionCode?: string;
    language?: string;
    description?: string;
    fileName?: string;
};

export type tocType = {
    id: string;
    href: string
}

export type slugContentType = {
    toc: tocType[];
    installationInstructions: InstructionType[];
    previewCode: string;
    previewComponent: () => JSX.Element;
}

export type contentType = {
    slugName: string;
    slugContent: slugContentType
    contentTitle: string
    contentDescription: string
    contentTag: string[]
    note?: string
}