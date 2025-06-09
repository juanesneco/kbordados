// --- Client Logos Carousel ---
const clientLogos = [
  "images/vivero.png",
  "images/ventanas.png",
  "images/umi.png",
  "images/tisa.png",
  "images/theresort.png",
  "images/south_baja.png",
  "images/solmar.png",
  "images/shoppes_palmilla.png",
  "images/rancho_sanlucas.png",
  "images/quivira.png",
  "images/questro.png",
  "images/querencia.png",
  "images/pro_riego.png",
  "images/polo_house.png",
  "images/ocean_blue.png",
  "images/merkado.png",
  "images/me_bymelia.png",
  "images/mc_gregor.png",
  "images/LuxMex.png",
  "images/luna_demiel.png",
  "images/lex.png",
  "images/la_lupita.png",
  "images/la_forchetta.png",
  "images/La Madera.png",
  "images/im_realestate.png",
  "images/hyatt_ziva.png",
  "images/hard_rock.png",
  "images/ge_villa.png",
  "images/forbes_properties.png",
  "images/evergreen.png",
  "images/eth.png",
  "images/engel.png",
  "images/diamante.png",
  "images/cream.png",
  "images/costa_palmas.png",
  "images/chiltepec.png",
  "images/chileno_bay.png",
  "images/casa_dorada.png",
  "images/canan.png",
  "images/campestre.png",
  "images/cabo_real.png",
  "images/cabo del sol.png"
];
const LOGOS_PER_PAGE = 12;
let startIdx = 0;

function renderClientLogos() {
  const container = document.getElementById('client-logos');
  container.innerHTML = '';
  const endIdx = startIdx + LOGOS_PER_PAGE;
  const logosToShow = clientLogos.slice(startIdx, endIdx);
  logosToShow.forEach((src, idx) => {
    const div = document.createElement('div');
    div.className = 'flex items-center justify-center bg-white rounded-lg shadow p-6 h-48 w-48';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Cliente ${startIdx + idx + 1}`;
    img.className = 'max-h-36 max-w-36 w-auto h-auto object-contain';
    div.appendChild(img);
    container.appendChild(div);
  });
}

document.getElementById('slideLeft').addEventListener('click', function() {
  if (startIdx === 0) {
    startIdx = clientLogos.length - LOGOS_PER_PAGE < 0 ? 0 : clientLogos.length - LOGOS_PER_PAGE;
  } else {
    startIdx = Math.max(startIdx - LOGOS_PER_PAGE, 0);
  }
  renderClientLogos();
});

document.getElementById('slideRight').addEventListener('click', function() {
  const endIdx = startIdx + LOGOS_PER_PAGE;
  if (endIdx >= clientLogos.length) {
    startIdx = 0;
  } else {
    startIdx = Math.min(startIdx + LOGOS_PER_PAGE, clientLogos.length - LOGOS_PER_PAGE);
  }
  renderClientLogos();
});

renderClientLogos();

// --- Contact Form Interactivity ---
const serviceButtons = document.querySelectorAll('#service-options button');
const servicesInput = document.getElementById('services-input');
let selectedServices = [];

serviceButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    const value = btn.getAttribute('data-value');
    if (selectedServices.includes(value)) {
      selectedServices = selectedServices.filter(s => s !== value);
      btn.classList.remove('bg-[#D48C54]', 'text-white', 'border-[#D48C54]');
      btn.classList.add('bg-white', 'text-[#2C345C]', 'border-[#2C345C]');
    } else {
      selectedServices.push(value);
      btn.classList.add('bg-[#D48C54]', 'text-white', 'border-[#D48C54]');
      btn.classList.remove('bg-white', 'text-[#2C345C]', 'border-[#2C345C]');
    }
    servicesInput.value = selectedServices.join(', ');
  });
});

// Phone input validation (only numbers, max 10 digits)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
    e.target.value = cleaned;
  });
}

// --- AJAX Form Submission (optional, for better UX) ---
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formStatus.textContent = '';
    const formData = new FormData(contactForm);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    formStatus.textContent = 'Enviando...';
    fetch('https://formspree.io/f/mvgrgnee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          formStatus.textContent = '¡Gracias! Tu mensaje fue enviado correctamente.';
          contactForm.reset();
          selectedServices = [];
          serviceButtons.forEach(btn => {
            btn.classList.remove('bg-[#D48C54]', 'text-white', 'border-[#D48C54]');
            btn.classList.add('bg-white', 'text-[#2C345C]', 'border-[#2C345C]');
          });
        } else {
          formStatus.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
        }
      })
      .catch(() => {
        formStatus.textContent = 'Hubo un error al enviar el mensaje. Intenta de nuevo.';
      });
  });
} 