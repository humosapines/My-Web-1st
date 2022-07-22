import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
         我的项目经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto lg:grid grid-cols-2">
        {[
          // 在此处修改或新增项目经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "project1.jpg",
            title: "明日方舟模拟服务器",
            time: "2022年3月 - 2022年7月",
            descriptions: [
              "独立学习完成了一个模拟明日方舟服务器功能的服务器样例，完成了包括登录、修改个人信息、保存个人信息、实现抽卡逻辑、实现战斗掉落等一系列功能",
            ],
          },
          {
            img: "project2.jpg",
            title: "模拟挂号系统",
            time: "2022年6月 - 2022年7月",
            descriptions: [
              "在五人团队中担任全栈工程师，从需求分析开始创建了一个支持线上挂号的的网站。",
              "初步了解了mysql，springboot，gitee，vue，CentOS等工具。",
              "初步使用了VMware，Xftp，XShell等软件"
             
            ],
          },
          {
            img: "project3.jpg",
            title: "unity自制小游戏",
            time: "2022年6月 - 2022年6月",
            descriptions: [
              "在老师的指导下完成了一个flappybird的制作，初步地了解了一下unity引擎，对材质、渲染有了一个初步的概念",
            ],
    
          },
     
        ].map((item, index) => {
          return (
            <ProjectCard
              key={index}
              img={item.img}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
