import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
       
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
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
