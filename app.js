// https://www.omnicalculator.com/other/impact-factor

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const impactfactorRadio = document.getElementById('impactfactorRadio');
const totalcitationsinnthyearRadio = document.getElementById('totalcitationsinnthyearRadio');
const citablepublicationsinn1yearRadio = document.getElementById('citablepublicationsinn1yearRadio');
const citablepublicationsinn2yearRadio = document.getElementById('citablepublicationsinn2yearRadio');

let impactfactor;
let totalcitationsinnthyear = v1;
let citablepublicationsinn1year = v2;
let citablepublicationsinn2year = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

impactfactorRadio.addEventListener('click', function() {
  variable1.textContent = 'Total citations in nᵗʰ year';
  variable2.textContent = 'Citable publications in n-1ᵗʰ year';
  variable3.textContent = 'Citable publications in n-2ᵗʰ year';
  totalcitationsinnthyear = v1;
  citablepublicationsinn1year = v2;
  citablepublicationsinn2year = v3;
  result.textContent = '';
});

totalcitationsinnthyearRadio.addEventListener('click', function() {
  variable1.textContent = 'Impact factor';
  variable2.textContent = 'Citable publications in n-1ᵗʰ year';
  variable3.textContent = 'Citable publications in n-2ᵗʰ year';
  impactfactor = v1;
  citablepublicationsinn1year = v2;
  citablepublicationsinn2year = v3;
  result.textContent = '';
});

citablepublicationsinn1yearRadio.addEventListener('click', function() {
  variable1.textContent = 'Impact factor';
  variable2.textContent = 'Total citations in nᵗʰ year';
  variable3.textContent = 'Citable publications in n-2ᵗʰ year';
  impactfactor = v1;
  totalcitationsinnthyear = v2;
  citablepublicationsinn2year = v3;
  result.textContent = '';
});

citablepublicationsinn2yearRadio.addEventListener('click', function() {
  variable1.textContent = 'Impact factor';
  variable2.textContent = 'Total citations in nᵗʰ year';
  variable3.textContent = 'Citable publications in n-1ᵗʰ year';
  impactfactor = v1;
  totalcitationsinnthyear = v2;
  citablepublicationsinn1year = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(impactfactorRadio.checked)
    result.textContent = `Impact factor = ${computeimpactfactor().toFixed(2)}`;

  else if(totalcitationsinnthyearRadio.checked)
    result.textContent = `Total citations in nᵗʰ year = ${computetotalcitationsinnthyear().toFixed(2)}`;

  else if(citablepublicationsinn1yearRadio.checked)
    result.textContent = `Citable publications in n-1ᵗʰ year = ${computecitablepublicationsinn1year().toFixed(2)}`;

  else if(citablepublicationsinn2yearRadio.checked)
    result.textContent = `Citable publications in n-2ᵗʰ year = ${computecitablepublicationsinn2year().toFixed(2)}`;
})

// calculation

// impactfactor = totalcitationsinnthyear / (citablepublicationsinn1year + citablepublicationsinn2year)

function computeimpactfactor() {
  return Number(totalcitationsinnthyear.value) / (Number(citablepublicationsinn1year.value) + Number(citablepublicationsinn2year.value));
}

function computetotalcitationsinnthyear() {
  return Number(impactfactor.value) * (Number(citablepublicationsinn1year.value) + Number(citablepublicationsinn2year.value));
}

function computecitablepublicationsinn1year() {
  return (Number(totalcitationsinnthyear.value) / Number(impactfactor.value)) - Number(citablepublicationsinn2year.value);
}

function computecitablepublicationsinn2year() {
  return (Number(totalcitationsinnthyear.value) / Number(impactfactor.value)) - Number(citablepublicationsinn1year.value);
}