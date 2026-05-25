# Design System — Zenlume Yoga

## 品牌定位

Zenlume Yoga 是一个 **瑜伽品牌定制化设计工作室**，定位高端、极简、有灵性。面向设计师和创业者，提供一站式品牌定制服务（Logo、包装、全套视觉系统）。

---

## 配色方案

### 主色 (Brand Green)

| 用途 | Oklch 值 | 说明 |
|------|----------|------|
| 按钮 / 强调色 / 装饰线 | `oklch(0.38_0.09_162)` | 主品牌绿色，用于 CTA 按钮、边框、hover 态、分割线 |
| 按钮 hover 暗色 | `oklch(0.28_0.08_162)` | 按钮悬停时的覆盖层 |
| 装饰元素透明度 | `oklch(0.38 0.09 162 / 0.18)` | 编号、引用等装饰性元素 |

### 深色背景 (Dark Backgrounds)

| 用途 | Oklch 值 | 说明 |
|------|----------|------|
| Hero / Navbar / Process / Contact | `oklch(0.10_0.004_60)` | 主深色背景，用于暗色 section |
| Footer | `oklch(0.08_0.003_60)` | 比主深色稍深一点 |
| 半透明叠加 | `oklch(0.10_0.004_60)/80` 或 `/95` | 导航栏滚动态背景、Hero 渐变遮罩 |

### 浅色背景 (Light Backgrounds)

| 用途 | Oklch 值 | 说明 |
|------|----------|------|
| 测试引用区 (Testimonials) | `oklch(0.97_0.005_80)` | 浅暖白背景 |
| Tag 标签背景 | `oklch(0.97_0.005_80)` | 标签/徽章的背景色 |

### 文字颜色

| 用途 | 值 | 说明 |
|------|-----|------|
| 深色背景上的正文 | `text-white/80` 或 `text-white/55` | 白色加透明度层级 |
| 深色背景上的标题 | `text-white` | 纯白标题 |
| 深色背景上的辅助文字 | `text-white/30` 或 `text-white/15` | 编号、标签、水印文字 |
| 浅色背景上的正文 | `text-gray-500` | 灰色正文 |
| 浅色背景上的标题 | `oklch(0.13_0.005_60)` | 深色标题 |
| 浅色背景上的强调 | `oklch(0.38_0.09_162)` | 品牌色文字（如 FAQ 展开项 hover） |
| 超链接 / 文字按钮 | `oklch(0.13_0.005_60)` → hover `oklch(0.38_0.09_162)` | 下划线文字按钮 |

### 边框与分割线

| 用途 | 值 | 说明 |
|------|-----|------|
| 深色背景上分割线 | `border-white/10` 或 `border-white/20` | 白色半透明 |
| 浅色背景上边框 | `border-gray-200` | 浅灰色边框 |
| 装饰分割线 | `w-8 h-px bg-[oklch(0.38_0.09_162)]` | 绿色细线 |

---

## 版式 (Typography)

### 字体

| 字体 | CSS 变量 | 字重 | 用途 |
|------|----------|------|------|
| **Cormorant Garamond** | `var(--font-cormorant)` | 300 / 400 / 500 / 600 / 700 | 标题、展示性文字、引用、编号 — 衬线优雅感 |
| **Montserrat** | `var(--font-montserrat)` | 400 / 500 / 600 / 700 | 正文、按钮、标签、导航栏 — 无衬线现代感 |

### 字号层级

| 层级 | 样式 | 使用场景 |
|------|------|----------|
| Hero 大标题 | `text-5xl md:text-7xl lg:text-8xl` | Hero 区域主标题 |
| Section 标题 | `text-4xl md:text-5xl` 或 `md:text-6xl` | 各模块大标题 |
| 卡片标题 | `text-xl md:text-2xl` 或 `md:text-3xl` | 服务卡、优势卡标题 |
| 正文 | `text-sm` 或 `text-base` | 描述文字 |
| 辅助文字 | `text-xs` | 标签、编号、装饰文字 |

