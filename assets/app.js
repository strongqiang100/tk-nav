/* ============================================
   TikTok 知识导航 — 交互
   ============================================ */

(function () {
  'use strict';

  var FAV_KEY = 'tk-nav-favorites-v1';

  var sectionsEl = document.getElementById('sections');
  var catNavEl = document.getElementById('catNav');
  var pathGridEl = document.getElementById('pathGrid');
  var searchInput = document.getElementById('searchInput');
  var searchClear = document.getElementById('searchClear');
  var favToggle = document.getElementById('favToggle');
  var favCountEl = document.getElementById('favCount');
  var resultBar = document.getElementById('resultBar');
  var resultText = document.getElementById('resultText');
  var resetFilterBtn = document.getElementById('resetFilter');
  var emptyEl = document.getElementById('empty');
  var emptySub = document.getElementById('emptySub');
  var topbar = document.getElementById('topbar');
  var toastEl = document.getElementById('toast');

  var state = { query: '', favOnly: false };
  var favorites = loadFavorites();
  var cards = [];

  /* ---------- 收藏存储 ---------- */

  function loadFavorites() {
    try {
      var raw = localStorage.getItem(FAV_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch (e) { /* 隐私模式下静默失败 */ }
  }

  function isFav(key) {
    return favorites.indexOf(key) !== -1;
  }

  /* ---------- 工具 ---------- */

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 1800);
  }

  var EXT_ICON =
    '<svg class="ext" viewBox="0 0 12 12" width="9" height="9" fill="none">' +
    '<path d="M4 2h6v6M10 2L3.5 8.5" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var STAR_ICON =
    '<svg viewBox="0 0 20 20" width="14" height="14" fill="none">' +
    '<path d="M10 2.9l2.25 4.56 5.03.73-3.64 3.55.86 5.01L10 14.39' +
    'l-4.5 2.36.86-5.01L2.72 8.19l5.03-.73L10 2.9z" stroke="currentColor" ' +
    'stroke-width="1.5" stroke-linejoin="round"/></svg>';

  /* ---------- 渲染：起号路径 ---------- */

  function renderPath() {
    pathGridEl.innerHTML = PATH.map(function (p) {
      return (
        '<a class="path-card" href="#cat-' + p.jump + '" data-jump="' + p.jump + '">' +
          '<span class="path-step">STEP ' + p.step + '</span>' +
          '<span class="path-title">' + esc(p.title) + '</span>' +
          '<span class="path-desc">' + esc(p.desc) + '</span>' +
          '<span class="path-arrow">查看相关资源 <span aria-hidden="true">→</span></span>' +
        '</a>'
      );
    }).join('');

    pathGridEl.addEventListener('click', function (e) {
      var card = e.target.closest('.path-card');
      if (!card) return;
      e.preventDefault();
      resetFilters();
      scrollToSection(card.dataset.jump);
    });
  }

  /* ---------- 渲染：侧栏分类 ---------- */

  function renderNav() {
    var all = '<a class="cat-link" href="#top" data-cat="__all">' +
      '<span class="cat-dot"></span>' +
      '<span class="cat-name">全部资源</span>' +
      '<span class="cat-num" data-num="__all">' + totalItems() + '</span></a>';

    var rest = DATA.map(function (cat) {
      return '<a class="cat-link" href="#cat-' + cat.id + '" data-cat="' + cat.id + '">' +
        '<span class="cat-dot"></span>' +
        '<span class="cat-name">' + esc(cat.name) + '</span>' +
        '<span class="cat-num" data-num="' + cat.id + '">' + cat.items.length + '</span>' +
      '</a>';
    }).join('');

    catNavEl.innerHTML = all + rest;

    catNavEl.addEventListener('click', function (e) {
      var link = e.target.closest('.cat-link');
      if (!link) return;
      e.preventDefault();
      var id = link.dataset.cat;
      if (id === '__all') {
        resetFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (state.query || state.favOnly) resetFilters();
      scrollToSection(id);
    });
  }

  function totalItems() {
    return DATA.reduce(function (n, c) { return n + c.items.length; }, 0);
  }

  /* ---------- 渲染：分类 + 卡片 ---------- */

  function renderSections() {
    var html = '';
    var idx = 0;

    DATA.forEach(function (cat) {
      idx++;
      var num = idx < 10 ? '0' + idx : String(idx);

      var cardsHtml = cat.items.map(function (item, i) {
        var key = cat.id + '::' + item.n;
        var search = (item.n + ' ' + item.d + ' ' + item.t.join(' ') + ' ' + cat.name).toLowerCase();
        var delay = Math.min(i, 8) * 28;

        var tags = item.t.map(function (t) {
          var cls = 'tag';
          if (t === '官方') cls += ' hot';
          if (t === '免费' || t === '可商用') cls += ' free';
          return '<span class="' + cls + '">' + esc(t) + '</span>';
        }).join('');

        return (
          '<div class="card" data-key="' + esc(key) + '" data-search="' + esc(search) + '" ' +
            'style="animation-delay:' + delay + 'ms">' +
            '<span class="card-icon t-' + item.tone + '">' + esc(item.ic) + '</span>' +
            '<span class="card-body">' +
              '<span class="card-name">' + esc(item.n) + ' ' + EXT_ICON + '</span>' +
              '<span class="card-desc">' + esc(item.d) + '</span>' +
              '<span class="card-tags">' + tags + '</span>' +
            '</span>' +
            '<button class="star' + (isFav(key) ? ' on' : '') + '" type="button" ' +
              'data-star="' + esc(key) + '" aria-label="收藏 ' + esc(item.n) + '" ' +
              'aria-pressed="' + (isFav(key) ? 'true' : 'false') + '">' + STAR_ICON + '</button>' +
            '<a class="card-hit" href="' + esc(item.u) + '" target="_blank" ' +
              'rel="noopener noreferrer" aria-label="打开 ' + esc(item.n) + '"></a>' +
          '</div>'
        );
      }).join('');

      html +=
        '<section class="cat-section" id="cat-' + cat.id + '" data-cat="' + cat.id + '">' +
          '<div class="cat-header">' +
            '<span class="cat-index">' + num + '</span>' +
            '<div class="cat-head-main">' +
              '<h2 class="cat-title">' + esc(cat.name) +
                '<span class="en">' + esc(cat.en) + '</span></h2>' +
              '<p class="cat-sub">' + esc(cat.desc) + '</p>' +
            '</div>' +
            '<span class="cat-count">' + cat.items.length + ' 项</span>' +
          '</div>' +
          '<div class="card-grid">' + cardsHtml + '</div>' +
        '</section>';
    });

    sectionsEl.innerHTML = html;
    cards = Array.prototype.slice.call(sectionsEl.querySelectorAll('.card'));
  }

  /* ---------- 收藏交互 ---------- */

  sectionsEl.addEventListener('click', function (e) {
    var btn = e.target.closest('.star');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      toggleFav(btn);
    }
  });

  function toggleFav(btn) {
    var key = btn.dataset.star;
    var i = favorites.indexOf(key);

    if (i === -1) {
      favorites.push(key);
      btn.classList.add('on');
      btn.setAttribute('aria-pressed', 'true');
      toast('已加入收藏夹');
    } else {
      favorites.splice(i, 1);
      btn.classList.remove('on');
      btn.setAttribute('aria-pressed', 'false');
      toast('已从收藏夹移除');
    }

    saveFavorites();
    updateFavCount();

    if (state.favOnly) filter();
  }

  function updateFavCount() {
    favCountEl.textContent = favorites.length;
  }

  /* ---------- 筛选 ---------- */

  function filter() {
    var q = state.query.trim().toLowerCase();
    var visibleTotal = 0;
    var perCat = {};

    cards.forEach(function (card) {
      var matchQuery = !q || card.dataset.search.indexOf(q) !== -1;
      var matchFav = !state.favOnly || isFav(card.dataset.key);
      var show = matchQuery && matchFav;

      card.style.display = show ? '' : 'none';
      if (show) {
        visibleTotal++;
        var catId = card.closest('.cat-section').dataset.cat;
        perCat[catId] = (perCat[catId] || 0) + 1;
      }
    });

    // 区块显隐
    Array.prototype.forEach.call(sectionsEl.querySelectorAll('.cat-section'), function (sec) {
      var n = perCat[sec.dataset.cat] || 0;
      sec.hidden = n === 0;
      var badge = sec.querySelector('.cat-count');
      if (badge) {
        badge.textContent = (state.query || state.favOnly) ? n + ' 项匹配' : n + ' 项';
      }
    });

    // 侧栏数字同步
    Array.prototype.forEach.call(catNavEl.querySelectorAll('.cat-num'), function (el) {
      var id = el.dataset.num;
      if (id === '__all') {
        el.textContent = visibleTotal;
      } else {
        el.textContent = perCat[id] || 0;
        var link = el.closest('.cat-link');
        if (link) link.style.opacity = (perCat[id] || 0) === 0 ? 0.42 : 1;
      }
    });

    // 结果条
    var filtering = !!q || state.favOnly;
    if (filtering) {
      resultBar.hidden = false;
      if (state.favOnly && !q) {
        resultText.innerHTML = '收藏夹里有 <b>' + visibleTotal + '</b> 个入口';
      } else if (state.favOnly && q) {
        resultText.innerHTML = '收藏夹中匹配「<b>' + esc(q) + '</b>」的有 <b>' + visibleTotal + '</b> 个';
      } else {
        resultText.innerHTML = '「<b>' + esc(q) + '</b>」找到 <b>' + visibleTotal + '</b> 个入口';
      }
    } else {
      resultBar.hidden = true;
    }

    // 空状态
    if (visibleTotal === 0) {
      emptyEl.hidden = false;
      emptySub.textContent = state.favOnly
        ? (q ? '收藏夹里没有匹配这项的入口。' : '还没有收藏。把鼠标移到卡片上，点右上角的星标。')
        : '换个关键词试试，比如「选品」「剪辑」「收款」。';
    } else {
      emptyEl.hidden = true;
    }

    searchClear.hidden = !q;
    updateActiveNav();
  }

  function resetFilters() {
    state.query = '';
    state.favOnly = false;
    searchInput.value = '';
    favToggle.setAttribute('aria-pressed', 'false');
    filter();
  }

  /* ---------- 搜索 ---------- */

  var searchTimer = null;
  searchInput.addEventListener('input', function () {
    clearTimeout(searchTimer);
    var v = searchInput.value;
    searchTimer = setTimeout(function () {
      state.query = v;
      filter();
    }, 90);
  });

  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      searchInput.value = '';
      state.query = '';
      filter();
      searchInput.blur();
    }
  });

  searchClear.addEventListener('click', function () {
    searchInput.value = '';
    state.query = '';
    filter();
    searchInput.focus();
  });

  favToggle.addEventListener('click', function () {
    state.favOnly = !state.favOnly;
    favToggle.setAttribute('aria-pressed', state.favOnly ? 'true' : 'false');
    filter();
    if (state.favOnly) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  resetFilterBtn.addEventListener('click', function () {
    resetFilters();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
  });

  /* ---------- 滚动 ---------- */

  function scrollToSection(id) {
    var el = document.getElementById('cat-' + id);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  var activeId = null;
  function updateActiveNav() {
    if (state.query || state.favOnly) {
      // 筛选状态下不高亮分类
      setActive('');
      return;
    }

    var best = '';
    var bestTop = -Infinity;
    var threshold = 140;

    Array.prototype.forEach.call(sectionsEl.querySelectorAll('.cat-section'), function (sec) {
      if (sec.hidden) return;
      var top = sec.getBoundingClientRect().top;
      if (top <= threshold && top > bestTop) {
        bestTop = top;
        best = sec.dataset.cat;
      }
    });

    if (!best && window.pageYOffset < 240) best = '__all';
    setActive(best);
  }

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    Array.prototype.forEach.call(catNavEl.querySelectorAll('.cat-link'), function (link) {
      link.classList.toggle('active', link.dataset.cat === id);
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      topbar.classList.toggle('scrolled', window.pageYOffset > 6);
      updateActiveNav();
      ticking = false;
    });
  }, { passive: true });

  /* ---------- 启动 ---------- */

  function init() {
    renderPath();
    renderNav();
    renderSections();
    updateFavCount();
    document.getElementById('totalCount').textContent = totalItems();
    document.getElementById('statLinks').textContent = totalItems();
    topbar.classList.toggle('scrolled', window.pageYOffset > 6);
    updateActiveNav();
  }

  init();
})();
