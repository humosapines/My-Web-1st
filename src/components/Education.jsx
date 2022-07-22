import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div
      id="education"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
         我的教育经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
        
          {
            img: "education.jpg",
            title: "中南林业科技大学",
            time: "2019年9月 - 2023年6月",
            descriptions: [
              "我是中南林业科技大学计算机专业的大四学生，预计将于2023年6月获得荣誉理学学士学位。",
              
            ],
          },
        ].map((item, index) => {
          return (
            <EducationCard
              key={index}
              img={item.img}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
