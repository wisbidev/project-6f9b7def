"use client";

import { useEffect, useRef, useState } from "react";
import { TbMessageCircle, TbBrain, TbDeviceDesktop, TbCode, TbRocket } from "react-icons/tb";

const steps = [
  {
    number: 1,
    icon: TbMessageCircle,
    title: "Bạn gửi ý tưởng",
    description: "Chat với bot Telegram bằng ngôn ngữ tự nhiên",
  },
  {
    number: 2,
    icon: TbBrain,
    title: "PM lên kế hoạch",
    description: "AI phân tích và tạo plan chi tiết",
  },
  {
    number: 3,
    icon: TbDeviceDesktop,
    title: "Design & SRS",
    description: "AI tạo design và spec đầy đủ",
  },
  {
    number: 4,
    icon: TbCode,
    title: "Dev & Test",
    description: "AI coding + test tự động toàn bộ",
  },
  {
    number: 5,
    icon: TbRocket,
    title: "Deploy",
    description: "Hoàn thiện và deploy lên production",
  },
];

export default function PipelineSection() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSteps((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pipeline" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
          Từ ý tưởng đến deploy hoàn toàn tự động
        </h2>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative flex justify-between items-start">
            {/* Connecting Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-slate-800" />
            <div
              className="absolute top-10 left-0 h-0.5 bg-accent transition-all duration-1000"
              style={{
                width: `${((visibleSteps.size - 1) / 4) * 100}%`,
              }}
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.has(index);
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  data-index={index}
                  className={`relative flex flex-col items-center z-10 w-48 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center mb-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50 text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 text-center">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800" />
          <div
            className="absolute left-4 top-4 w-0.5 bg-accent transition-all duration-1000"
            style={{
              height: `${((visibleSteps.size - 1) / 4) * 100}%`,
              maxHeight: "100%",
            }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.has(index);
              return (
                <div
                  key={step.number}
                  ref={(el) => { stepRefs.current[index + 5] = el; }}
                  data-index={index}
                  className={`relative flex items-start gap-6 transition-all duration-500 pl-12 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold text-white z-10">
                    {step.number}
                  </div>
                  <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-5 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-accent" />
                      <h3 className="text-lg font-semibold text-slate-50">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
