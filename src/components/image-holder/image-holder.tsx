import "./image-holder.css";
interface ImageHolderType {
  image: string;
}
export const ImageHolder: React.FC<ImageHolderType> = ({ image }) => {
  return (
    <div className={"image-holder"}>
      <img src={image} alt={"image"} />
    </div>
  );
};
