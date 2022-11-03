import SectionLayout from "@components/molecules/SectionLayout";
import SectionTop from "@components/molecules/SectionTop";
import Collections from "@components/organisms/Collections";

export default function OpenseaTopCollection() {
  return (
    <SectionLayout>
      <SectionTop title="많이 거래된 컬랙션" showAll="오픈씨 데이터 기준" />
      <Collections />
    </SectionLayout>
  );
}