### 文字大小写

- **Section eybrow 标签**：`uppercase tracking-[0.2em]` 全大写 + 宽字距
- **按钮**：`uppercase tracking-[0.2em]` 全大写 + 宽字距
- **导航链接**：`uppercase tracking-[0.15em]` 全大写 + 窄字距
- **正文标题**：正常大小写

---

## 布局 (Layout)

### 版心 (Content Width)

```
max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8
```

所有页面模块统一使用此容器，1280px 最大宽度，居中，响应式内边距。

### Section 间距

```
py-24 md:py-32
```

每个 section 上下间距统一（移动端 96px，桌面端 128px）。

---

## 组件样式规范

### 按钮 (Primary CTA)

```
relative overflow-hidden
inline-flex items-center justify-center
px-10 py-3.5
font-[family-name:var(--font-montserrat)]
text-xs font-semibold tracking-[0.2em] uppercase
text-white bg-[oklch(0.38_0.09_162)]
```

**Hover 效果**：内部覆盖层从左侧滑入
```
<span className="absolute inset-0 bg-[oklch(0.28_0.08_162)] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
<span className="relative z-10">Text</span>
```

### 边框按钮 (Outline Button)

```
px-10 py-3.5
font-[family-name:var(--font-montserrat)]
text-xs font-semibold tracking-[0.2em] uppercase
border border-[oklch(0.38_0.09_162)]
text-[oklch(0.38_0.09_162)]
hover:bg-[oklch(0.38_0.09_162)] hover:text-white
transition-colors duration-300
```

### Section Eyebrow (区域标签)

```
<div className="flex items-center gap-3 mb-5">
  <span className="block w-8 h-px bg-[oklch(0.38_0.09_162)]" />
  <span className="font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase text-[oklch(0.38_0.09_162)]">
    Label
  </span>
</div>
```

### 滚动展示动画 (Reveal)

```
/* CSS */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 使用 IntersectionObserver 动态添加 .visible 类 */
```

### 装饰分割线

绿色细线，悬停时可延展：
```
<div className="w-8 h-px bg-[oklch(0.38_0.09_162)] group-hover:w-16 transition-all duration-500" />
```

### 灰度图片效果

```
.img-bw {
  filter: grayscale(100%);
  transition: filter 0.6s ease;
}
.img-bw:hover,
.group:hover .img-bw {
  filter: grayscale(0%);
}
```

---

## 深色 / 浅色 Section 模式

| Section | 背景色 | 文字色 |
|---------|--------|--------|
| Navbar | 透明 → 滚动后 `oklch(0.10_0.004_60)/95` | 白色系 |
| Hero | `oklch(0.10_0.004_60)` | 白色系 |
| Trust Bar | `oklch(0.38_0.09_162)` (品牌绿底) | 白色 |
| Services | 白色背景 | 深色文字 |
| Process | `oklch(0.10_0.004_60)` (深色) | 白色系 |
| About | 白色背景 | 深色文字 |
| Testimonials | `oklch(0.97_0.005_80)` (浅暖白) | 深色文字 |
| FAQ | 白色背景 | 深色文字 |
| Contact | `oklch(0.10_0.004_60)` (深色) | 白色系 |
| Footer | `oklch(0.08_0.003_60)` | 白色系 |

---

## 设计原则

1. **极简主义** — 大量留白，克制使用色彩，每个设计元素都有目的
2. **衬线 + 无衬线对比** — Cormorant（衬线）用于标题营造优雅感，Montserrat（无衬线）用于正文保证可读性
3. **品牌色克制使用** — 绿色只在按钮、装饰线、hover 态出现，不泛滥
4. **深色切换节奏** — 亮/暗 section 交替排列，形成视觉节奏
5. **微交互动效** — 按钮覆盖层滑动、卡片 hover 变色、分割线延展、滚动渐入，保持克制而精致
