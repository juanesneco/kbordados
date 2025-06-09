// --- Client Logos Carousel ---
const clientLogos = [
  "static-site/images/clients/vivero.png",
  "static-site/images/clients/ventanas.png",
  "static-site/images/clients/umi.png",
  "static-site/images/clients/tisa.png",
  "static-site/images/clients/theresort.png",
  "static-site/images/clients/south_baja.png",
  "static-site/images/clients/solmar.png",
  "static-site/images/clients/shoppes_palmilla.png",
  "static-site/images/clients/rancho_sanlucas.png",
  "static-site/images/clients/quivira.png",
  "static-site/images/clients/questro.png",
  "static-site/images/clients/querencia.png",
  "static-site/images/clients/pro_riego.png",
  "static-site/images/clients/polo_house.png",
  "static-site/images/clients/ocean_blue.png",
  "static-site/images/clients/merkado.png",
  "static-site/images/clients/me_bymelia.png",
  "static-site/images/clients/mc_gregor.png",
  "static-site/images/clients/LuxMex.png",
  "static-site/images/clients/luna_demiel.png",
  "static-site/images/clients/lex.png",
  "static-site/images/clients/la_lupita.png",
  "static-site/images/clients/la_forchetta.png",
  "static-site/images/clients/La Madera.png",
  "static-site/images/clients/im_realestate.png",
  "static-site/images/clients/hyatt_ziva.png",
  "static-site/images/clients/hard_rock.png",
  "static-site/images/clients/ge_villa.png",
  "static-site/images/clients/forbes_properties.png",
  "static-site/images/clients/evergreen.png",
  "static-site/images/clients/eth.png",
  "static-site/images/clients/engel.png",
  "static-site/images/clients/diamante.png",
  "static-site/images/clients/cream.png",
  "static-site/images/clients/costa_palmas.png",
  "static-site/images/clients/chiltepec.png",
  "static-site/images/clients/chileno_bay.png",
  "static-site/images/clients/casa_dorada.png",
  "static-site/images/clients/canan.png",
  "static-site/images/clients/campestre.png",
  "static-site/images/clients/cabo_real.png",
  "static-site/images/clients/cabo del sol.png"
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
      btn.style.backgroundColor = '';
      btn.style.color = '#2C345C';
      btn.classList.remove('text-white');
      btn.classList.add('bg-white', 'text-[#2C345C]', 'border-[#2C345C]');
    } else {
      selectedServices.push(value);
      btn.style.backgroundColor = '#2C345C';
      btn.style.color = '#fff';
      btn.classList.add('text-white');
      btn.classList.remove('bg-white', 'text-[#2C345C]', 'border-[#2C345C]');
    }
    servicesInput.value = selectedServices.join(', ');
  });

  btn.addEventListener('mouseenter', function() {
    const value = btn.getAttribute('data-value');
    if (!selectedServices.includes(value)) {
      btn.style.color = '#D48C54';
    }
  });

  btn.addEventListener('mouseleave', function() {
    const value = btn.getAttribute('data-value');
    if (!selectedServices.includes(value)) {
      btn.style.color = '#2C345C';
    }
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