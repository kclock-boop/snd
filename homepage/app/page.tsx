const metrics = [
  { label: '설립', value: '2011' },
  { label: '임직원', value: '14명' },
  { label: '보유 설비', value: '20대' },
  { label: '품질 인증', value: 'AS9100 Rev.D' },
];

const processCards = [
  {
    title: '3축 / 4축 MCT 가공',
    body: '항공 구조물과 방산 부품을 위한 정밀 가공 역량을 운영합니다.',
  },
  {
    title: 'Router 가공',
    body: '대형 판재와 복합 형상 대응을 위한 공정을 안정적으로 수행합니다.',
  },
  {
    title: '특수 성형 공정',
    body: 'Hot Joggle, Hydraulic Forming, Press Brake 기반 성형을 지원합니다.',
  },
  {
    title: '품질 검증 체계',
    body: 'FAI, 공정검사, 출하검사, 추적성 관리로 품질 흐름을 구조화합니다.',
  },
];

const programCards = [
  {
    title: '항공 부문',
    body: 'B737, Embraer E2, C390 기반 부품 가공과 구조물 대응',
  },
  {
    title: '방산 부문',
    body: 'KF-21, LAH, K9 자주포, 차륜형 장갑차, 함포 부품 가공',
  },
  {
    title: '치공구 제작',
    body: '조립용 지그, 고정구, 검사구까지 고객 맞춤형 툴링을 지원',
  },
];

const qualityFlow = [
  {
    step: '01 계약 검토',
    detail: '고객 요구사항, 기술 타당성, 리스크를 사전에 검토합니다.',
  },
  {
    step: '02 공정 계획',
    detail: '공정 설계, 작업 표준서, 설비와 치공구 준비를 체계화합니다.',
  },
  {
    step: '03 검사 및 검증',
    detail: 'FAI, 공정검사, 출하검사, 추적성 관리로 부적합을 낮춥니다.',
  },
  {
    step: '04 지속적 개선',
    detail: '내부 심사, 데이터 분석, 피드백, 경영 검토로 개선을 이어갑니다.',
  },
];

const roadmap = [
  {
    title: '생산실적 자동집계',
    body: '일·주·월 실적과 계획 대비 완료율을 빠르게 집계하는 구조를 준비합니다.',
  },
  {
    title: '공정 진행 가시화',
    body: 'MCT, Router, 설비 정지, 병목 공정을 한 화면에서 보는 구조를 만듭니다.',
  },
  {
    title: '품질·불량 분석',
    body: '불량유형, 재검 이력, 품질 문서를 작업번호 기준으로 연결합니다.',
  },
  {
    title: 'AI 보조기능',
    body: 'KPI 변동원인 요약, 반복불량 탐색, 보고 자동화로 판단 속도를 높입니다.',
  },
];

