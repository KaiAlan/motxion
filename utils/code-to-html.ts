import { createHighlighter, makeSingletonHighlighter } from 'shiki';


const getHighlighter = makeSingletonHighlighter(createHighlighter);

export const codeToHtml = async ({ code, language }:{code: string, language: string}) => {

  if (!code || !language) {
    console.error('Invalid code or language provided.');
    return '';
  }

  try {
    const highlighter = await getHighlighter({
      themes: ['github-light', 'github-dark', 'tokyo-night', 'catppuccin-latte'],
      langs: ['tsx', 'jsx', 'typescript', 'javascript', 'json', 'shell'],
    });

    return highlighter.codeToHtml(code, {
      lang: language,
      themes: {
        dark: 'tokyo-night',
        light: 'catppuccin-latte',
      },
    });
  } catch (error) {
    console.error('Error highlighting code:', error);
    return '';
  }
};