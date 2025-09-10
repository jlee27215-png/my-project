// Populate dynamic content: year, links, downloads

function setCurrentYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

async function loadJSON(path) {
  try {
    const res = await fetch(path, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Failed to load ${path}:`, err);
    return null;
  }
}

function renderLinks(list, items) {
  list.innerHTML = '';
  if (!items || items.length === 0) {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = 'No links yet.';
    list.appendChild(li);
    return;
  }
  for (const link of items) {
    const li = document.createElement('li');
    li.className = 'item';
    const a = document.createElement('a');
    a.href = link.url;
    a.target = link.newTab === false ? '_self' : '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = link.title || link.url;
    li.appendChild(a);
    if (link.description) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = link.description;
      li.appendChild(desc);
    }
    list.appendChild(li);
  }
}

function renderFiles(list, items) {
  list.innerHTML = '';
  if (!items || items.length === 0) {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = 'No files available.';
    list.appendChild(li);
    return;
  }
  for (const file of items) {
    const li = document.createElement('li');
    li.className = 'item';
    const a = document.createElement('a');
    a.href = file.path;
    a.download = '';
    a.textContent = file.title || file.path;
    li.appendChild(a);
    const meta = [];
    if (file.size) meta.push(file.size);
    if (file.type) meta.push(file.type);
    if (meta.length) {
      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = meta.join(' • ');
      li.appendChild(badge);
    }
    if (file.description) {
      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = file.description;
      li.appendChild(desc);
    }
    list.appendChild(li);
  }
}

async function init() {
  setCurrentYear();
  const linksList = document.getElementById('links-list');
  const filesList = document.getElementById('files-list');
  const links = await loadJSON('data/links.json');
  const files = await loadJSON('data/files.json');
  if (linksList) renderLinks(linksList, links || []);
  if (filesList) renderFiles(filesList, files || []);
}

document.addEventListener('DOMContentLoaded', init);

