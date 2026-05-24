# Промты для правок проекта Slava Workshop

---

## [1] hero-badges — адаптивность на 768px

На 768px (tablet) в CSS брейкпоинте `@media(max-width:768px)` hero-badges остаются в `flex-direction: row` — три карточки по 231px, что слишком узко. Нужно перенести `flex-direction: column` для `.hero-badges` из брейкпоинта `@media(max-width:480px)` в `@media(max-width:768px)`. Также перенести туда правило `.hero-badge+.hero-badge { border-left: none; border-top: 1px solid var(--border); }` и убрать отдельный блок `@media(max-width:480px)` если он станет пустым. Файл: `css/style.css`.

---
