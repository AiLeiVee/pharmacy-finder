/* Kenitra & Tangier Pharmacy Site Finder — multi-city, mirror-backed */
(function () {
  'use strict';

  // ============================================================
  // CITIES — add a new one by adding a new key here.
  // Seed list can be empty; the OSM fetch button fills it in.
  // ============================================================
  const CITIES = {
    kenitra: {
      label: 'Kenitra',
      center: [34.2520, -6.5950],
      zoom: 13,
      bbox: { latMin: 34.185, latMax: 34.305, lngMin: -6.700, lngMax: -6.500 },
      seed: [
        ["Pharmacie de La Ville Haute","15 Rue Jamil Sidki Zouhaoui",34.2621276,-6.5889591],
        ["KENIPHARMA","Angle Rue Saad Zaghloul and Rue Moulay Slimane",34.2662784,-6.5913151],
        ["Pharmacie Bir Rami Sud","Sud, N1",34.2342551,-6.6066003],
        ["Belhachmi Pharmacy","Lotissement Haddada",34.2673888,-6.6241978],
        ["Pharmacie Al Ghofrane","Lotis El Ouafaa 3, Saknia",34.2331749,-6.5464161],
        ["Pharmacie Al Azhar","Kenitra",34.2487957,-6.6047751],
        ["Pharmacie Zouhair","Kenitra",34.2300827,-6.5471403],
        ["Pharmacie Moustachfa Idrissi","Near Al Idrissi Hospital",34.2495924,-6.5795514],
        ["Mimosas Pharmacy","Av. Mohamed V",34.2567028,-6.5924494],
        ["Pharmacie Fouarat","Kenitra",34.2528305,-6.5216863],
        ["Pharmacie Abbouda","Kenitra",34.2551876,-6.5242646],
        ["Pharmacie et Parapharmacie Centrale Bir Rami","Bir Rami",34.2198313,-6.6201388],
        ["Pharmacie Korchi","161 Bir Rami Ouest",34.2447456,-6.6077072],
        ["Pharmacie Sirine","Lot 988, Bir Rami Sud",34.2318395,-6.6093291],
        ["Pharmacie Badyine","Kenitra",34.2315337,-6.6175012],
        ["Pharmacie et Parapharmacie Azzahrae","Kenitra",34.2503433,-6.6203181],
        ["Pharmacie Populaire Bir Rami","Kenitra",34.2177855,-6.616263],
        ["Pharmacie Saknia","Avenue F, Saknia",34.2458258,-6.5475223],
        ["Pharmacie Yaacoub","Lotissement Al Andalous, Saknia",34.2461485,-6.5418987],
        ["Pharmacie Principale","204 Av. Mohamed V",34.2639888,-6.5682119],
        ["Pharmacie de la Mosquee","90 Hay Chabab, Saknia",34.2515784,-6.5467643],
        ["Pharmacie Hay Jamii","44 Lot Hay Tanchit, Saknia",34.2486295,-6.5584021],
        ["Pharmacie As-Safaa","Lot 878, Saknia",34.2442793,-6.5450487],
        ["Pharmacie Saoumaa","Kenitra",34.2509218,-6.6089656],
        ["Pharmacie Principale Al Bassatine","Kenitra",34.2553221,-6.5202191],
        ["Maamoura Pharmacy","Kenitra",34.2564123,-6.5862631],
        ["Pharmacie Centre Ville","Kenitra",34.2567112,-6.5851768],
        ["La Grande Pharmacie","62 Av. Mohamed Diouri",34.2608183,-6.5853957],
        ["Pharmacie Moderne","39 Rue Jbala / Rue Loubnane",34.2652388,-6.5923733],
        ["The Province Pharmacy","Av. Hassan II",34.2595289,-6.5807169],
        ["Pharmacie Ibn Khaldoune","Route Assaknia, Maamoura",34.2420902,-6.5535153],
        ["Pharmacie Saad Kenitra","69 Houmane El Fetouaki",34.2624622,-6.5943305],
        ["Pharmacie Doha Assam","Kenitra",34.2835526,-6.5334306],
        ["Pharmacie Val Fleury","Av. Antara",34.2684912,-6.5933801],
        ["Paraval Parapharmacie et Paramedical","Residence Ennakhil, Rue Ahmed Chaouki",34.2673134,-6.5930681],
        ["Pharmacie Karam","Lotissement Le Vallon",34.2629907,-6.6052981],
        ["Pharmacie Belahcen","Kenitra",34.2516003,-6.6794813],
        ["Mehdia Parapharmacie","44 Alliance",34.2477004,-6.6558452],
        ["Pharmacie Ezzahiri","Lot 18C, Alliances Darna",34.2460464,-6.6546074],
        ["Pharmacie Mehdia","Mehdia",34.2648875,-6.6518921],
        ["Pharmacie Riahi","Mehdia",34.2507786,-6.6512826],
        ["Al Kaouthar Pharmacy","Res Alliance d'Arnaud S4",34.249265,-6.654206],
        ["Pharmacie Familiale","Kenitra",34.2434766,-6.6528977],
        ["Pharmacie de Mehdia","Mehdia",34.2548446,-6.6770767],
        ["Pharmacy Ouled Oujih","Kenitra",34.264073,-6.613409],
        ["PARA Podium Ouled Oujih","Bloc K 355",34.2579476,-6.6217622],
        ["LOTUS SANTE","Bloc K, n13",34.2604577,-6.6210884],
        ["Pharmacie de la Gare","162 Av. Mohamed Diouri",34.2546611,-6.5818908],
        ["Comptoir Medical Rahma","Kenitra",34.2492308,-6.5796327],
        ["Pharmacie Takaddoum","Kenitra",34.2656016,-6.5738878],
        ["Pharmacie et Parapharmacie Chateau","Kenitra",34.2554844,-6.6269531],
        ["Pharmacie de l'Ecole","Kenitra",34.2627244,-6.6209935],
        ["Pharmacie des FAR","Ave des FAR",34.2542274,-6.579398],
        ["Pharmacie Hay Tbib","Hay Ennasma, Rue 144",34.2557523,-6.5524032],
        ["Life Pharmacy","Av. Abi Chita Eljamii",34.238348,-6.6169678],
        ["Hind Pharmacy","Bd Youssef Ibn Tachfin / Rue Farahat Hachad",34.2562471,-6.5760572],
        ["Pharmacie Al Manar","Kenitra",34.2443439,-6.6169077],
        ["Pharmacie El Kods","Lot 106, Secteur G1",34.2625971,-6.6174774]
      ]
    },
    tangier: {
      label: 'Tangier',
      center: [35.7595, -5.8340],
      zoom: 13,
      bbox: { latMin: 35.700, latMax: 35.850, lngMin: -5.950, lngMax: -5.720 },
      // Empty by design — click "Merge pharmacies from OpenStreetMap"
      // to populate live. Export to JSON to save it permanently.
      seed: []
    }
  };

  const DEFAULT_CITY = 'kenitra';
  const DEDUP_RADIUS_M = 50;
  const OVERPASS_MIRRORS = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://overpass.private.coffee/api/interpreter'
  ];
  const NOMINATIM = 'https://nominatim.openstreetmap.org';

  // ============================================================
  // State
  // ============================================================
  let currentCityKey = DEFAULT_CITY;
  let pharmacies = [];
  let radiusM = 300;
  let addMode = false;
  let pendingLatLng = null;

  const storageKey = () => 'pharmacy-finder-v5-' + currentCityKey;
  const cityConfig = () => CITIES[currentCityKey];
  const bbox = () => cityConfig().bbox;

  // ============================================================
  // Map setup
  // ============================================================
  const map = L.map('map', { zoomControl: true })
    .setView(cityConfig().center, cityConfig().zoom);

  const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const satTiles = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 19, attribution: 'Tiles &copy; Esri' }
  );
  L.control.layers({ Streets: osmTiles, Satellite: satTiles }, {}, { position: 'topright' }).addTo(map);

  const markerLayer = L.layerGroup().addTo(map);
  const circleLayer = L.layerGroup().addTo(map);
  const candidateLayer = L.layerGroup().addTo(map);

  // ============================================================
  // Geometry helpers
  // ============================================================
  const M_PER_DEG_LAT = 110574;
  function mPerDegLng() {
    return 111320 * Math.cos(cityConfig().center[0] * Math.PI / 180);
  }

  function haversine(lat1, lng1, lat2, lng2) {
    const R = 6371000;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1), dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  // ============================================================
  // Overpass with mirror fallback + retry
  // ============================================================
  async function runOverpass(query) {
    let lastErr = null;
    for (let attempt = 0; attempt < 2; attempt++) {
      for (const mirror of OVERPASS_MIRRORS) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 30000);
          const res = await fetch(mirror, {
            method: 'POST',
            body: 'data=' + encodeURIComponent(query),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            signal: controller.signal
          });
          clearTimeout(timer);
          if (res.ok) return await res.json();
          lastErr = new Error('HTTP ' + res.status + ' from ' + mirror);
        } catch (e) {
          lastErr = e;
        }
      }
      // All mirrors failed this attempt — wait and retry once
      if (attempt === 0) await new Promise(r => setTimeout(r, 2500));
    }
    throw lastErr || new Error('All Overpass mirrors failed');
  }

  // ============================================================
  // Rendering
  // ============================================================
  function pharmIcon(color) {
    return L.divIcon({
      className: '',
      html: `<div style="width:16px;height:16px;border-radius:50% 50% 50% 0;background:${color};transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4);"></div>`,
      iconSize: [16, 16], iconAnchor: [8, 16]
    });
  }

  function renderAll() {
    markerLayer.clearLayers();
    circleLayer.clearLayers();

    pharmacies.forEach(p => {
      const isAdded = p.source === 'added';
      const color = isAdded ? '#6E5AA8' : '#D98C2B';
      const circleColor = isAdded ? '#6E5AA8' : '#C1483A';

      const marker = L.marker([p.lat, p.lng], { icon: pharmIcon(color) });
      let popup = `<b>${escapeHtml(p.name)}</b>` +
                  `<div class="popup-coords">${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}</div>`;
      if (p.addr) popup += `<div style="font-size:.75rem;color:#666;margin-top:2px;">${escapeHtml(p.addr)}</div>`;
      popup += `<button class="popup-del" data-id="${p.id}" type="button">Remove this pin</button>`;
      marker.bindPopup(popup);
      marker.on('popupopen', () => {
        const el = document.querySelector(`.popup-del[data-id="${p.id}"]`);
        if (el) el.addEventListener('click', () => { removePharmacy(p.id); map.closePopup(); });
      });
      markerLayer.addLayer(marker);

      const circle = L.circle([p.lat, p.lng], {
        radius: radiusM, color: circleColor, weight: 1.6,
        fillColor: circleColor, fillOpacity: 0.09, dashArray: '5,5'
      });
      circleLayer.addLayer(circle);
    });

    updateStats();
    renderList();
    persistState();
  }

  function updateStats() {
    document.getElementById('statTotal').textContent = pharmacies.length;
    document.getElementById('statAdded').textContent =
      pharmacies.filter(p => p.source === 'added').length;
    document.getElementById('listCount').textContent = pharmacies.length;
  }

  function renderList() {
    const list = document.getElementById('pharmList');
    list.innerHTML = '';
    const sorted = pharmacies.slice().sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(p => {
      const div = document.createElement('div');
      div.className = 'pharm-item';
      div.innerHTML =
        `<button class="jump" type="button" aria-label="Show ${escapeHtml(p.name)} on map">` +
          `<div class="pname">${escapeHtml(p.name)}</div>` +
          `<div class="paddr">${escapeHtml(p.addr || '')}</div>` +
        `</button>` +
        `<div class="tag ${p.source === 'added' ? 'added' : 'existing'}">${p.source === 'added' ? 'added' : 'listed'}</div>` +
        `<button class="del-btn" type="button" aria-label="Delete ${escapeHtml(p.name)}" title="Delete">&times;</button>`;
      div.querySelector('.jump').addEventListener('click', () => {
        map.setView([p.lat, p.lng], 16, { animate: true });
      });
      div.querySelector('.del-btn').addEventListener('click', () => removePharmacy(p.id));
      list.appendChild(div);
    });
  }

  function removePharmacy(id) {
    const target = pharmacies.find(p => p.id === id);
    if (!target) return;
    if (!confirm(`Remove "${target.name}" from the map?`)) return;
    pharmacies = pharmacies.filter(p => p.id !== id);
    renderAll();
  }

  // ============================================================
  // City switcher
  // ============================================================
  function setCity(cityKey) {
    if (!CITIES[cityKey]) return;
    currentCityKey = cityKey;
    candidateLayer.clearLayers();
    document.getElementById('candidateList').innerHTML = '';
    document.getElementById('statCandidates').textContent = '0';
    document.getElementById('osmStatus').textContent = '';
    document.getElementById('linkStatus').textContent = '';

    const cfg = cityConfig();
    map.setView(cfg.center, cfg.zoom);
    loadState();
    renderAll();
  }

  const citySelect = document.getElementById('citySelect');
  if (citySelect) {
    citySelect.value = currentCityKey;
    citySelect.addEventListener('change', e => setCity(e.target.value));
  }

  // ============================================================
  // Add pharmacy by click
  // ============================================================
  const addModeBtn = document.getElementById('addModeBtn');
  addModeBtn.addEventListener('click', () => {
    addMode = !addMode;
    addModeBtn.classList.toggle('active-mode', addMode);
    addModeBtn.textContent = addMode ? 'Tap the map to place pin…' : '+ Add pharmacy on map';
    map.getContainer().style.cursor = addMode ? 'crosshair' : '';
  });

  map.on('click', e => {
    if (!addMode) return;
    pendingLatLng = e.latlng;
    const overlay = document.getElementById('modalOverlay');
    document.getElementById('modalCoords').textContent =
      `${e.latlng.lat.toFixed(5)}, ${e.latlng.lng.toFixed(5)}`;
    document.getElementById('modalNameInput').value = '';
    const status = document.getElementById('modalLookupStatus');
    status.className = 'lookup-status busy';
    status.textContent = 'Searching OpenStreetMap…';
    overlay.classList.remove('hidden');
    document.getElementById('modalNameInput').focus();
    lookupNearbyPharmacy(e.latlng.lat, e.latlng.lng);
  });

  async function lookupNearbyPharmacy(lat, lng) {
    const status = document.getElementById('modalLookupStatus');
    const nameInput = document.getElementById('modalNameInput');
    const myLatLng = pendingLatLng;

    try {
      const query = `[out:json][timeout:15];
        (
          node["amenity"="pharmacy"](around:100,${lat},${lng});
          way["amenity"="pharmacy"](around:100,${lat},${lng});
        );
        out center tags;`;
      const data = await runOverpass(query);
      if (pendingLatLng !== myLatLng) return;

      const elements = data.elements || [];
      if (elements.length > 0) {
        const withName = elements.filter(el => el.tags && el.tags.name);
        const pick = (withName.length ? withName : elements)
          .map(el => {
            const elLat = el.lat != null ? el.lat : el.center && el.center.lat;
            const elLng = el.lon != null ? el.lon : el.center && el.center.lon;
            return { el, d: (elLat != null) ? haversine(lat, lng, elLat, elLng) : Infinity };
          })
          .sort((a, b) => a.d - b.d)[0];

        const t = pick.el.tags || {};
        const name = t.name || t['name:fr'] || t['name:ar'] || '';
        if (name) {
          nameInput.value = name;
          const addr = t['addr:street'] ? `, ${t['addr:street']}` : '';
          status.className = 'lookup-status found';
          status.textContent = `Found "${name}"${addr} (${Math.round(pick.d)} m away). Edit if needed.`;
          return;
        }
      }

      const rev = await fetch(
        `${NOMINATIM}/reverse?format=json&lat=${lat}&lon=${lng}&zoom=16&addressdetails=1`
      );
      if (pendingLatLng !== myLatLng) return;
      const revData = await rev.json();
      const a = revData.address || {};
      const hood = a.neighbourhood || a.suburb || a.city_district || a.village || a.town;
      status.className = 'lookup-status none';
      status.textContent = hood
        ? `No pharmacy found at this exact point. Nearest area: ${hood}. Enter the name manually.`
        : 'No pharmacy found nearby in OpenStreetMap. Enter the name manually.';
    } catch (err) {
      if (pendingLatLng !== myLatLng) return;
      status.className = 'lookup-status err';
      status.textContent = 'All Overpass mirrors are busy. Enter the name manually.';
    }
  }

  // ============================================================
  // Modal
  // ============================================================
  const overlay = document.getElementById('modalOverlay');
  const modalNameInput = document.getElementById('modalNameInput');
  let lastFocused = null;

  function closeModal() {
    overlay.classList.add('hidden');
    pendingLatLng = null;
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.getElementById('modalCancel').addEventListener('click', () => {
    closeModal();
    if (addMode) {
      addMode = false;
      addModeBtn.classList.remove('active-mode');
      addModeBtn.textContent = '+ Add pharmacy on map';
      map.getContainer().style.cursor = '';
    }
  });

  document.getElementById('modalConfirm').addEventListener('click', () => {
    const name = modalNameInput.value.trim() || 'Unnamed pharmacy';
    if (pendingLatLng) {
      pharmacies.push({
        id: 'added-' + Date.now(),
        name,
        addr: 'Added manually',
        lat: pendingLatLng.lat,
        lng: pendingLatLng.lng,
        source: 'added'
      });
      renderAll();
    }
    closeModal();
    if (addMode) {
      addMode = false;
      addModeBtn.classList.remove('active-mode');
      addModeBtn.textContent = '+ Add pharmacy on map';
      map.getContainer().style.cursor = '';
    }
  });

  overlay.addEventListener('keydown', e => {
    if (e.key === 'Escape') { document.getElementById('modalCancel').click(); return; }
    if (e.key !== 'Tab') return;
    const focusables = overlay.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // ============================================================
  // Add by link
  // ============================================================
  function parseCoords(text) {
    text = (text || '').trim();
    const patterns = [
      /!3d(-?\d{1,3}\.\d+)!4d(-?\d{1,3}\.\d+)/,
      /[?&]q=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]query=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]ll=(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /[?&]mlat=(-?\d{1,3}\.\d+).*?mlon=(-?\d{1,3}\.\d+)/,
      /@(-?\d{1,3}\.\d+),(-?\d{1,3}\.\d+)/,
      /^(-?\d{1,3}\.\d+)\s*,\s*(-?\d{1,3}\.\d+)$/
    ];
    for (const re of patterns) {
      const m = text.match(re);
      if (m) {
        const lat = parseFloat(m[1]), lng = parseFloat(m[2]);
        if (Math.abs(lat) <= 90 && Math.abs(lng) <= 180) return { lat, lng };
      }
    }
    return null;
  }

  document.getElementById('addFromLinkBtn').addEventListener('click', () => {
    const statusEl = document.getElementById('linkStatus');
    const raw = document.getElementById('linkInput').value.trim();
    const name = document.getElementById('linkNameInput').value.trim();

    if (!raw) { statusEl.className = 'lookup-status none'; statusEl.textContent = 'Paste a link or coordinates first.'; return; }
    if (!name) { statusEl.className = 'lookup-status none'; statusEl.textContent = 'Give the pharmacy a name too.'; return; }
    if (/goo\.gl|maps\.app/.test(raw) && !/[@?]|!3d/.test(raw)) {
      statusEl.className = 'lookup-status none';
      statusEl.textContent = 'Short link. Open it in a tab first, then paste the full URL (or just the coordinates).';
      return;
    }

    const coords = parseCoords(raw);
    if (!coords) {
      statusEl.className = 'lookup-status none';
      statusEl.textContent = "Couldn't find coordinates. Try the full URL or 'lat, lng'.";
      return;
    }

    pharmacies.push({
      id: 'added-' + Date.now(),
      name, addr: 'Added via link',
      lat: coords.lat, lng: coords.lng, source: 'added'
    });
    renderAll();
    map.setView([coords.lat, coords.lng], 16, { animate: true });
    document.getElementById('linkInput').value = '';
    document.getElementById('linkNameInput').value = '';
    statusEl.className = 'lookup-status found';
    statusEl.textContent = `Added "${name}" at ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}.`;
  });

  // ============================================================
  // Radius
  // ============================================================
  document.getElementById('redrawBtn').addEventListener('click', () => {
    const v = parseInt(document.getElementById('radiusInput').value, 10);
    if (!isNaN(v) && v > 0) { radiusM = v; renderAll(); }
  });

  // ============================================================
  // Candidate finder
  // ============================================================
  document.getElementById('findBtn').addEventListener('click', findCandidates);

  async function findCandidates() {
    const btn = document.getElementById('findBtn');
    const listEl = document.getElementById('candidateList');
    candidateLayer.clearLayers();
    btn.disabled = true;
    btn.textContent = 'Scanning grid…';

    const box = bbox();
    const stepM = 150;
    const latStep = stepM / M_PER_DEG_LAT;
    const lngStep = stepM / mPerDegLng();
    const valid = [];
    for (let lat = box.latMin; lat <= box.latMax; lat += latStep) {
      for (let lng = box.lngMin; lng <= box.lngMax; lng += lngStep) {
        let minDist = Infinity;
        for (let i = 0; i < pharmacies.length; i++) {
          const d = haversine(lat, lng, pharmacies[i].lat, pharmacies[i].lng);
          if (d < minDist) minDist = d;
          if (minDist < radiusM) break;
        }
        if (minDist >= radiusM) valid.push({ lat, lng, minDist });
      }
    }

    if (valid.length === 0) {
      listEl.innerHTML = '<div class="empty-note">No open spots found. Try a smaller radius or fetch more pharmacies first.</div>';
      document.getElementById('statCandidates').textContent = '0';
      btn.disabled = false;
      btn.textContent = 'Find valid locations';
      return;
    }

    const contextR = Math.max(radiusM * 3, radiusM + 600);
    valid.forEach(c => {
      c.contextR = contextR;
      c.nearbyCount = pharmacies.reduce((n, p) =>
        n + (haversine(c.lat, c.lng, p.lat, p.lng) <= contextR ? 1 : 0), 0);
    });

    const between = valid.filter(c => c.nearbyCount >= 2);
    const pool = between.length > 0 ? between : valid;

    pool.sort((a, b) => a.minDist - b.minDist);
    const clusterR = Math.max(radiusM, 350);
    const chosen = [];
    for (const cand of pool) {
      if (chosen.some(c => haversine(cand.lat, cand.lng, c.lat, c.lng) < clusterR)) continue;
      chosen.push(cand);
      if (chosen.length >= 18) break;
    }

    btn.textContent = 'Measuring building density…';
    try {
      await measureDensity(chosen);
    } catch (err) {
      chosen.forEach(c => { c.buildings = null; c.density = 'unknown'; });
    }

    chosen.sort((a, b) => {
      const ab = a.buildings == null ? -1 : a.buildings;
      const bb = b.buildings == null ? -1 : b.buildings;
      if (bb !== ab) return bb - ab;
      return b.minDist - a.minDist;
    });

    renderCandidates(chosen);
    document.getElementById('statCandidates').textContent = chosen.length;
    btn.disabled = false;
    btn.textContent = 'Find valid locations';
  }

  async function measureDensity(candidates) {
    if (candidates.length === 0) return;
    const DENSITY_R = 250;
    const clauses = candidates.map(c =>
      `node["building"](around:${DENSITY_R},${c.lat},${c.lng});` +
      `way["building"](around:${DENSITY_R},${c.lat},${c.lng});`
    ).join('\n');
    const query = `[out:json][timeout:25];\n(\n${clauses}\n);\nout center;`;

    const data = await runOverpass(query);
    const els = data.elements || [];

    candidates.forEach(c => { c.buildings = 0; });

    els.forEach(el => {
      const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
      const lng = el.lon != null ? el.lon : (el.center && el.center.lon);
      if (lat == null) return;
      candidates.forEach(c => {
        if (haversine(c.lat, c.lng, lat, lng) <= DENSITY_R) c.buildings++;
      });
    });

    candidates.forEach(c => {
      if (c.buildings >= 120) c.density = 'high';
      else if (c.buildings >= 50) c.density = 'medium';
      else c.density = 'low';
    });
  }

  function densityLabel(d) {
    if (d === 'high') return 'high building density';
    if (d === 'medium') return 'moderate building density';
    if (d === 'low') return 'low building density';
    return 'density unknown';
  }

  function renderCandidates(chosen) {
    const listEl = document.getElementById('candidateList');
    if (chosen.length === 0) {
      listEl.innerHTML = '<div class="empty-note">No candidates after filtering.</div>';
      return;
    }
    listEl.innerHTML = '';
    chosen.forEach((c, i) => {
      const marker = L.circleMarker([c.lat, c.lng], {
        radius: 8, color: '#2F8F5B', weight: 2, fillColor: '#5BC98A', fillOpacity: 0.85
      });
      const bldgTxt = c.buildings == null ? 'building data unavailable' : `${c.buildings} buildings within 250 m`;
      marker.bindPopup(
        `<b>Candidate site ${i + 1}</b>` +
        `<div class="popup-coords">${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}</div>` +
        `<div style="font-size:.75rem;margin-top:2px;">${Math.round(c.minDist)} m clear of nearest pharmacy</div>` +
        `<div style="font-size:.75rem;color:#666;">${c.nearbyCount} pharmacies within ~${Math.round(c.contextR)} m</div>` +
        `<div style="font-size:.75rem;color:#666;">${bldgTxt} — ${densityLabel(c.density)}</div>`
      );
      candidateLayer.addLayer(marker);

      const row = document.createElement('div');
      row.className = 'candidate-item';
      row.innerHTML =
        `<button class="jump" type="button" aria-label="Show candidate ${i + 1} on map">` +
          `<div class="cname">#${i + 1} — ${Math.round(c.minDist)} m clear</div>` +
          `<div class="cmeta">${bldgTxt} — ${densityLabel(c.density)}<br>` +
          `boxed by ${c.nearbyCount} nearby pharmacies<br>` +
          `${c.lat.toFixed(5)}, ${c.lng.toFixed(5)}</div>` +
        `</button>` +
        `<a href="https://www.google.com/maps?q=${c.lat},${c.lng}" target="_blank" rel="noopener">Open in Google Maps</a>`;
      row.querySelector('.jump').addEventListener('mouseenter', () => marker.setStyle({ radius: 11 }));
      row.querySelector('.jump').addEventListener('mouseleave', () => marker.setStyle({ radius: 8 }));
      row.querySelector('.jump').addEventListener('click', () => {
        map.setView([c.lat, c.lng], 16, { animate: true });
        marker.openPopup();
      });
      listEl.appendChild(row);
    });
  }

  // ============================================================
  // Merge from OSM (mirror-backed)
  // ============================================================
  document.getElementById('fetchOsmBtn').addEventListener('click', async () => {
    const status = document.getElementById('osmStatus');
    const btn = document.getElementById('fetchOsmBtn');
    btn.disabled = true;
    status.className = 'lookup-status busy';
    status.textContent = 'Querying OpenStreetMap (trying mirrors)…';

    try {
      const box = bbox();
      const query = `[out:json][timeout:25];
        (
          node["amenity"="pharmacy"](${box.latMin},${box.lngMin},${box.latMax},${box.lngMax});
          way["amenity"="pharmacy"](${box.latMin},${box.lngMin},${box.latMax},${box.lngMax});
        );
        out center tags;`;
      const data = await runOverpass(query);
      const elements = data.elements || [];

      if (elements.length === 0) {
        status.className = 'lookup-status none';
        status.textContent = 'OpenStreetMap returned no pharmacies in this area.';
        return;
      }

      const seen = new Set();
      const osmCandidates = [];
      elements.forEach(el => {
        const lat = el.lat != null ? el.lat : (el.center && el.center.lat);
        const lng = el.lon != null ? el.lon : (el.center && el.center.lon);
        if (lat == null || lng == null) return;
        const key = lat.toFixed(5) + ',' + lng.toFixed(5);
        if (seen.has(key)) return;
        seen.add(key);
        const t = el.tags || {};
        const name = t.name || t['name:fr'] || t['name:ar'] || 'Unnamed pharmacy';
        const addr = [t['addr:street'], t['addr:housenumber']].filter(Boolean).join(' ');
        osmCandidates.push({
          id: 'osm-' + el.type + '-' + el.id,
          name,
          addr: addr || 'OpenStreetMap',
          lat, lng,
          source: 'existing'
        });
      });

      let added = 0, skipped = 0;
      osmCandidates.forEach(cand => {
        const dup = pharmacies.some(p => haversine(p.lat, p.lng, cand.lat, cand.lng) < DEDUP_RADIUS_M);
        if (dup) { skipped++; return; }
        pharmacies.push(cand);
        added++;
      });

      renderAll();
      status.className = 'lookup-status found';
      status.textContent = added > 0
        ? `Merged ${added} new pharmac${added === 1 ? 'y' : 'ies'} from OpenStreetMap. ${skipped} skipped as duplicates.`
        : `No new pharmacies found — all ${skipped} OSM results were already on your map.`;
    } catch (err) {
      status.className = 'lookup-status err';
      status.textContent = 'All Overpass mirrors are busy. Please try again in a minute.';
    } finally {
      btn.disabled = false;
    }
  });

  // ============================================================
  // Restore built-in seed
  // ============================================================
  document.getElementById('restoreSeedBtn').addEventListener('click', () => {
    const seed = cityConfig().seed;
    if (seed.length === 0) {
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status none';
      status.textContent = 'No built-in list for this city — use "Merge pharmacies from OpenStreetMap" instead.';
      return;
    }
    if (!confirm('Replace the current pharmacy list with the built-in seed list? Your added pins will be kept.')) return;
    const added = pharmacies.filter(p => p.source === 'added');
    pharmacies = seed.map((p, i) => ({
      id: 'seed-' + i, name: p[0], addr: p[1], lat: p[2], lng: p[3], source: 'existing'
    })).concat(added);
    renderAll();
    const status = document.getElementById('osmStatus');
    status.className = 'lookup-status found';
    status.textContent = `Restored ${seed.length} built-in pharmacies.`;
  });

  // ============================================================
  // Persistence
  // ============================================================
  function setSyncStatus(state, text) {
    const dot = document.getElementById('syncDot');
    const label = document.getElementById('syncText');
    if (!dot || !label) return;
    dot.className = 'sync-dot ' + state;
    label.textContent = text;
  }

  function seedList() {
    return cityConfig().seed.map((p, i) => ({
      id: 'seed-' + i, name: p[0], addr: p[1], lat: p[2], lng: p[3], source: 'existing'
    }));
  }

  function loadState() {
    pharmacies = seedList();
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) {
        setSyncStatus('ok', 'Ready. Your changes are saved in this browser.');
        return;
      }
      const data = JSON.parse(raw);
      const added = Array.isArray(data.addedPharmacies) ? data.addedPharmacies : [];
      added.forEach(p => {
        const dup = pharmacies.some(existing =>
          haversine(existing.lat, existing.lng, p.lat, p.lng) < DEDUP_RADIUS_M);
        if (!dup) pharmacies.push({ ...p, source: 'added' });
      });
      if (data.radiusM) radiusM = data.radiusM;
      setSyncStatus('ok', 'Restored your saved pins.');
    } catch (err) {
      setSyncStatus('err', "Couldn't read saved data. Starting fresh.");
    }
  }

  let persistTimer = null;
  function persistState() {
    if (persistTimer) clearTimeout(persistTimer);
    persistTimer = setTimeout(() => {
      try {
        const added = pharmacies
          .filter(p => p.source === 'added')
          .map(p => ({ id: p.id, name: p.name, addr: p.addr, lat: p.lat, lng: p.lng }));
        localStorage.setItem(storageKey(), JSON.stringify({
          addedPharmacies: added,
          radiusM
        }));
        setSyncStatus('ok', 'Saved.');
      } catch (err) {
        setSyncStatus('err', "Couldn't save (storage full or blocked).");
      }
    }, 300);
  }

  // ============================================================
  // Export / Import
  // ============================================================
  document.getElementById('exportBtn').addEventListener('click', () => {
    const payload = {
      version: 5,
      city: currentCityKey,
      exportedAt: new Date().toISOString(),
      pharmacies: pharmacies.map(p => ({
        id: p.id, name: p.name, addr: p.addr, lat: p.lat, lng: p.lng, source: p.source
      })),
      radiusM
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentCityKey}-pharmacies-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFile').click();
  });

  document.getElementById('importFile').addEventListener('change', async e => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      if (!Array.isArray(data.pharmacies)) throw new Error('Bad format');
      pharmacies = data.pharmacies.map((p, i) => ({
        id: p.id || ('imported-' + i + '-' + Date.now()),
        name: p.name || 'Unnamed pharmacy',
        addr: p.addr || 'Imported',
        lat: +p.lat, lng: +p.lng,
        source: p.source === 'added' ? 'added' : 'existing'
      })).filter(p => isFinite(p.lat) && isFinite(p.lng));
      if (data.radiusM) {
        radiusM = data.radiusM;
        document.getElementById('radiusInput').value = radiusM;
      }
      renderAll();
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status found';
      status.textContent = `Imported ${pharmacies.length} pharmacies.`;
    } catch (err) {
      const status = document.getElementById('osmStatus');
      status.className = 'lookup-status err';
      status.textContent = 'Import failed: not a valid export file.';
    } finally {
      e.target.value = '';
    }
  });

  // ============================================================
  // Reset
  // ============================================================
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (!confirm('Reset everything — radius, added pins, candidates, saved data for this city?')) return;
    localStorage.removeItem(storageKey());
    radiusM = 300;
    document.getElementById('radiusInput').value = 300;
    pharmacies = seedList();
    candidateLayer.clearLayers();
    document.getElementById('candidateList').innerHTML = '';
    document.getElementById('statCandidates').textContent = '0';
    document.getElementById('osmStatus').textContent = '';
    renderAll();
    setSyncStatus('ok', 'Reset complete.');
  });

  // ============================================================
  // Boot
  // ============================================================
  loadState();
  renderAll();
})();
