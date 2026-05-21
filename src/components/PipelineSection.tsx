'use client'

import { useEffect, useRef, useState } from 'react'
import { FiMessageCircle, FiFileText, FiCode, FiPlay, FiRocket } from 'react-icons/fi'

interface Step {
  number: number
  icon: React.ReactNode
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: 1,
    icon: <FiMessageCircle className="w-5 h-5" />,
    title: 'Bạn gửi ý tưởng',
    description: 'Chat với bot Telegram bằng ngôn ngữ tự nhiên',
  },
  {
    number: 2,
    icon: <FiFileText className="w-5 h-5" />,
    title: 'PM lên kế hoạch',
    description: 'AI phân tích và tạo kế hoạch chi tiết',
  },
  {
    number: 3,
    icon: <FiFileText className="w-5 h-5" />,
    title: 'Design & SRS',
    description: 'AI tạo design và specification document',
  },
  {
    number: 4,
    icon: <FiCode className="w-5 h-5" />,
    title: 'Dev & Test',
    description: 'AI coding và test tự động',
  },
  {
    number: 5,
    icon: <FiRocket className="w-5 h-5" />,
    title: 'Deploy',
    description: 'Hoàn thiện và deploy lên production',
  },
]

function StepCard({ step, isVisible }: { step: Step; isVisible: boolean }) {
  return (
    <div
      className={`relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${step.number * 100}ms` }}
    >
      <div className="flex md:flex-col items-start md:items-center gap-4">
        <div className="flex items-center gap-4 md:w-full">
          <div className="flex md:flex-col items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {step.number}
            </div>
            <div className="hidden md:block absolute left-1/2 w-full h-0.5 bg-blue-500/30" />
          </div>
          <div className="flex-1 md:flex-grow-0">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-blue-400">{step.icon}</div>
                <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
              </div>
              <p className="text-slate-400 text-sm">{step.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PipelineSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pipeline" className="py-20 px-4 bg-slate-950" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-50 mb-16">
          Từ ý tưởng đến deploy hoàn toàn tự động
        </h2>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-700" />
            <div
              className={`absolute top-5 left-0 h-0.5 bg-blue-500 transition-all duration-1000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}
            />
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`relative transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${step.number * 150}ms` }}
                >
                  <div className="flex flex-col items-center pt-12">
                    <div className="absolute top-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold z-10">
                      {step.number}
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-blue-500 transition-colors w-full text-center">
                      <div className="flex justify-center mb-3">
                        <div className="text-blue-400">{step.icon}</div>
                      </div>
                      <h3 className="text-base font-semibold text-slate-50 mb-2">{step.title}</h3>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-700" />
          <div
            className={`absolute left-5 top-0 w-0.5 bg-blue-500 transition-all duration-1000 ${
              isVisible ? 'h-full' : 'h-0'
            }`}
          />
          <div className="space-y-6 pl-14">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
