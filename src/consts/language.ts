export const LANGUAGE = [
  { value: '', name: '언어선택' },
  { value: 'java', name: 'Java' },
  { value: 'javascript', name: 'Javascript' },
];

export type LanguageValues = (typeof LANGUAGE)[number]['value'];

export type LanguageNames = (typeof LANGUAGE)[number]['name'];

export interface LanguageOption {
  value: LanguageValues;
  name: LanguageNames;
}
