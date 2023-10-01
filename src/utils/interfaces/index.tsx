export interface ILanguage {
  lang: string;
  prefix: string;
}

export interface ITextAreaProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAnswersProps  {
  translate: boolean;
  answer: string;
}

export interface IDropDownProps {
  active: ILanguage;
  setActive: React.Dispatch<React.SetStateAction<ILanguage>>;
  availableLanguages: ILanguage[];
}
