import testimonialsStyles from "@/styles/testimonials.module.css";

type GallerySliderButtonProps = {
  isSelected?: boolean;
};

export const GallerySliderButton = ({
  isSelected,
}: GallerySliderButtonProps): JSX.Element => {
  return (
    <button>
      <svg
        className={
          isSelected
            ? testimonialsStyles["testimonials__slider__button--selected"]
            : testimonialsStyles.testimonials__slider__button
        }
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.3" cx="5" cy="5" r="5" fill="currentColor" />
      </svg>
    </button>
  );
};
