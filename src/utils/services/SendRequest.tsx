import axios from "axios";
import { ILanguage } from "@/utils/interfaces/index";
export const sendRequest: any = async (
  location: string,
  endpoint: string,
  key: string,
  activeAnswerBoxLang: ILanguage,
  activeTextAreaLang: ILanguage,
  text: string,
  setAnswer: React.Dispatch<React.SetStateAction<string>>,
  setTranslate: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": location,
        "Content-type": "application/json",
      },
      params: {
        "api-version": "3.0",
        from: activeTextAreaLang.prefix,
        to: activeAnswerBoxLang.prefix,
      },
      data: [
        {
          text: text,
        },
      ],
      responseType: "json",
    });
    setAnswer(response.data[0].translations[0].text);
    setTranslate(false);
  } catch (error) {
    console.error("Error sending request:", error);
  }
};
