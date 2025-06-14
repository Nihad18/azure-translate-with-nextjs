import { IAnswersProps } from "@/utils/interfaces/index";
const AnswerBox: React.FC<IAnswersProps> = ({
  translate,
  answer,
}) => {
  return (
    <div className='w-full md:w-[60%]'>
      <div className='w-full md:h-[300px] md:max-h-[300px] min-h-[50px] max-h-[200px] break-words overflow-auto border pt-3 pl-4 pr-10 '>
        {answer} {(translate === true && answer !== "") ? "..." : ""}
        {(answer === "" && translate === true) ? "Translates..." : ""}
      </div>
    </div>
  );
};
export default AnswerBox;
