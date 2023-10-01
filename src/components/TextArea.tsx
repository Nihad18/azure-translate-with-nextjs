import { ITextAreaProps } from "@/utils/interfaces/index";
const TextArea: React.FC<ITextAreaProps> = ({
  text,
  setText,
}) => {
  return (
    <div className='w-full md:w-[50%] md:mr-8 md:mb-0 mb-4'>
      <div className='md:h-[300px] h-[200px] border relative'>
        <textarea
          className='w-full md:h-[290px] h-[190px] whitespace-pre-wrap overflow-auto pt-3 pl-4 pr-10 outline-none resize-none'
          placeholder='...'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div
          className='cursor-pointer absolute top-3 right-6'
          onClick={() => {
            setText("");
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default TextArea;
