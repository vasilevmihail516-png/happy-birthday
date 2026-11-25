(() => {
  const KEY = 'for-rita-theme-v1';
  const root = document.documentElement;
  let store;
  try { store = window.localStorage; } catch { store = null; }
  const memory = new Map();
  const safeStore = {
    getItem(k) { try { return store ? store.getItem(k) : (memory.has(k) ? memory.get(k) : null); } catch { return memory.has(k) ? memory.get(k) : null; } },
    setItem(k,v) { try { if (store) { store.setItem(k,String(v)); return; } } catch {} memory.set(k,String(v)); }
  };
  const saved = safeStore.getItem(KEY);
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = saved || (prefersDark ? 'night' : 'day');
  const apply = () => {
    root.dataset.theme = theme;
    const button = document.getElementById('themeToggle');
    if (button) {
      button.innerHTML = theme === 'night' ? '☀ <span>День</span>' : '☾ <span>Ночь</span>';
      button.setAttribute('aria-label', theme === 'night' ? 'Включить светлую тему' : 'Включить тёмную тему');
      button.setAttribute('aria-pressed', String(theme === 'night'));
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'night' ? '#171426' : '#fff7fb';
  };
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('themeToggle');
    if (button) button.addEventListener('click', () => {
      theme = theme === 'night' ? 'day' : 'night';
      safeStore.setItem(KEY, theme);
      apply();
    });
    apply();
  });
  apply();
})();
