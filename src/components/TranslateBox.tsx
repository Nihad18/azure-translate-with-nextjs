"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ILanguage } from "@/utils/interfaces/index";
import AnswerBox from "./AnswerBox";
import TextArea from "./TextArea";
import DropDown from "./Dropdown";
import { BsArrowLeftRight } from "react-icons/bs";
import { sendRequest } from "@/utils/services/SendRequest";

const availableLanguages: ILanguage[] = [
  { lang: "English", prefix: "en" },
  { lang: "Russian", prefix: "ru" },
  { lang: "Azerbaijani", prefix: "az" },
  { lang: "Turkish", prefix: "tr" },
  { lang: "French", prefix: "fr" },
];

const TranslateBox: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [translate, setTranslate] = useState<boolean>(false);
  const [activeTextAreaLang, setActiveTextAreaLang] = useState<ILanguage>({
    lang: "English",
    prefix: "en",
  });
  const [activeAnswerBoxLang, setActiveAnswerBoxLang] = useState<ILanguage>({
    lang: "Azerbaijani",
    prefix: "az",
  });
  let key = process.env.NEXT_PUBLIC_API_KEY;
  let endpoint = "https://api.cognitive.microsofttranslator.com";
  let location = "eastus";

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setTranslate(true);
      sendRequest(
        location,
        endpoint,
        key,
        activeAnswerBoxLang,
        activeTextAreaLang,
        text,
        setAnswer,
        setTranslate
      );
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [text, activeTextAreaLang, activeAnswerBoxLang]);

  const TextAreaLanguages: ILanguage[] = availableLanguages.filter(
    (lang) => lang.prefix !== activeAnswerBoxLang.prefix
  );
  const AnswerBoxLanguages: ILanguage[] = availableLanguages.filter(
    (lang) => lang.prefix !== activeTextAreaLang.prefix
  );

  return (
    <div className='translate-box w-screen p-10 md:p-5 flex flex-col justify-center'>
      <div className='flex md:justify-center justify-between'>
        <div className='w-fit md:w-[45%]'>
          <DropDown
            active={activeTextAreaLang}
            setActive={setActiveTextAreaLang}
            availableLanguages={TextAreaLanguages}
          />
        </div>
        <div
          className="text-xl text-bold w-fit md:w-[10%] flex justify-center items-center"
        >
          <BsArrowLeftRight className={`${translate === true ? "opacity-50" : ""}`} />
        </div>
        <div className='w-fit md:w-[45%]'>
          <DropDown
            active={activeAnswerBoxLang}
            setActive={setActiveAnswerBoxLang}
            availableLanguages={AnswerBoxLanguages}
          />
        </div>
      </div>
      <div className='flex md:flex-row flex-col'>
        <TextArea text={text} setText={setText} />
        <AnswerBox translate={translate} answer={answer} />
      </div>
    </div>
  );
};
export default TranslateBox;
