import Image from "next/image";

export default function ItemPage() {
  return <div className=" tw-bg-gray-100">
    <div className="tw-px-5 tw-bg-white">
      <div className="tw-relative tw-h-80">
        <Image className="tw-object-contain" src={'https://static.ibox.art/file/oss/test/image/nft-goods/b36619c8c9734ea9b56167e79850add5.jpg?style=st6'} alt='' fill></Image>
      </div>
      <p className="tw-py-3">Nft Name</p>
    </div>

    <div className="tw-bg-white tw-mt-3 tw-p-5">
      <p className=" tw-font-bold tw-text-xl tw-mb-2">链上信息</p>
      <p className=" tw-text-gray-500">合约地址 <span className="tw-ml-3 tw-font-bold tw-text-black">0x123</span></p>
      <p className=" tw-text-gray-500">链上标识 <span className="tw-ml-3 tw-font-bold tw-text-black">1234</span></p>
    </div>

    <div className="tw-bg-white tw-mt-3 tw-p-5">
      <p className=" tw-font-bold tw-text-xl tw-mb-2">作品解读</p>
      <p className="">
        炎帝的小女儿被海水淹死后，化为精卫鸟，常衔木石，投到海里，一心要把东海填平的故事。后世精卫填海成为一个成语，比喻志士仁人所从事的艰巨卓越的事业，也常比喻坚持不懈的人。刻画了英勇顽强的精卫形象，表达古代劳动人民探索自然、征服自然、治理水患的强烈愿望和不畏艰苦，奋斗不止，不达目的，决不罢休的精神。
      </p>
    </div>

    <div className="tw-bg-white tw-mt-3 tw-p-5 tw-mb-20">
      <button className="tw-btn tw-w-full">购买</button>
    </div>
  </div>

}