import Image from "next/image";

type ArrowButtonProps = {
  type: "next" | "back";
};

export const ArrowButton = ({ type }: ArrowButtonProps): JSX.Element => {
  return (
    <button>
      {type === "next" ? (
        <Image src="/right arrow.svg" width={28} height={18} alt="Next" />
      ) : (
        <Image src="/left arrow.svg" width={28} height={18} alt="Back" />
      )}
    </button>
  );
};
