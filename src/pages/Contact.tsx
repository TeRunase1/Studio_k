import { useAppStore } from '@/context/AppContext';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const { siteConfig } = useAppStore();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Contact Us</h1>
            <p className="text-gray-400 text-lg mb-12">
              새로운 프로젝트를 시작할 준비가 되셨나요? <br />
              STUDIO K와 함께 당신의 브랜드를 완성하세요.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ding-blue/20 flex items-center justify-center text-ding-blue">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email</h3>
                  <p className="text-gray-400">{siteConfig.contactEmail}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ding-blue/20 flex items-center justify-center text-ding-blue">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">{siteConfig.contactPhone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-ding-blue/20 flex items-center justify-center text-ding-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Office</h3>
                  <p className="text-gray-400">서울특별시 강남구 테헤란로 123, 딩빌딩 4층</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ding-dark p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">이름</label>
                  <input type="text" className="w-full bg-ding-black border border-white/10 rounded p-3 text-white focus:border-ding-blue focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">연락처</label>
                  <input type="text" className="w-full bg-ding-black border border-white/10 rounded p-3 text-white focus:border-ding-blue focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">이메일</label>
                <input type="email" className="w-full bg-ding-black border border-white/10 rounded p-3 text-white focus:border-ding-blue focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">프로젝트 내용</label>
                <textarea className="w-full bg-ding-black border border-white/10 rounded p-3 text-white h-32 focus:border-ding-blue focus:outline-none transition-colors"></textarea>
              </div>
              <button type="button" className="w-full bg-ding-blue hover:bg-ding-blue-light text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-colors">
                <Send size={18} /> 메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
