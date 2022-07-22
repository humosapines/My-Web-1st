import { LazyLoadImage } from "react-lazy-load-image-component";

export default function QuoteCard(props) {
  return (
    <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 shadow-lg mb-6">
      <LazyLoadImage
        className="w-360 h-3600  max-w-full md:rounded rounded-full md:float-left m-6"
        src={props.img}
        alt={props.title}
      />
    </div>
  );
}
