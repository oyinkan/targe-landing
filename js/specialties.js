const specialties = [
    { 
        id: 'Digital Marketing (T-shaped)', 
        value: 'Digital Marketing (T-shaped)'
    },
    {
        id: 'Product Marketing',
        value: 'Product Marketing'
    },
    {
        id: 'Social Media Marketing',
        value: 'Social Media Marketing'
    },
    {
        id: 'Social Media Management',
        value: 'Social Media Management'
    },
    {
        id: 'Content Marketing',
        value: 'Content Marketing'
    },
    {
        id: 'Brand Communications',
        value: 'Brand Communications'
    },
    {
        id: 'Public Relations (PR)',
        value: 'Public Relations (PR)'
    },
    {
        id: 'Community Management',
        value: 'Community Management'
    },
    {
        id: 'Content Writing',
        value: 'Content Writing'
    },
    {
        id: 'SEO',
        value: 'SEO'
    },
    {
        id: 'Growth Marketing',
        value: 'Growth Marketing'
    },
    {
        id: 'Performance Marketing (PPC Specialist)',
        value: 'Performance Marketing (PPC Specialist)'
    },
    {
        id: 'Email Marketing',
        value: 'Email Marketing'
    }
]


let specialtiesDropdown = document.querySelector("#job-role");
for (var i = 0; i < countries.length; i++) {
    specialtiesDropdown.innerHTML = specialtiesDropdown.innerHTML +
      '<option value="' + specialties[i]['id'] + '">' + specialties[i]['value'] + '</option>';
}