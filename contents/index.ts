import { maskCursorPageContent } from "./mask-cursor"
import { textLiftPageContent } from "./text-lift"
import { trailingCursorPageContent } from "./trailing-cursor"
import { wavyLinePageContent } from "./wavy-line"
import { wavyWordPageContent } from "./wavy-word"
import { contentType } from "@/types/content"

export const pageContent: contentType[] = [
    {
        slugName: 'mask-cursor',
        slugContent: maskCursorPageContent,
        contentTitle: 'Mask Cursor',
        contentDescription: 'A Mask Cursor Effect that reveals hidden text behind build With Nextjs and Framer Motion',
        contentTag: ["Mask Reveal", "Cursor Effect"]
    },
    {
        slugName: 'wavy-word',
        slugContent: wavyWordPageContent,
        contentTitle: 'Wavy Word',
        contentDescription: 'A wavy text effect with staggered transitions, perfect for captivating headlines or dynamic displays.',
        note: 'When using the WavyWord component, be sure to specify a height in the className to ensure the wavy effect displays correctly.',
        contentTag: ["Wavy Word", "Text Effect", "Hover Effect"]
    },
    {
        slugName: 'wavy-line',
        slugContent: wavyLinePageContent,
        contentTitle: 'Wavy Line',
        contentDescription: 'A wavy Line effect with staggered transitions, perfect for captivating Headlines, Quotes or dynamic displays.',
        note: 'To achieve the best effect, make sure to set an appropriate height in the className to accommodate the animated movement of the words.',
        contentTag: ["Wavy Line", "Text Effect", "Hover Effect"]
    },
    {
        slugName: 'text-lift',
        slugContent: textLiftPageContent,
        contentTitle: 'Text Lift',
        contentDescription: 'A Hover Lift effect animates each character of the text, creating a visual where letters lift upward on hover.',
        contentTag: ["Text Lift", "Hero Section", "Text Effect", "Hover Effect"]
    },
    {
        slugName: 'trailing-cursor',
        slugContent: trailingCursorPageContent,
        contentTitle: 'Traailing Cursor',
        contentDescription: 'A customizable trailing cursor effect that follows the mouse position with a smooth transition.',
        note: 'Adjust the posX and posY values to customize the cursor\'s trailing effect relative to the mouse position. Default values are set to 500 and 300, but feel free to modify them by passing them as parameters to the component.',
        contentTag: ["Trailing Cursor", "Cursor Effect", "Cursor Follow"]
    },
]