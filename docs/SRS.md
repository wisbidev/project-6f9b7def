# Software Requirements Specification — aiteam Landing Page

## 1. Overview

Landing page giới thiệu **aiteam** — nền tảng AI tự động build phần mềm qua Telegram. Trang web là một **single-page** dạng landing, dark mode với accent xanh lam (#3B82F6), được xây dựng bằng **Next.js** và **Tailwind CSS**, responsive mobile-first. Trang gồm 7 sections: Hero, Pipeline, AI Agents, Features, Tech Stack, Final CTA, Footer, và Global Navigation & Layout.

## 2. Scope

Xây dựng landing page tĩnh, **không có backend**, **không có API**, **không có form submit / email collection**. Tất cả link CTA đều mở ngoài (Telegram, GitHub). Mục tiêu: giới thiệu dịch vụ và thuyết phục user chat qua Telegram.

## 3. Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** (App Router) | Framework |
| **Tailwind CSS** | Styling, xanh lam accent `#3B82F6` |
| **React Icons** (hoặc Heroicons) | Icons cho cards/agents |
| **Vercel** | Hosting (deploy tự động) |

Không dùng thêm thư viện UI nào khác.

## 4. Functional Requirements

---

### F1 — Hero Section

**Title:** Hero Section

**Description:**
Hero với headline "AI Team. Không cần thuê dev.", subheadline mô tả ngắn về aiteam (ví dụ: "Nền tảng AI tự động build phần mềm của bạn qua Telegram. Từ ý tưởng đến deploy — hoàn toàn tự động."), và 2 CTA buttons: "Bắt đầu ngay" (mở link Telegram) và "Xem cách hoạt động" (smooth scroll xuống Pipeline section). Dark background với gradient xanh lam (#3B82F6) nhẹ + glow effect phía sau. Animation fade-in khi load. Responsive: stack dọc trên mobile, layout rộng trên desktop.

**Acceptance criteria:**
- Headline hiển thị đúng: "AI Team. Không cần thuê dev."
- Subheadline hiển thị bên dưới headline
- "Bắt đầu ngay" button: màu xanh lam fill, mở `https://t.me/aiteam_bot` ở tab mới
- "Xem cách hoạt động" button: outline/ghost, smooth scroll đến #pipeline section
- Background gradient từ #0f172a (slate-900) lên accent blue #3B82F6 glow
- Responsive: padding, font size scale xuống mobile
- Animation: fade-in-up cho nội dung hero

---

### F2 — Pipeline Section (How It Works)

**Title:** Pipeline Section (How It Works)

**Description:**
Timeline/step cards hiển thị 5 bước từ ý tưởng đến deploy. Title: "Từ ý tưởng đến deploy hoàn toàn tự động". 5 bước: (1) Bạn gửi ý tưởng – Chat với bot Telegram, (2) PM lên kế hoạch – AI phân tích và tạo plan, (3) Design & SRS – AI tạo design và spec, (4) Dev & Test – AI coding + test tự động, (5) Deploy – Hoàn thiện và deploy. Mobile: timeline dọc. Desktop: horizontal steps với connecting line.

**Acceptance criteria:**
- Title hiển thị đúng: "Từ ý tưởng đến deploy hoàn toàn tự động"
- 5 step cards, mỗi card có: số thứ tự (1-5), icon nhỏ, title, mô tả
- Mobile: stack dọc, connecting line bên trái
- Desktop (≥768px): horizontal row, connecting line giữa các step
- Section có id="pipeline" để Hero CTA smooth scroll đến
- Animation: cards xuất hiện dần khi scroll vào viewport

---

### F3 — AI Agents Section

**Title:** AI Agents Section

**Description:**
4 cards: PM, TL (Tech Lead), Dev, TestLead. Title: "4 AI Agents vận hành như engineering team thật". Mỗi card có icon outline, tên agent, mô tả ngắn về vai trò. Hover effect: glow xanh lam (#3B82F6) nhẹ. Responsive grid: 1 cột mobile, 2 cột tablet, 4 cột desktop.

**Acceptance criteria:**
- Title hiển thị đúng
- 4 cards với icon outline (React Icons hoặc inline SVG)
- Hover: glow/shadow xanh lam, scale nhẹ (1.02-1.05)
- Grid responsive: 1 col (mobile), 2 col (md), 4 col (lg)
- Animation: staggered fade-in khi scroll

---

### F4 — Features Section

**Title:** Features Section

**Description:**
Grid 6 feature cards với icon + mô tả. Title: "Tự động hóa toàn bộ quy trình phát triển phần mềm". 6 features: (1) Chat qua Telegram – Gửi yêu cầu bằng ngôn ngữ tự nhiên, (2) AI lên kế hoạch – PM Agent tự động phân tích, (3) Auto Code – Dev Agent viết code real, (4) Kiểm thử tự động – TestLead đảm bảo chất lượng, (5) Deploy 1-click – Go live chỉ trong vài phút, (6) Hỗ trợ real-time – Theo dõi tiến độ qua Telegram. Grid 3 cột desktop, 2 tablet, 1 mobile.

**Acceptance criteria:**
- Title hiển thị đúng
- 6 cards, mỗi card có icon + title + short description
- Grid: 1 col (mobile), 2 col (md), 3 col (lg)
- Hover: elevated shadow, accent border
- Animation: staggered fade-in khi scroll

---

### F5 — Tech Stack Section

**Title:** Tech Stack Section

**Description:**
Hiển thị 6 công nghệ: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker. Title: "Stack hiện đại, sẵn sàng production". Mỗi công nghệ hiển thị dưới dạng badge/card với icon + tên. Layout: flex wrap, centered.

**Acceptance criteria:**
- Title hiển thị đúng
- 6 badges/cards, mỗi cái có icon (hoặc logo chữ) + tên công nghệ
- Flex wrap, centered, gap đều
- Hover: highlight accent blue
- Animation: fade-in

---

### F6 — Final CTA Section

**Title:** Final CTA Section

**Description:**
Section cuối trước footer. Headline khuyến khích (ví dụ: "Sẵn sàng để AI build phần mềm cho bạn?"), subheadline ngắn, và CTA button "Chat qua Telegram" — mở link Telegram. Nền dark với accent gradient.

**Acceptance criteria:**
- Headline: khuyến khích hành động (text chốt)
- CTA button "Chat qua Telegram" → mở `https://t.me/aiteam_bot` tab mới
- Background: gradient dark hoặc accent
- Responsive: centered, padding phù hợp

---

### F7 — Footer

**Title:** Footer

**Description:**
Footer với logo aiteam (text), Telegram link, GitHub link, copyright. Nền dark (slate-900). Layout: logo + social links hàng ngang trên desktop, stack trên mobile.

**Acceptance criteria:**
- Hiển thị logo "aiteam" (text)
- Telegram icon link → `https://t.me/aiteam_bot`
- GitHub icon link → `https://github.com/QuangHuy1806/aiteam-landing`
- Copyright text: "© 2025 aiteam. All rights reserved."
- Dark background #0f172a
- Responsive

---

### F8 — Global Navigation & Layout

**Title:** Global Navigation & Layout

**Description:**
Navbar sticky phía trên với logo + nav links (smooth scroll đến từng section). Nav links: Giới thiệu (→#pipeline), Agents (→#agents), Tính năng (→#features), Liên hệ (→#cta). Global layout provider (root layout Next.js), dark mode base (body bg #020617). Tailwind config: accent blue #3B82F6, typography scale (h1-h6, body text). Mobile hamburger menu.

**Acceptance criteria:**
- Navbar sticky, background dark với blur/glass effect
- Logo "aiteam" bên trái
- Nav links bên phải: Giới thiệu, Agents, Tính năng, Liên hệ
- Click → smooth scroll đến section tương ứng
- Mobile: hamburger toggle, dropdown menu full-width
- Layout: dark bg #020617, text #F8FAFC
- Tailwind config: extend colors.blue accent → #3B82F6
- Typography: h1 (4xl), h2 (3xl), h3 (2xl), body (base), tất cả responsive

---

## 5. Non-Functional Requirements

- **Performance:** Lighthouse score ≥ 90 trên mobile. Tối ưu images, lazy load sections.
- **SEO:** Meta tags (title, description, og:image), semantic HTML.
- **Accessibility:** Contrast ratio ≥ 4.5:1, focus states, alt text trên icons.
- **Responsive:** Mobile-first. Breakpoints: sm (640px), md (768px), lg (1024px).
- **Deployment:** Deploy lên Vercel từ GitHub repo.

## 6. Design

Design: see attached spec.

No Figma design file was created for this project. The visual spec is defined by the acceptance criteria in each functional requirement above, with the following global design tokens:

- **Background:** #020617 (slate-950)
- **Navbar/Footer:** #0f172a (slate-900)
- **Accent:** #3B82F6 (blue-500)
- **Text primary:** #F8FAFC (slate-50)
- **Text secondary:** #94A3B8 (slate-400)
- **Gradient hero:** #0f172a → #1e3a5f (accent glow)
- **Border/Card:** #1e293b (slate-800)
- **Border hover:** #3B82F6
- **Border radius:** 12px (cards), 8px (buttons/badges)
- **Font:** Inter (system sans-serif stack)
