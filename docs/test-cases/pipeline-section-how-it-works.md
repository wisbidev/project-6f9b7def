# Test Cases — Pipeline Section (How It Works)

## Happy Path Checklist

### Rendering
- [ ] Section renders with id="pipeline"
- [ ] Title displays: "Từ ý tưởng đến deploy hoàn toàn tự động"

### Step Cards (5 steps)
- [ ] 5 step cards are rendered, each with: số thứ tự (1-5), icon nhỏ, title, mô tả ngắn
- [ ] Step 1: "Bạn gửi ý tưởng" — "Chat với bot Telegram"
- [ ] Step 2: "PM lên kế hoạch" — "AI phân tích và tạo plan"
- [ ] Step 3: "Design & SRS" — "AI tạo design và spec"
- [ ] Step 4: "Dev & Test" — "AI coding + test tự động"
- [ ] Step 5: "Deploy" — "Hoàn thiện và deploy"

### Responsive Layout
- [ ] Mobile (<768px): cards stack vertically, connecting line on the left
- [ ] Desktop (≥768px): horizontal row layout, connecting line between steps

### Smooth Scroll Target
- [ ] Clicking "Xem cách hoạt động" in Hero scrolls smoothly to #pipeline

### Animation
- [ ] Cards fade in sequentially when scrolled into viewport