export default function Home() {
  return (
    <main className="bg-deep text-white">
      <div className="grain-overlay" />
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="glass-shell mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 md:px-7">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <span className="font-display text-lg font-bold tracking-tight text-white">
                S
              </span>
            </div>
            <div>
              <p className="font-display text-base font-semibold tracking-tight text-white">
                SND
              </p>
              <p className="text-xs text-mist">
                Space &amp; Defence Manufacturing
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a className="nav-link text-sm text-mist" href="#company">
              회사소개
            </a>
            <a className="nav-link text-sm text-mist" href="#capabilities">
              핵심역량
            </a>
            <a className="nav-link text-sm text-mist" href="#quality">
              품질체계
            </a>
            <a className="nav-link text-sm text-mist" href="#future">
              스마트 제조
            </a>
          </nav>

          <a
            href="#contact"
            className="cta-btn hidden items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 md:inline-flex"
          >
            문의하기
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
              →
            </span>
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[100dvh] items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 break-keep">
            <span className="chip inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              Aerospace &amp; Defence Precision Partner
            </span>
            <div className="space-y-6">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.03]">
                항공·방산 제조 현장을
                <br className="hidden sm:block" />
                정밀하게 완성하는
                <br className="hidden sm:block" />
                SND의 가공 경쟁력
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                SND는 항공기 부품 가공, 방산 부품 제작, 치공구 솔루션을 수행하는
                정밀 제조 파트너입니다. 3축·4축 MCT, Router 가공, 특수 성형,
                품질 추적 체계를 바탕으로 납기와 품질을 함께 관리합니다.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#capabilities"
                className="cta-btn inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900"
              >
                핵심 역량 보기
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                  →
                </span>
              </a>
              <a
                href="#future"
                className="cta-btn inline-flex items-center justify-center gap-3 rounded-full border border-white/12 bg-white/5 px-8 py-4 text-base font-semibold text-white"
              >
                스마트 제조 방향
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
                  →
                </span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="double-bezel">
                  <div className="p-5">
                    <p className="text-sm text-mist">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="double-bezel">
            <div className="grid gap-4 p-5">
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(19,29,43,0.96),rgba(9,14,21,0.96))] p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-mist">생산 역량 요약</p>
                      <p className="mt-3 text-3xl font-bold leading-snug text-white">
                        정밀 가공과 품질 체계를 함께 운용하는 제조 파트너
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8 text-accent">
                      F
                    </div>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-mist">
                        주요 사업
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        항공 · 방산 · 치공구
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-mist">
                        핵심 가치
                      </p>
                      <p className="mt-2 text-2xl font-bold text-white">
                        품질 · 신뢰 · 납기
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/8 bg-white/4 p-6">
                  <p className="text-sm text-mist">핵심 보유 공정</p>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="font-semibold text-white">3축 / 4축 MCT</p>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        항공 구조물과 방산 부품 정밀 가공
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="font-semibold text-white">Router 가공</p>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        대면적 소재와 판재 기반 공정 대응
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/6 p-4">
                      <p className="font-semibold text-white">
                        Hot Joggle / Forming
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        특수 성형과 고객 맞춤형 제조 지원
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-sm text-mist">주요 기종 / 프로그램</p>
                  <p className="mt-3 text-lg font-semibold leading-snug text-white">
                    B737 · Embraer E2 · C390 · KF-21 · LAH
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-sm text-mist">품질 운영</p>
                  <p className="mt-3 text-lg font-semibold leading-snug text-white">
                    FAI, 출하검사, 추적성 관리, 시정조치
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-white/5 p-5">
                  <p className="text-sm text-mist">확장 방향</p>
                  <p className="mt-3 text-lg font-semibold leading-snug text-white">
                    MES 연계, Dashboard, 현장 데이터 기반 운영
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="break-keep">
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
              SND는 항공·방산 부품 가공과 치공구 제작을 수행하는 정밀 제조
              기업입니다
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              고정밀 가공 기술, 엄격한 품질 관리, 고객 맞춤형 공정 대응력을
              기반으로 항공 구조물, 방산 부품, 지그와 검사구 제작까지 연결된
              생산 역량을 제공합니다.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="process-card rounded-[1.8rem] border border-softline bg-white/[0.04] p-6">
              <div className="card-icon">C</div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                창원 기반 제조 인프라
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                경남 창원 생산 거점을 중심으로 항공·방산 제조 요구에 대응하는
                정밀 가공 역량을 운용합니다.
              </p>
            </div>
            <div className="process-card rounded-[1.8rem] border border-softline bg-white/[0.04] p-6">
              <div className="card-icon">Q</div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                품질과 추적성 중심
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                계약 검토부터 검사, FAI, 출하, 시정조치까지 품질 흐름을 구조화해
                추적성과 대응 속도를 높입니다.
              </p>
            </div>
            <div className="process-card rounded-[1.8rem] border border-softline bg-white/[0.04] p-6 sm:col-span-2">
              <div className="card-icon">D</div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                데이터 기반 제조 운영으로 확장 중
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                생산실적, 공정, 설비, 품질 데이터를 MES와 연결하고, Dashboard와
                보고 자동화를 통해 데이터 기반의 현장 의사결정 구조로 전환하는
                방향을 추진하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="break-keep">
            <span className="eyebrow">Capabilities</span>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
              공정, 설비, 툴링까지 이어지는 SND의 제조 체계
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            <div className="double-bezel lg:col-span-7">
              <div className="h-full p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-mist">Core Process Map</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      정밀 가공부터 검사까지 연결되는 공정 흐름
                    </h3>
                  </div>
                  <div className="card-icon">P</div>
                </div>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {processCards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/8 bg-white/5 p-5"
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="double-bezel lg:col-span-5">
              <div className="h-full p-7">
                <p className="text-sm text-mist">Major Programs</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  항공과 방산 프로그램 대응
                </h3>
                <div className="mt-8 space-y-3">
                  {programCards.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.4rem] border border-white/8 bg-white/5 p-4"
                    >
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="eyebrow">Quality System</span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                계약 검토부터 시정조치까지 끊기지 않는 품질 흐름
              </h2>
              <div className="mt-10 grid gap-4">
                {qualityFlow.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5"
                  >
                    <p className="text-sm text-mist">{item.step}</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="double-bezel h-full">
              <div className="flex h-full flex-col justify-between p-7">
                <div>
                  <p className="text-sm text-mist">Certified Quality</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    AS9100 기반 품질 운영으로 글로벌 수준의 보증 체계를
                    유지합니다
                  </h3>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.5rem] bg-white/5 p-5">
                    <p className="text-sm text-mist">인증 범위</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      항공 및 방산 부품의 가공과 성형
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/5 p-5">
                    <p className="text-sm text-mist">품질 정책</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      고객 만족 실현 · 무결점 품질 확보 · 지속적 품질 개선
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white/5 p-5">
                    <p className="text-sm text-mist">검사 인프라</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      CMM 측정기, 공정검사, 초도품 검사, 출하검증 체계
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="future" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="break-keep">
            <span className="eyebrow">Smart Manufacturing Roadmap</span>
            <h2 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
              SND는 제조 현장의 데이터 가시성을 높이는 방향으로 다음 단계를
              준비하고 있습니다
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmap.map((item, index) => (
              <div
                key={item.title}
                className="process-card rounded-[1.8rem] border border-softline bg-white/[0.04] p-6"
              >
                <p className="text-sm text-mist">Step {index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="double-bezel">
            <div className="grid items-center gap-8 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
              <div className="break-keep">
                <span className="chip inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                  Integrated View
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                  현장 실적과 품질 이력을 한 화면에서 보는 운영 체계가 다음
                  경쟁력이 됩니다
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                  생산실적, 공정, 설비, 품질 데이터를 같은 기준으로 연결하면
                  보고 속도뿐 아니라 문제 대응, 납기 예측, 현장 개선의 질도 함께
                  올라갑니다.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.05] p-6">
                <p className="text-sm text-mist">Next Direction</p>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  Dashboard와 Data Room 기반의 현장 가시성 확대
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  생산실적 자동집계, 공정 진행 가시화, 품질·불량 분석, 보고
                  자동화까지 이어지는 현장형 디지털 운영 구조를 준비하고
                  있습니다.
                </p>
                <a
                  href="#contact"
                  className="cta-btn mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
                >
                  구축 방향 문의
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="break-keep">
              <span className="chip inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                Contact &amp; Next Step
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                정밀 제조와 데이터 기반 현장 운영을 함께 준비하고 있다면 SND의
                다음 화면을 같이 설계할 수 있습니다
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
                회사 소개, 공정 역량, 품질 체계, 스마트 제조 방향까지 이어지는
                현재 자료를 기준으로 향후 공식 홈페이지와 대외 소개 채널로
                확장할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-sm text-mist">회사명</p>
                <p className="mt-2 text-lg font-semibold text-white">(주)SnD</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-sm text-mist">주요 분야</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  항공기 부품 · 방산 부품 · 치공구 제작
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5">
                <p className="text-sm text-mist">확장 방향</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  공식 홈페이지, Dashboard, 데이터 기반 제조 소개
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/8 pt-6 text-sm text-mist md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">SND</p>
            <p className="mt-1 break-keep">
              항공·방산 정밀가공 및 치공구 제작 파트너
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="nav-link" href="#company">
              회사소개
            </a>
            <a className="nav-link" href="#capabilities">
              핵심역량
            </a>
            <a className="nav-link" href="#quality">
              품질체계
            </a>
            <a className="nav-link" href="#future">
              스마트 제조
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
