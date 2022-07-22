import QuoteCard from "./QuoteCard";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Quote() {
  return (
    <div
      id="Quote"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
 <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
         我比较满意的一幅画
      </h2>
      <div className="md:w-1000 w-1000 ">
        {[
        
          {
            img: "my Picture.png", 
          },
        ].map((item, index) => {
          return (
            <QuoteCard
              key={index}
              img={item.img}
          
            />
          );
        })}
        <div className=" bg-gray-100 rounded-xl md:p-0 shadow-lg mb-6">
          <p className="pt-12 pb-6 text-xl px-2">
            {/* 在此处替换文本内容 */}
            

            “仅靠生存本身是不能保证生存的，发展是生存的最好保障。”
          </p>
          <p className="pb-12 text-xl px-2">—— 刘慈欣《黑暗森林》</p>
          <p className="pt-12 pb-6 text-l px-5">
            {/* 在此处替换文本内容 */}
            注：本图的用途是给讲述三叶虫的演化史做个背景，三叶虫本身颇有一点为了生存无所不用其极地发展叠甲，
            但是直到灭绝都没有泰达地改变身体结构（比如方解石结构的眼睛，同律分节，以及最经典的左中右三叶）
            最后灭绝于地球史上最惨烈的大灭绝，二叠纪末大灭绝
            （理论上成铁纪的大灭绝更惨烈但是当时没有肉眼可见的生物所以不算）
            
          </p>
        </div>
      </div>
    </div>
  );
}

