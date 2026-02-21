import project1Img from '@/assets/234.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string; // 이미지 경로 (예: "/images/project1.jpg" 또는 외부 URL)
  tags: string[];
}

export interface SiteConfig {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutDescription: string;
  contactEmail: string;
  contactPhone: string;
}

// 프로젝트 데이터를 여기서 수정하세요.
// 이미지를 변경하려면:
// 1. public/images 폴더에 이미지 파일을 넣으세요.
// 2. 아래 imageUrl을 "/images/파일명.jpg" 형식으로 변경하세요.
export const initialProjects: Project[] = [
  {
    id: "1",
    title: "루미너스 브랜드 아이덴티티",
    category: "브랜딩",
    description: "현대적인 감각의 조명 브랜드 로고 및 패키지 디자인",
    imageUrl: project1Img,
    tags: ["Adobe Illustrator", "Photoshop", "Branding"],
  },
  {
    id: "2",
    title: "테크웨이브 웹사이트",
    category: "웹 디자인 & 개발",
    description: "IT 스타트업을 위한 반응형 웹사이트 구축",
    imageUrl: "https://picsum.photos/seed/techwave/800/600",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "3",
    title: "에코 라이프 모바일 앱",
    category: "UI/UX 디자인",
    description: "친환경 라이프스타일을 위한 모바일 애플리케이션 UI",
    imageUrl: "https://picsum.photos/seed/eco/800/600",
    tags: ["Figma", "Prototyping", "Mobile UI"],
  },
  {
    id: "4",
    title: "카페 모닝 브루",
    category: "웹사이트",
    description: "로컬 카페의 따뜻한 감성을 담은 소개 페이지",
    imageUrl: "https://picsum.photos/seed/coffee/800/600",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const initialSiteConfig: SiteConfig = {
  heroTitle: "깊이 있는 안목\n흔들리지 않는 본질",
  heroSubtitle: "단순한 디자인을 넘어 브랜드의 철학을 담아냅니다.",
  aboutTitle: "Why STUDIO K?",
  aboutDescription: "STUDIO K는 일관된 브랜드 경험을 제공합니다.",
  contactEmail: "contact@studiok.com",
  contactPhone: "02-1234-5678",
};
