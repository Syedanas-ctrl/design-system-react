
import { LanguageCode } from '@/types/language';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useTrans = (namespace?: string) => {
  const { t: originalT, i18n } = useTranslation(namespace);

  const t = (key: string, options?: any) => {
    const processedKey = key.replace(/\s+/g, '_'); // Adjust based on your preprocessing logic
    try {
      return originalT(processedKey, options) as string;
    } catch (e) {
      console.error(`Translation key not found: ${key}`, e);
      const keyParts = key.replace(/_/g, ' ').replace(/-/g, ' ').split('.');
      return keyParts[keyParts.length - 1];
    }
  };

  const language = useMemo(() => {
    return Object.values(LanguageCode).includes(i18n.language as unknown as LanguageCode)
      ? (i18n.language as unknown as LanguageCode)
      : LanguageCode.EN;
  }, [i18n]);
  return {
    t,
    languageUsed: language,
  };
};
